@echo off
REM SendMian - GitHub Deployment Script for Windows
REM This script helps you deploy SendMian to GitHub

echo.
echo ========================================
echo   SendMian - GitHub Deployment Helper
echo ========================================
echo.

REM Check if git is initialized
if not exist .git (
    echo Initializing Git repository...
    git init
    echo Git initialized successfully!
) else (
    echo Git repository already initialized
)

echo.
echo Adding files to Git...
git add .

echo.
echo Creating commit...
git commit -m "Initial commit: SendMian file sharing application"

echo.
echo ========================================
echo   Next Steps:
echo ========================================
echo.
echo 1. Create a new repository on GitHub:
echo    https://github.com/new
echo.
echo 2. Name it 'SendMian' (or your preferred name)
echo.
echo 3. Don't initialize with README (we already have one)
echo.
echo 4. After creating the repository, run these commands:
echo.
echo    git remote add origin https://github.com/YOUR_USERNAME/SendMian.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 5. Deploy to Vercel:
echo    https://vercel.com/new
echo    - Import your GitHub repository
echo    - Click Deploy
echo    - Done!
echo.
echo For detailed instructions, see DEPLOYMENT.md
echo.
echo Good luck with your deployment!
echo.
pause
