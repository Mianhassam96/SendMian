# 🚀 SendMian - Quick Start Guide

Get your SendMian file sharing app deployed to GitHub and Vercel in under 10 minutes!

## ⚡ Super Quick Deployment (Windows)

### Option 1: Use the Deployment Script

1. **Run the deployment script**:
   ```cmd
   deploy-to-github.bat
   ```

2. **Follow the on-screen instructions**

### Option 2: Manual Steps

1. **Initialize Git and commit**:
   ```cmd
   git init
   git add .
   git commit -m "Initial commit: SendMian file sharing application"
   ```

2. **Create GitHub repository**:
   - Go to https://github.com/new
   - Name: `SendMian`
   - Click "Create repository"

3. **Push to GitHub**:
   ```cmd
   git remote add origin https://github.com/YOUR_USERNAME/SendMian.git
   git branch -M main
   git push -u origin main
   ```

4. **Deploy to Vercel**:
   - Go to https://vercel.com/new
   - Click "Import Project"
   - Select your SendMian repository
   - Click "Deploy"
   - Wait 2-3 minutes
   - Done! 🎉

## 🧪 Test Locally First

Before deploying, test your app locally:

```cmd
npm install
npm run dev
```

Open http://localhost:3000 and test:
- Upload an image
- Upload a video
- Upload a PDF
- Test image preview
- Copy and share links
- Check About page
- Check Contact page

## 🌐 After Deployment

### Update Environment Variables

In Vercel dashboard, add:

```
NEXT_PUBLIC_APP_URL=https://your-app.vercel.app
```

### Test Your Live App

Visit your Vercel URL and test all features:
- ✅ File uploads
- ✅ Image previews
- ✅ Video playback
- ✅ Public links
- ✅ Copy to clipboard
- ✅ Share functionality
- ✅ Mobile responsiveness

## 🎨 Customize

### Update Contact Information

Edit `app/contact/page.tsx`:
- Email address
- Social media links (GitHub, Twitter, LinkedIn)

### Update Branding

- Logo: Edit the `<Send>` icon in headers
- Colors: Modify Tailwind config
- Footer: Already shows "MultiMian" branding

## 📱 Share Your App

Once deployed, share your app:

```
🎉 Check out SendMian - Instant File Sharing!
Upload files and get shareable links instantly.
No account needed, no limits!

🔗 https://your-app.vercel.app
```

## 🆘 Need Help?

- **Detailed Guide**: See `DEPLOYMENT.md`
- **Full README**: See `README.md`
- **Contact**: mianhassam96@gmail.com

## ✨ Features Included

✅ Instant file uploads  
✅ No size limits  
✅ Image & video previews  
✅ Public shareable links  
✅ Copy to clipboard  
✅ Native share API  
✅ Responsive design  
✅ About page  
✅ Contact page  
✅ Modern UI with animations  
✅ Dark theme footer  
✅ Error handling  
✅ File type icons  
✅ Full-screen image modal  

## 🎯 What's Next?

After deployment, consider:
- Adding a custom domain
- Setting up analytics
- Adding rate limiting
- Implementing file expiration
- Adding user authentication (optional)
- Setting up CDN for files

---

**Built by Mian Hassam**  
**Company: MultiMian**  
**© 2026 All rights reserved**
