import { NextRequest, NextResponse } from 'next/server'
import { nanoid } from 'nanoid'

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData()
    const file: File | null = data.get('file') as unknown as File

    if (!file) {
      return NextResponse.json({ success: false, error: 'No file uploaded' }, { status: 400 })
    }

    // Read file as array buffer
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // Generate unique ID
    const fileId = nanoid(12)
    const mimeType = file.type || 'application/octet-stream'

    // Convert to base64 data URL (works perfectly on Vercel)
    const base64 = buffer.toString('base64')
    const dataUrl = `data:${mimeType};base64,${base64}`

    // Return the data URL as the public URL
    return NextResponse.json({
      success: true,
      file: {
        id: fileId,
        name: file.name,
        size: file.size,
        type: mimeType,
        url: dataUrl, // Data URL works everywhere, including Vercel
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