import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { nanoid } from 'nanoid'

// Store files in memory for Vercel deployment
const fileStore = new Map<string, { buffer: Buffer; name: string; type: string; size: number }>()

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData()
    const file: File | null = data.get('file') as unknown as File

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file uploaded' }, { status: 400 })
    }

    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Generate unique filename
    const fileId = nanoid(12)
    const extension = file.name.split('.').pop() || 'bin'
    const filename = `${fileId}.${extension}`
    const mimeType = file.type || 'application/octet-stream'

    // Store file in memory (works on Vercel)
    fileStore.set(fileId, {
      buffer,
      name: file.name,
      type: mimeType,
      size: file.size
    })

    // Create public URL using API route
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 
                    (typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000')
    const publicUrl = `${baseUrl}/api/files/${fileId}`

    return NextResponse.json({
      success: true,
      file: {
        id: fileId,
        name: file.name,
        size: file.size,
        type: mimeType,
        url: publicUrl,
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

// Export fileStore for use in file serving route
export { fileStore }