import { NextRequest, NextResponse } from 'next/server'
import { fileStore } from '../../upload-file/route'

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const fileId = params.id
    const fileData = fileStore.get(fileId)

    if (!fileData) {
      return NextResponse.json(
        { success: false, error: 'File not found' },
        { status: 404 }
      )
    }

    // Return file with proper headers
    return new NextResponse(fileData.buffer, {
      headers: {
        'Content-Type': fileData.type,
        'Content-Disposition': `inline; filename="${fileData.name}"`,
        'Cache-Control': 'public, max-age=31536000',
      },
    })
  } catch (error) {
    console.error('File serve error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to serve file' },
      { status: 500 }
    )
  }
}
