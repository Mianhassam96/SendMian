import { Card, CardContent } from '@/components/ui/card'
import { Send, Mail, MessageSquare, Github, Twitter, Linkedin } from 'lucide-react'
import Link from 'next/link'

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Header */}
      <header className="relative border-b bg-gradient-to-r from-background/95 via-background/90 to-background/95 backdrop-blur-2xl sticky top-0 z-50 shadow-lg">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 animate-pulse-slow"></div>
        
        <div className="container mx-auto px-4 py-4 relative">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4">
              <div className="relative group cursor-pointer">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary via-primary to-primary/80 flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group-hover:rotate-6">
                  <Send className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-green-400 to-green-600 rounded-full animate-pulse shadow-lg border-2 border-background"></div>
              </div>
              
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                  SendMian
                </h1>
                <p className="text-xs text-muted-foreground font-medium">
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
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions or feedback? We'd love to hear from you
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="border-0 bg-gradient-to-br from-blue-500/10 to-blue-600/5 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Mail className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                <p className="text-muted-foreground mb-4">
                  Send us an email and we'll get back to you soon
                </p>
                <a 
                  href="mailto:support@sendmian.com" 
                  className="text-blue-600 hover:text-blue-700 font-medium hover:underline"
                >
                  support@sendmian.com
                </a>
              </CardContent>
            </Card>

            <Card className="border-0 bg-gradient-to-br from-green-500/10 to-green-600/5 hover:shadow-xl transition-all duration-300 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
                  <MessageSquare className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Feedback</h3>
                <p className="text-muted-foreground mb-4">
                  Share your thoughts and help us improve
                </p>
                <a 
                  href="mailto:feedback@sendmian.com" 
                  className="text-green-600 hover:text-green-700 font-medium hover:underline"
                >
                  feedback@sendmian.com
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Social Links */}
          <Card className="border-0 bg-gradient-to-br from-background to-muted/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Connect With Us</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://github.com/sendmian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-br from-gray-500/10 to-gray-600/5 hover:from-gray-500/20 hover:to-gray-600/10 transition-all duration-300 hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  <span className="font-medium">GitHub</span>
                </a>

                <a
                  href="https://twitter.com/sendmian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-br from-blue-500/10 to-blue-600/5 hover:from-blue-500/20 hover:to-blue-600/10 transition-all duration-300 hover:scale-105"
                >
                  <Twitter className="w-5 h-5" />
                  <span className="font-medium">Twitter</span>
                </a>

                <a
                  href="https://linkedin.com/company/sendmian"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-br from-blue-700/10 to-blue-800/5 hover:from-blue-700/20 hover:to-blue-800/10 transition-all duration-300 hover:scale-105"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </div>
            </CardContent>
          </Card>

          {/* FAQ Section */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Frequently Asked Questions</h3>
            <div className="space-y-4">
              <Card className="border-0 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Is SendMian free to use?</h4>
                  <p className="text-muted-foreground">
                    Yes! SendMian is completely free to use. Upload and share files without any cost or account registration.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">What file types can I upload?</h4>
                  <p className="text-muted-foreground">
                    You can upload any file type including images, videos, documents, and more. There are no restrictions on file formats.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">How long are files stored?</h4>
                  <p className="text-muted-foreground">
                    Files are stored securely on our servers. We maintain your files to ensure reliable access through the public links.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 bg-gradient-to-br from-primary/5 to-primary/10">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-2">Is there a file size limit?</h4>
                  <p className="text-muted-foreground">
                    No, there is no file size limit. Upload files of any size and share them instantly.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t bg-gradient-to-r from-muted/30 to-muted/50 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-lg">M</span>
              </div>
              <div>
                <span className="font-bold text-xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                  MultiMian
                </span>
                <p className="text-xs text-muted-foreground">Powered by SendMian Technology</p>
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground text-center md:text-right">
              <p className="font-medium">Built By Mian Hassam</p>
              <p className="mt-1">© 2026 MultiMian. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
