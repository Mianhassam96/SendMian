# SendMian - Instant File Sharing Platform

SendMian is a modern, elegant web application for instant file sharing. Upload images, videos, PDFs, RTF files, and documents to get instant public links you can share anywhere. Built with simplicity and speed in mind.

## 🚀 Features

- **Instant File Upload**: Upload files and get shareable links immediately
- **No Account Required**: Start uploading without registration or sign-up
- **Multiple File Types**: Support for images, videos, PDFs, RTF, and documents
- **No Size Limits**: Upload files of any size
- **Public Links**: Get direct shareable links that work anywhere, anytime
- **File Preview**: View images and videos directly in the browser
- **One-Click Sharing**: Copy links to clipboard or use native sharing
- **Secure Storage**: Files stored securely with enterprise-grade infrastructure
- **Modern UI**: Beautiful, responsive design that works on all devices
- **Lightning Fast**: Optimized infrastructure for instant uploads

## 🎨 Tech Stack

- **Frontend**: Next.js 14+ with App Router, React, TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Backend**: Next.js API routes, Prisma ORM
- **Database**: PostgreSQL (optional - graceful fallback)
- **File Storage**: Local file system with public URLs
- **Icons**: Lucide React

## 📦 Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Mianhassam96/SendMian.git
   cd SendMian
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables** (optional):
   ```bash
   cp .env.example .env
   ```
   
   Fill in your database URL if you want to use database storage.

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser.

## 🌐 Environment Variables

Create a `.env` file with the following variables (optional):

```env
# Database (Optional - app works without it)
DATABASE_URL="postgresql://username:password@localhost:5432/sendmian"

# App URL
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard (optional)
4. Deploy

### Manual Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

## 📁 Project Structure

```
SendMian/
├── app/                    # Next.js app directory
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── api/               # API routes
│   │   ├── upload-file/   # File upload endpoint
│   │   └── stats/         # Statistics endpoint
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # UI components (buttons, cards, etc.)
│   ├── file-uploader.tsx # Main file upload component
│   ├── image-preview-modal.tsx
│   └── stats-display.tsx
├── lib/                   # Utility functions
│   ├── db.ts             # Database connection
│   └── utils.ts          # Helper functions
├── public/               # Static files
│   └── uploads/          # Uploaded files storage
└── prisma/               # Database schema
    └── schema.prisma
```

## 🎯 Supported File Types

- **Images**: JPG, PNG, GIF, WebP, SVG, and more
- **Videos**: MP4, MOV, AVI, WebM, and more
- **Documents**: PDF, RTF, DOC, DOCX, TXT
- **Archives**: ZIP, RAR

## 🔒 Security Features

- Secure file storage with unique file IDs
- Input validation and sanitization
- Graceful error handling
- No file size restrictions (configurable)

## 🎨 Design Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Dark Theme Footer**: Stylish gradient footer with animated effects
- **Modern UI**: Clean, intuitive interface with smooth animations
- **File Type Icons**: Color-coded icons for different file types
- **Preview Support**: Image and video preview with full-screen modal

## 📊 API Routes

- `POST /api/upload-file` - Upload files and get public URLs
- `GET /api/stats` - Get platform statistics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 👨‍💻 Author

**Mian Hassam**
- GitHub: [@Mianhassam96](https://github.com/Mianhassam96)
- Email: mianhassam96@gmail.com

## 🏢 Company

**MultiMian** - Powered by SendMian Technology

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Built with Next.js and React
- Styled with Tailwind CSS
- Icons by Lucide React
- Inspired by the need for simple, instant file sharing

---

© 2026 MultiMian. All rights reserved.
