@echo off
echo 🚀 Deploying AI-Powered Portfolio...

REM Check if git is initialized
if not exist ".git" (
    echo 📁 Initializing Git repository...
    git init
)

REM Add all files
echo 📝 Adding files to Git...
git add .

REM Commit changes
echo 💾 Committing changes...
git commit -m "Deploy AI-powered portfolio with developer animations"

REM Check if remote exists
git remote | findstr "origin" >nul
if errorlevel 1 (
    echo 🔗 Please add your GitHub repository as origin:
    echo git remote add origin https://github.com/YOUR_USERNAME/ai-powered-portfolio.git
    echo Then run this script again.
    pause
    exit /b 1
)

REM Push to GitHub
echo ⬆️ Pushing to GitHub...
git push origin main

echo ✅ Deployment complete!
echo 🌐 Your portfolio will be available at:
echo https://YOUR_USERNAME.github.io/ai-powered-portfolio
echo.
echo 📋 Next steps:
echo 1. Go to your GitHub repository
echo 2. Navigate to Settings ^> Pages
echo 3. Select 'Deploy from a branch'
echo 4. Choose 'main' branch and '/ (root)' folder
echo 5. Click Save
echo.
echo 🎉 Your AI-powered portfolio will be live in 5-10 minutes!
pause
