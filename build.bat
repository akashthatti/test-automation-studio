@echo off
echo 🚀 Test Automation Studio - Build Script (Windows)
echo =========================================
echo.

echo 📦 Installing dependencies...
call npm install

echo.
echo 🏗️  Building React application...
call npm run react-build

echo.
echo 📱 Building Electron application...
call npm run electron-build

echo.
echo ✅ Build complete!
echo 📁 Check the 'dist' folder for the installer.
pause
