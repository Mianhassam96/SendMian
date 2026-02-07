'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { Upload, HardDrive, Clock } from 'lucide-react'
import { formatFileSize } from '@/lib/utils'

interface Stats {
  totalFiles: number
  totalSize: number
  recentFiles: Array<{
    filename: string
    size: number
    mimeType: string
    createdAt: string
  }>
}

export default function StatsDisplay() {
  const [stats, setStats] = useState<Stats | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = async () => {
    try {
      const response = await fetch('/api/stats')
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      const data = await response.json()
      if (data.success) {
        setStats(data.stats)
      } else {
        console.error('Stats API error:', data.error)
      }
    } catch (error) {
      console.error('Failed to fetch stats:', error)
      // Set default stats to prevent UI breaking
      setStats({
        totalFiles: 0,
        totalSize: 0,
        recentFiles: []
      })
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <Card className="border-0 bg-gradient-to-r from-muted/20 to-muted/30">
        <CardContent className="p-6">
          <div className="animate-pulse">
            <div className="h-4 bg-muted rounded w-1/3 mb-2"></div>
            <div className="h-8 bg-muted rounded w-1/2"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (!stats) return null

  return (
    <div className="grid md:grid-cols-3 gap-4">
      <Card className="border-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5 hover:from-blue-500/20 hover:to-blue-600/10 transition-all duration-300">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-500/20 flex items-center justify-center">
            <Upload className="w-6 h-6 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-blue-700">{stats.totalFiles.toLocaleString()}</p>
          <p className="text-sm text-muted-foreground">Files Uploaded</p>
        </CardContent>
      </Card>

      <Card className="border-0 bg-gradient-to-br from-green-500/10 to-green-600/5 hover:from-green-500/20 hover:to-green-600/10 transition-all duration-300">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-green-500/20 flex items-center justify-center">
            <HardDrive className="w-6 h-6 text-green-600" />
          </div>
          <p className="text-2xl font-bold text-green-700">{formatFileSize(stats.totalSize)}</p>
          <p className="text-sm text-muted-foreground">Total Storage</p>
        </CardContent>
      </Card>

      <Card className="border-0 bg-gradient-to-br from-purple-500/10 to-purple-600/5 hover:from-purple-500/20 hover:to-purple-600/10 transition-all duration-300">
        <CardContent className="p-6 text-center">
          <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-purple-500/20 flex items-center justify-center">
            <Clock className="w-6 h-6 text-purple-600" />
          </div>
          <p className="text-2xl font-bold text-purple-700">24/7</p>
          <p className="text-sm text-muted-foreground">Always Available</p>
        </CardContent>
      </Card>
    </div>
  )
}