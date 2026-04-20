import { NextRequest, NextResponse } from 'next/server'

// Metadata endpoint — no-op without a database, returns success for compatibility
export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    return NextResponse.json({ success: true, file: body })
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 })
  }
}
