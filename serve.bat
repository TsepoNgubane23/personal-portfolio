@echo off
echo 🌐 Starting local server for AI-Powered Portfolio...
echo.
echo Choose your preferred server:
echo 1. Python HTTP Server (port 8000)
echo 2. Node.js HTTP Server (port 3000)
echo 3. PHP Server (port 8000)
echo.
set /p choice="Enter your choice (1-3): "

if "%choice%"=="1" (
    echo 🐍 Starting Python server...
    python -m http.server 8000
) else if "%choice%"=="2" (
    echo 🟢 Starting Node.js server...
    npx http-server -p 3000 -o
) else if "%choice%"=="3" (
    echo 🐘 Starting PHP server...
    php -S localhost:8000
) else (
    echo ❌ Invalid choice. Starting Python server by default...
    python -m http.server 8000
)

echo.
echo 🎉 Server started! Your portfolio is now running locally.
echo Press Ctrl+C to stop the server.
pause
