import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { nanoid } from 'nanoid'

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData()
    const file: File | null = data.get('file') as unknown as File

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file uploaded' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Use /tmp directory on Vercel (serverless environment)
    // Note: Files in /tmp are temporary and will be cleared
    const uploadsDir = join('/tmp', 'uploads')
    try {
      await mkdir(uploadsDir, { recursive: true })
    } catch (error) {
      // Directory might already exist
    }

    // Generate unique filename
    const fileId = nanoid(12)
    const extension = file.name.split('.').pop() || 'bin'
    const filename = `${fileId}.${extension}`
    const filepath = join(uploadsDir, filename)

    // Write file to /tmp
    await writeFile(filepath, buffer)

    // Convert to base64 for inline serving (works on Vercel)
    const base64 = buffer.toString('base64')
    const mimeType = file.type || 'application/octet-stream'
    const dataUrl = `data:${mimeType};base64,${base64}`

    return NextResponse.json({
      success: true,
      file: {
        id: fileId,
        name: file.name,
        size: file.size,
        type: mimeType,
        url: dataUrl, // Use data URL for immediate access
        key: fileId
      }
    })

  } catch (error) {
    console.error('Upload error:', error)
    return NextResponse.json(
      { success: false, error: 'Upload failed' },
      { status: 500 }
    )
  }
}