'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { X, Download, Share, Copy, Check } from 'lucide-react'

interface ImagePreviewModalProps {
  isOpen: boolean
  onClose: () => void
  imageUrl: string
  fileName: string
  onShare: () => void
  onCopy: () => void
  copied: boolean
}

export default function ImagePreviewModal({
  isOpen,
  onClose,
  imageUrl,
  fileName,
  onShare,
  onCopy,
  copied
}: ImagePreviewModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="relative max-w-7xl max-h-full w-full h-full flex items-center justify-center">
        {/* Close button */}
        <Button
          onClick={onClose}
          variant="outline"
          size="icon"
          className="absolute top-4 right-4 z-10 bg-black/50 border-white/20 text-white hover:bg-black/70"
        >
          <X className="w-4 h-4" />
        </Button>

        {/* Image */}
        <img
          src={imageUrl}
          alt={fileName}
          className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
        />

        {/* Controls */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2">
          <Button
            onClick={onShare}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 mr-2 text-green-400" />
                Copied!
              </>
            ) : (
              <>
                <Share className="w-4 h-4 mr-2" />
                Share
              </>
            )}
          </Button>
          
          <Button
            onClick={() => window.open(imageUrl, '_blank')}
            variant="ghost"
            size="sm"
            className="text-white hover:bg-white/20"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>

        {/* File name */}
        <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
          <p className="text-white text-sm font-medium truncate max-w-xs">
            {fileName}
          </p>
        </div>
      </div>
    </div>
  )
}