# MultiMian - Instant File Sharing

MultiMian is a simple and elegant web application for instant file sharing. Upload files, photos, and videos to get instant public links you can share anywhere.

## Features

- **Instant File Upload**: Upload files and get shareable links immediately
- **No Account Required**: Start uploading without registration or sign-up
- **Multiple File Types**: Support for images, videos, documents up to 64MB
- **Public Links**: Get direct shareable links that work anywhere
- **Secure Storage**: Files stored securely with enterprise-grade infrastructure
- **Modern UI**: Beautiful, responsive design that works on all devices

## Tech Stack

- **Frontend**: Next.js 14+ with App Router, Tailwind CSS
- **Backend**: Next.js API routes, Prisma ORM, PostgreSQL
- **File Storage**: UploadThing for secure file uploads and hosting
- **Styling**: Tailwind CSS with custom design system

## Quick Start

1. **Clone and install dependencies**:
   ```bash
   git clone <repository-url>
   cd multimian
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env
   ```
   
   Fill in your database URL and UploadThing credentials.

3. **Set up the database**:
   ```bash
   npx prisma db push
   npx prisma generate
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open [http://localhost:3000](http://localhost:3000)** in your browser.

## Environment Variables

Create a `.env` file with the following variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/multimian"

# UploadThing
UPLOADTHING_SECRET="your_uploadthing_secret"
UPLOADTHING_APP_ID="your_uploadthing_app_id"

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
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

## Database Schema

The application uses PostgreSQL with Prisma ORM. The main model:

- **File**: Stores file metadata, URLs, and upload information

## API Routes

- `POST /api/uploadthing` - Handle file uploads via UploadThing

## Features

- **Drag & Drop Upload**: Intuitive file upload with drag and drop support
- **File Preview**: Visual preview of uploaded files with type-specific icons
- **One-Click Sharing**: Copy links to clipboard or use native sharing
- **File Management**: Remove files from your upload list
- **Responsive Design**: Works perfectly on desktop and mobile devices

## Security Features

- Secure file storage through UploadThing
- Input validation and sanitization
- File type and size restrictions
- Secure file URLs

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

MIT License - see LICENSE file for details.