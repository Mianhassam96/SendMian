import { NextRequest, NextResponse } from 'next/server'
import { nanoid } from 'nanoid'
import { writeFile, mkdir, readFile, writeFile as writeFileFs } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads')
const STATS_FILE = path.join(process.cwd(), 'data', 'stats.json')

async function ensureDir(dir: string) {
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true })
  }
}

async function updateStats(fileSize: number) {
  try {
    await ensureDir(path.dirname(STATS_FILE))
    let stats = { totalFiles: 0, totalSize: 0 }
    if (existsSync(STATS_FILE)) {
      const raw = await readFile(STATS_FILE, 'utf-8')
      stats = JSON.parse(raw)
    }
    stats.totalFiles += 1
    stats.totalSize += fileSize
    await writeFileFs(STATS_FILE, JSON.stringify(stats))
  } catch {
    // non-critical, ignore
  }
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData()
    const file: File | null = data.get('file') as unknown as File

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file uploaded' }, { status: 400 })
    }

    // 100MB limit
    if (file.size > 100 * 1024 * 1024) {
      return NextResponse.json({ success: false, error: 'File too large. Max 100MB.' }, { status: 413 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const fileId = nanoid(12)
    const ext = path.extname(file.name) || ''
    const filename = `${fileId}${ext}`
    const mimeType = file.type || 'application/octet-stream'

    await ensureDir(UPLOADS_DIR)
    await writeFile(path.join(UPLOADS_DIR, filename), buffer)
    await updateStats(file.size)

    const appUrl = process.env.NEXT_PUBLIC_APP_URL || ''
    const fileUrl = `${appUrl}/uploads/${filename}`

    return NextResponse.json({
      success: true,
      file: {
        id: fileId,
        name: file.name,
        size: file.size,
        type: mimeType,
        url: fileUrl,
        key: fileId
      }
    })
  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { success: false, error: error instanceof Error ? error.message : 'Upload failed' },
      { status: 500 }
    )
  }
}
