import { Card, CardContent } from '@/components/ui/card'
import { Send, Mail, MessageSquare, Github, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="relative border-b bg-gradient-to-r from-background/95 via-background/90 to-background/95 backdrop-blur-2xl sticky top-0 z-50 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 animate-pulse-slow"></div>
        
        <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4 relative">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 sm:gap-4">
              <div className="relative group cursor-pointer">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary via-primary to-primary/80 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group-hover:rotate-6">
                  <Send className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
                </div>
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
            </Link>
            
            <nav className="hidden md:flex items-center gap-2">
              <Link
                href="/"
                className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-4 py-2 rounded-lg text-sm font-medium text-primary bg-primary/10 transition-all duration-200"
              >
                Contact
              </Link>
            </nav>

            <nav className="flex md:hidden items-center gap-1">
              <Link
                href="/"
                className="px-2 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="px-2 py-1.5 rounded-lg text-xs font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="px-2 py-1.5 rounded-lg text-xs font-medium text-primary bg-primary/10 transition-all duration-200"
              >
                Contact
              </Link>
            </nav>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-3 sm:px-4 py-8 sm:py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-10 sm:mb-16 px-2">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">Get in Touch</h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed">
              Have questions or feedback? We'd love to hear from you
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            <Card className="border-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                  Send us an email and we'll get back to you soon
                </p>
                <a 
                  href="mailto:mianhassam96@gmail.com" 
                  className="text-sm sm:text-base text-blue-600 hover:text-blue-700 font-medium hover:underline break-all"
                >
                  mianhassam96@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-green-500/10 to-green-600/5 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Feedback</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">
                  Share your thoughts and help us improve
                </p>
                <a 
                  href="mailto:mianhassam96@gmail.com" 
                  className="text-sm sm:text-base text-green-600 hover:text-green-700 font-medium hover:underline break-all"
                >
                  mianhassam96@gmail.com
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Social Links */}
          <Card className="border-0 bg-gradient-to-br from-background to-muted/20">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-center">Connect With Us</h3>
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                <a
                  href="https://github.com/Mianhassam96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-br from-gray-500/10 to-gray-600/5 hover:from-gray-500/20 hover:to-gray-600/10 transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-medium text-sm sm:text-base">GitHub</span>
                </a>

                <a
                  href="https://www.facebook.com/mian.hassam.kz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-600/5 hover:from-blue-500/20 hover:to-blue-600/10 transition-all duration-300 hover:scale-105"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-medium text-sm sm:text-base">Facebook</span>
                </a>

                <a
                  href="https://linkedin.com/in/mianhassam96"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-lg bg-gradient-to-br from-blue-700/10 to-blue-800/5 hover:from-blue-700/20 hover:to-blue-800/10 transition-all duration-300 hover:scale-105"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="font-medium text-sm sm:text-base">LinkedIn</span>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <div className="mt-10 sm:mt-16">
            <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">Frequently Asked Questions</h3>
            <div className="space-y-3 sm:space-y-4">
              <Card className="border-0 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-4 sm:p-6">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Is SendMian free to use?</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Yes! SendMian is completely free to use. Upload and share files without any cost or account registration.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-4 sm:p-6">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">What file types can I upload?</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    You can upload any file type including images, videos, documents, and more. There are no restrictions on file formats.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-4 sm:p-6">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">How long are files stored?</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    Files are stored securely on our servers. We maintain your files to ensure reliable access through the public links.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-4 sm:p-6">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Is there a file size limit?</h4>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    No, there is no file size limit. Upload files of any size and share them instantly.
                  </p>
                </CardContent>
              </Card>
            </div>
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
                <Link href="/" className="text-slate-400 hover:text-white transition-colors text-sm">Home</Link>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors text-sm">About Us</Link>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contact</Link>
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
