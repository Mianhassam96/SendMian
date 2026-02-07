@echo off
echo.
echo ========================================
echo   SendMian - Fix and Redeploy
echo ========================================
echo.

echo Committing fixes...
git add .
git commit -m "Fix: Update build configuration for Vercel deployment"

echo.
echo Pushing to GitHub...
git push

echo.
echo ========================================
echo   Fixes Applied:
echo ========================================
echo.
echo - Updated package.json build script
echo - Added postinstall script for Prisma
echo - Fixed database connection handling
echo - Added vercel.json configuration
echo - Updated API routes for graceful fallback
echo.
echo ========================================
echo   Next Steps:
echo ========================================
echo.
echo 1. Go to your Vercel dashboard
echo 2. Your deployment should automatically restart
echo 3. Or click "Redeploy" to trigger a new build
echo.
echo If you haven't deployed yet:
echo 1. Go to https://vercel.com/new
echo 2. Import: Mianhassam96/SendMian
echo 3. Add environment variable (optional):
echo    DATABASE_URL=postgresql://user:pass@host:5432/db
echo 4. Click Deploy
echo.
echo Your app will be live at:
echo https://sendmian.vercel.app (or similar)
echo.
pause
