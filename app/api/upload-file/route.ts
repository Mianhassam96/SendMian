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

    // Create uploads directory if it doesn't exist
    const uploadsDir = join(process.cwd(), 'public', 'uploads')
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

    // Write file
    await writeFile(filepath, buffer)

    // Create public URL
    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'
    const publicUrl = `${baseUrl}/uploads/${filename}`

    // Try to store in database (optional)
    try {
      const { db } = await import('@/lib/db')
      if (db) {
        await db.file.create({
          data: {
            messageId: `local-${fileId}`,
            roomId: 'public',
            filename: filename,
            originalName: file.name,
            size: file.size,
            mimeType: file.type || 'application/octet-stream',
            url: publicUrl,
            key: fileId,
          }
        })
      }
    } catch (dbError) {
      console.log('Database not available, file uploaded without metadata storage')
    }

    return NextResponse.json({
      success: true,
      file: {
        id: fileId,
        name: file.name,
        size: file.size,
        type: file.type || 'application/octet-stream',
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