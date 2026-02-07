# SendMian - Instant File Sharing Platform

SendMian is a modern, elegant web application for instant file sharing. Upload images, videos, PDFs, RTF files, and documents to get instant public links you can share anywhere. Built with simplicity and speed in mind.

## 🚀 Features

- **Instant File Upload**: Upload files and get shareable links immediately
- **No Account Required**: Start uploading without registration or sign-up
- **Multiple File Types**: Support for images, videos, PDFs, RTF, and documents
- **No Size Limits**: Upload files of any size
- **Public Links**: Get direct shareable links that work anywhere, anytime
- **File Preview**: View images and videos directly in the browser with full-screen modal
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

### Local Development

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
   
   Edit `.env` and fill in your database URL if you want to use database storage (optional).

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

# App URL (update for production)
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## 🚀 Deployment

### Deploy to GitHub

1. **Initialize Git repository** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: SendMian file sharing app"
   ```

2. **Create a new repository on GitHub**:
   - Go to [github.com/new](https://github.com/new)
   - Name it "SendMian" or your preferred name
   - Don't initialize with README (we already have one)
   - Click "Create repository"

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/SendMian.git
   git branch -M main
   git push -u origin main
   ```

### Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications:

1. **Sign up for Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up with your GitHub account

2. **Import your repository**:
   - Click "Add New Project"
   - Select your SendMian repository
   - Vercel will auto-detect Next.js settings

3. **Configure environment variables** (optional):
   - Add `DATABASE_URL` if using a database
   - Add `NEXT_PUBLIC_APP_URL` with your Vercel domain (e.g., `https://sendmian.vercel.app`)

4. **Deploy**:
   - Click "Deploy"
   - Wait for build to complete
   - Your app will be live at `https://your-project.vercel.app`

5. **Custom domain** (optional):
   - Go to Project Settings → Domains
   - Add your custom domain
   - Follow DNS configuration instructions

### Deploy to Netlify

1. **Sign up for Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Sign up with your GitHub account

2. **Import repository**:
   - Click "Add new site" → "Import an existing project"
   - Select your SendMian repository

3. **Configure build settings**:
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Add environment variables if needed

4. **Deploy**:
   - Click "Deploy site"
   - Your app will be live at `https://your-site.netlify.app`

### Manual Deployment (VPS/Server)

1. **Build the application**:
   ```bash
   npm run build
   ```

2. **Start the production server**:
   ```bash
   npm start
   ```

3. **Use PM2 for process management** (recommended):
   ```bash
   npm install -g pm2
   pm2 start npm --name "sendmian" -- start
   pm2 save
   pm2 startup
   ```

4. **Configure Nginx as reverse proxy**:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

5. **Set up SSL with Let's Encrypt**:
   ```bash
   sudo certbot --nginx -d yourdomain.com
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
