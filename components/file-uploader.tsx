'use client'

import { useState, useCallback, useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Upload, Copy, Download, Image, Video, File, Link2, Check, X, Share, Sparkles, Plus } from 'lucide-react'
import { formatFileSize } from '@/lib/utils'
import ImagePreviewModal from '@/components/image-preview-modal'

interface UploadedFile {
  name: string
  size: number
  type: string
  url: string
  key: string
}

export default function FileUploader() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([])
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null)
  const [dragOver, setDragOver] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [previewImage, setPreviewImage] = useState<{url: string, name: string} | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const copyToClipboard = async (url: string) => {
    try {
      await navigator.clipboard.writeText(url)
      setCopiedUrl(url)
      setTimeout(() => setCopiedUrl(null), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  const shareFile = async (file: UploadedFile) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Shared file: ${file.name}`,
          text: `Check out this file I shared: ${file.name}`,
          url: file.url
        })
      } catch (error) {
        // Fallback to copy
        copyToClipboard(file.url)
      }
    } else {
      copyToClipboard(file.url)
    }
  }

  const getFileIcon = (type: string) => {
    if (type.startsWith('image/')) return <Image className="w-6 h-6 text-blue-500" />
    if (type.startsWith('video/')) return <Video className="w-6 h-6 text-purple-500" />
    if (type === 'application/pdf') return <File className="w-6 h-6 text-red-500" />
    if (type === 'application/rtf' || type === 'text/rtf') return <File className="w-6 h-6 text-orange-500" />
    return <File className="w-6 h-6 text-gray-500" />
  }

  const getFileTypeColor = (type: string) => {
    if (type.startsWith('image/')) return 'from-blue-500/10 to-blue-600/5 border-blue-500/20'
    if (type.startsWith('video/')) return 'from-purple-500/10 to-purple-600/5 border-purple-500/20'
    if (type === 'application/pdf') return 'from-red-500/10 to-red-600/5 border-red-500/20'
    if (type === 'application/rtf' || type === 'text/rtf') return 'from-orange-500/10 to-orange-600/5 border-orange-500/20'
    return 'from-gray-500/10 to-gray-600/5 border-gray-500/20'
  }

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setDragOver(false)
    
    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      uploadFiles(files)
    }
  }, [])

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    if (files.length > 0) {
      uploadFiles(files)
    }
  }

  const uploadFiles = async (files: File[]) => {
    setUploading(true)
    
    for (const file of files) {
      try {
        const formData = new FormData()
        formData.append('file', file)

        const response = await fetch('/api/upload-file', {
          method: 'POST',
          body: formData
        })

        const result = await response.json()

        if (result.success) {
          setUploadedFiles(prev => [...prev, result.file])
        } else {
          alert(`Failed to upload "${file.name}": ${result.error}`)
        }
      } catch (error) {
        console.error('Upload error:', error)
        alert(`Failed to upload "${file.name}": Network error`)
      }
    }
    
    setUploading(false)
  }

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index))
  }

  const openFileDialog = () => {
    fileInputRef.current?.click()
  }

  const openImagePreview = (file: UploadedFile) => {
    if (file.type.startsWith('image/')) {
      setPreviewImage({ url: file.url, name: file.name })
    }
  }

  return (
    <div className="space-y-8">
      {/* Upload Section */}
      <Card className="overflow-hidden shadow-2xl border-0 bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/15 transition-all duration-300">
        <CardHeader className="bg-gradient-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent animate-pulse-slow"></div>
          <CardTitle className="relative flex items-center gap-3 text-xl">
            <div className="p-2 rounded-full bg-white/20">
              <Upload className="w-6 h-6" />
            </div>
            Upload Your Files
          </CardTitle>
          <p className="relative text-white/90 text-sm">
            Drag & drop files or click to browse • Get instant shareable links with preview
          </p>
          <div className="relative flex flex-wrap gap-2 mt-2">
            <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">Images</span>
            <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">Videos</span>
            <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">PDFs</span>
            <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">RTF</span>
            <span className="text-xs bg-white/10 text-white/80 px-2 py-1 rounded">Documents</span>
          </div>
        </CardHeader>
        <CardContent className="p-8">
          <div
            className={`relative transition-all duration-300 border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer ${
              dragOver 
                ? 'border-primary bg-primary/10 scale-105' 
                : 'border-primary/30 hover:border-primary/50 hover:bg-primary/5'
            }`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={openFileDialog}
          >
            <input
              ref={fileInputRef}
              type="file"
              multiple
              onChange={handleFileSelect}
              className="hidden"
              accept="image/*,video/*,.pdf,.rtf,.doc,.docx,.txt,.zip,.rar"
            />
            
            <div className="flex flex-col items-center gap-4">
              {uploading ? (
                <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              ) : (
                <Upload className="w-16 h-16 text-primary" />
              )}
              
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {uploading ? "Uploading..." : "Drop files here or click to upload"}
                </h3>
                <p className="text-muted-foreground text-base">
                  Images, videos, PDFs, RTF, documents • No size limit • Instant preview & sharing
                </p>
              </div>
              
              {!uploading && (
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                  onClick={(e) => {
                    e.stopPropagation()
                    openFileDialog()
                  }}
                >
                  <Plus className="w-5 h-5 mr-2" />
                  Choose Files
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Uploaded Files */}
      {uploadedFiles.length > 0 && (
        <Card className="shadow-xl border-0 bg-gradient-to-br from-background to-muted/20">
          <CardHeader className="bg-gradient-to-r from-green-500/10 to-green-600/5 border-b">
            <CardTitle className="flex items-center gap-3 text-green-700">
              <div className="p-2 rounded-full bg-green-500/20">
                <Sparkles className="w-5 h-5" />
              </div>
              Your Files ({uploadedFiles.length})
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              Files uploaded successfully • Click images for full preview • Copy links to share
            </p>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {uploadedFiles.map((file, index) => (
                <div
                  key={index}
                  className={`group relative flex flex-col gap-4 p-6 rounded-2xl border bg-gradient-to-r ${getFileTypeColor(file.type)} hover:shadow-lg transition-all duration-300 hover:scale-[1.02]`}
                >
                  {/* File Preview */}
                  <div className="w-full">
                    {file.type.startsWith('image/') ? (
                      <div className="relative group/preview">
                        <img
                          src={file.url}
                          alt={file.name}
                          className="w-full h-48 object-cover rounded-xl cursor-pointer hover:opacity-90 transition-opacity"
                          onClick={() => openImagePreview(file)}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover/preview:bg-black/20 rounded-xl transition-colors flex items-center justify-center opacity-0 group-hover/preview:opacity-100">
                          <div className="bg-black/70 text-white px-3 py-2 rounded-lg text-sm font-medium">
                            Click for full preview
                          </div>
                        </div>
                      </div>
                    ) : file.type.startsWith('video/') ? (
                      <div className="relative">
                        <video
                          src={file.url}
                          className="w-full h-48 object-cover rounded-xl"
                          controls
                          preload="metadata"
                        />
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-48 bg-background/50 rounded-xl border-2 border-dashed border-muted">
                        <div className="text-center">
                          {getFileIcon(file.type)}
                          <p className="text-sm font-medium text-foreground mt-3">
                            {file.type === 'application/pdf' ? 'PDF Document' : 
                             file.type === 'application/rtf' || file.type === 'text/rtf' ? 'RTF Document' : 
                             'Document'}
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {file.name.length > 20 ? file.name.substring(0, 20) + '...' : file.name}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* File Info */}
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg truncate group-hover:text-primary transition-colors">
                        {file.name}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mt-1">
                        <span className="font-medium">{formatFileSize(file.size)}</span>
                        <span className="capitalize">{file.type.split('/')[0]} file</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 ml-4">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => shareFile(file)}
                        className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      >
                        {copiedUrl === file.url ? (
                          <>
                            <Check className="w-4 h-4 text-green-500" />
                            <span className="hidden sm:inline">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Share className="w-4 h-4" />
                            <span className="hidden sm:inline">Share</span>
                          </>
                        )}
                      </Button>
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(file.url, '_blank')}
                        className="hover:bg-blue-500 hover:text-white transition-all duration-200"
                      >
                        <Download className="w-4 h-4" />
                      </Button>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeFile(index)}
                        className="hover:bg-red-500 hover:text-white transition-all duration-200"
                      >
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Public Link Display */}
                  <div className="bg-background/50 rounded-lg p-3 border">
                    <div className="flex items-center gap-2 mb-2">
                      <Link2 className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">Public Link</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        value={file.url}
                        readOnly
                        className="flex-1 text-xs bg-transparent border-0 p-1 text-muted-foreground font-mono"
                        onClick={(e) => e.currentTarget.select()}
                      />
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(file.url)}
                        className="h-6 px-2"
                      >
                        <Copy className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-6 p-4 rounded-xl bg-muted/50 border border-muted">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link2 className="w-4 h-4" />
                <span>
                  Your files are stored securely with instant public links. 
                  Share these links with anyone to give them access to your files.
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Instructions */}
      {uploadedFiles.length === 0 && (
        <Card className="border-0 bg-gradient-to-r from-muted/30 to-muted/50">
          <CardContent className="p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">How it works</h3>
              <div className="grid md:grid-cols-3 gap-6 text-sm">
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Upload className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">1. Upload</p>
                    <p className="text-muted-foreground">Drag & drop or select your files</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Link2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">2. Preview & Get Link</p>
                    <p className="text-muted-foreground">Instant preview with shareable links</p>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Share className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">3. Share</p>
                    <p className="text-muted-foreground">Send links via email, chat, or social media</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Image Preview Modal */}
      <ImagePreviewModal
        isOpen={!!previewImage}
        onClose={() => setPreviewImage(null)}
        imageUrl={previewImage?.url || ''}
        fileName={previewImage?.name || ''}
        onShare={() => previewImage && shareFile(uploadedFiles.find(f => f.url === previewImage.url)!)}
        onCopy={() => previewImage && copyToClipboard(previewImage.url)}
        copied={copiedUrl === previewImage?.url}
      />
    </div>
  )
}