import { NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { existsSync } from 'fs'
import path from 'path'

const STATS_FILE = path.join(process.cwd(), 'data', 'stats.json')

export async function GET() {
  try {
    let stats = { totalFiles: 0, totalSize: 0 }
    if (existsSync(STATS_FILE)) {
      const raw = await readFile(STATS_FILE, 'utf-8')
      stats = JSON.parse(raw)
    }
    return NextResponse.json({ success: true, stats: { ...stats, recentFiles: [] } })
  } catch {
    return NextResponse.json({
      success: true,
      stats: { totalFiles: 0, totalSize: 0, recentFiles: [] }
    })
  }
}
