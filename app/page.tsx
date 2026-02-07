import FileUploader from '@/components/file-uploader'
import StatsDisplay from '@/components/stats-display'
import { Card, CardContent } from '@/components/ui/card'
import { Zap, Globe, Lock, Upload, Share, Shield, Send } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="relative border-b bg-gradient-to-r from-background/95 via-background/90 to-background/95 backdrop-blur-2xl sticky top-0 z-50 shadow-lg">
        {/* Animated background pattern */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 animate-pulse-slow"></div>
        
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 relative">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <a href="/" className="flex items-center gap-2 sm:gap-4">
              <div className="relative group cursor-pointer">
                {/* Main logo */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary via-primary to-primary/80 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group-hover:rotate-6">
                  <Send className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
                
                {/* Status indicator */}
                <div className="absolute -top-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full animate-pulse shadow-lg border-2 border-background"></div>
              </div>
              
              <div>
                <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SendMian
                </h1>
                <p className="text-[10px] sm:text-xs text-muted-foreground font-medium hidden xs:block">
                  Instant File Sharing
                </p>
              </div>
            </a>
            
            {/* Navigation Tabs - Desktop */}
            <nav className="hidden md:flex items-center gap-2">
              <a
                href="/"
                className="px-4 py-2 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
              >
                Home
              </a>
              <a
                href="/about"
                className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
              >
                About
              </a>
              <a
                href="/contact"
                className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
              >
                Contact
              </a>
            </nav>

            {/* Mobile Navigation */}
            <nav className="flex md:hidden items-center gap-1">
              <a
                href="/"
                className="px-2 py-1.5 rounded-lg text-xs font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
              >
                Home
              </a>
              <a
                href="/about"
                className="px-2 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
              >
                About
              </a>
              <a
                href="/contact"
                className="px-2 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
              >
                Contact
              </a>
            </nav>
          </div>
          
          {/* Animated underline */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-3 sm:px-4 py-6 sm:py-12">
        <div className="text-center mb-8 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6 animate-pulse-slow">
            <Upload className="w-3 h-3 sm:w-4 sm:h-4" />
            <span className="hidden xs:inline">No Account Required • </span>Instant File Sharing
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent px-2">
            Share Files Instantly
          </h2>
          
          <p className="text-base sm:text-xl md:text-2xl text-muted-foreground mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed px-4">
            Upload files, photos, and videos to get instant public links you can share anywhere
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12 px-2">
            <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/10 text-blue-600 hover:bg-blue-500/20 transition-colors">
              <Globe className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">Public Links</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-green-500/10 text-green-600 hover:bg-green-500/20 transition-colors">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">Lightning Fast</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-purple-500/10 text-purple-600 hover:bg-purple-500/20 transition-colors">
              <Shield className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">Secure Storage</span>
            </div>
          </div>
        </div>

        {/* Main Upload Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-20">
          <FileUploader />
        </div>

        {/* Stats Section */}
        <div className="max-w-4xl mx-auto mb-12 sm:mb-20">
          <div className="text-center mb-6 sm:mb-8 px-4">
            <h2 className="text-xl sm:text-2xl font-bold mb-2">Platform Statistics</h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              Join thousands of users who trust SendMian for their file sharing needs
            </p>
          </div>
          <StatsDisplay />
        </div>

        {/* Features Grid */}
        <div className="max-w-6xl mx-auto px-3 sm:px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Why Choose SendMian?</h2>
            <p className="text-muted-foreground text-sm sm:text-base md:text-lg px-4">
              The fastest and easiest way to share your files with anyone, anywhere
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5 hover:from-blue-500/20 hover:to-blue-600/10">
              <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-blue-500/30">
                  <Globe className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-blue-600" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Instant Public Links</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Get direct shareable links for your files that work anywhere, anytime
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-green-500/10 to-green-600/5 hover:from-green-500/20 hover:to-green-600/10">
              <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-green-500/20 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-green-500/30">
                  <Zap className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-green-600" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Upload and share files instantly with our optimized infrastructure
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-purple-500/10 to-purple-600/5 hover:from-purple-500/20 hover:to-purple-600/10">
              <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-purple-500/30">
                  <Shield className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-purple-600" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Secure & Reliable</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Your files are stored securely with enterprise-grade infrastructure
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-orange-500/10 to-orange-600/5 hover:from-orange-500/20 hover:to-orange-600/10">
              <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-orange-500/30">
                  <Upload className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-orange-600" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">No Account Needed</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Start uploading immediately without registration or sign-up
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-teal-500/10 to-teal-600/5 hover:from-teal-500/20 hover:to-teal-600/10">
              <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-teal-500/20 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-teal-500/30">
                  <Share className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-teal-600" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">Easy Sharing</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Copy links with one click and share via email, social media, or messaging
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-0 bg-gradient-to-br from-pink-500/10 to-pink-600/5 hover:from-pink-500/20 hover:to-pink-600/10">
              <CardContent className="p-4 sm:p-6 md:p-8 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform group-hover:bg-pink-500/30">
                  <Lock className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-pink-600" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">No Size Limit</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Upload files of any size including videos, images, and documents
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 mt-12 sm:mt-20 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-blue-500/10 to-purple-500/10 animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]"></div>
        
        <div className="container mx-auto px-3 sm:px-4 py-10 sm:py-16 relative">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mb-8">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary via-blue-600 to-purple-600 flex items-center justify-center shadow-2xl">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse border-2 border-slate-900"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                    SendMian
                  </h3>
                  <p className="text-xs text-slate-400">Instant File Sharing</p>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed max-w-xs mx-auto md:mx-0">
                Share files instantly with anyone, anywhere. No limits, no hassle.
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
              <div className="flex flex-col gap-2">
                <a href="/" className="text-slate-400 hover:text-white transition-colors text-sm">Home</a>
                <a href="/about" className="text-slate-400 hover:text-white transition-colors text-sm">About Us</a>
                <a href="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</a>
              </div>
            </div>

            {/* Company Info */}
            <div className="text-center md:text-right">
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h4>
              <div className="space-y-2">
                <p className="text-2xl font-bold bg-gradient-to-r from-primary via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  MultiMian
                </p>
                <p className="text-xs text-slate-400">Powered by SendMian Technology</p>
                <p className="text-sm text-slate-300 font-medium mt-3">Built By Mian Hassam</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-6"></div>

          {/* Bottom Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <p className="text-xs sm:text-sm text-slate-400">
              © 2026 MultiMian. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-slate-600">•</span>
              <a href="#" className="text-xs text-slate-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-blue-500 to-purple-500"></div>
      </footer>
    </div>
  )
}