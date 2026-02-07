import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function POST(req: NextRequest) {
  try {
    const { fileName, fileSize, fileType, fileUrl, fileKey } = await req.json()

    // Store file metadata for tracking (optional)
    const file = await db.file.create({
      data: {
        messageId: 'standalone', // Special ID for standalone uploads
        roomId: 'public', // Special room ID for public uploads
        filename: fileName,
        originalName: fileName,
        size: fileSize,
        mimeType: fileType,
        url: fileUrl,
        key: fileKey,
      }
    })

    return NextResponse.json({
      success: true,
      file: {
        id: file.id,
        name: file.filename,
        size: file.size,
        type: file.mimeType,
        url: file.url,
        key: file.key
      }
    })
  } catch (error) {
    console.error('File upload error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to process upload' },
      { status: 500 }
    )
  }
}