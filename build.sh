#!/bin/bash

echo "🚀 Test Automation Studio - Build Script"
echo "========================================="
echo ""

echo "📦 Installing dependencies..."
npm install

echo ""
echo "🏗️  Building React application..."
npm run react-build

echo ""
echo "📱 Building Electron application..."
npm run electron-build

echo ""
echo "✅ Build complete!"
echo "📁 Check the 'dist' folder for the installer."
