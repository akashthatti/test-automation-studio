# Test Automation Studio - Build Instructions

## Windows Build

### Prerequisites
- Node.js v14+ installed
- npm or yarn package manager
- Git installed

### Build Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/akashthatti/test-automation-studio.git
   cd test-automation-studio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Development Mode (Optional)**
   ```bash
   npm run dev
   ```
   This starts both React dev server and Electron app for development.

4. **Production Build**
   
   **Option A: Use build script (Recommended)**
   ```bash
   # On Windows
   build.bat
   
   # On Mac/Linux
   chmod +x build.sh
   ./build.sh
   ```

   **Option B: Manual build**
   ```bash
   # Build React
   npm run react-build
   
   # Build Electron app
   npm run build-win
   ```

5. **Output**
   - Installer: `dist/Test Automation Studio-*.exe`
   - Portable: `dist/Test Automation Studio-*-portable.exe`

### What's Included in the Build

✅ Complete React application compiled
✅ Electron wrapper for desktop experience
✅ All dependencies bundled
✅ Windows installer (NSIS)
✅ Portable executable
✅ Auto-update capability (configurable)

### Installation

1. Run the installer: `Test Automation Studio-1.0.0.exe`
2. Follow the installation wizard
3. Application will be installed to `Program Files`
4. Desktop shortcut and Start Menu entry created automatically

### Troubleshooting

**Build fails with permission error**
- Run Command Prompt as Administrator

**Dependencies installation error**
- Clear npm cache: `npm cache clean --force`
- Delete node_modules: `rm -r node_modules package-lock.json`
- Reinstall: `npm install`

**Electron build fails**
- Ensure Node.js is properly installed
- Check `package.json` build configuration
- Verify all dependencies are installed

## Configuration

### Change App Name
Edit `package.json`:
```json
"productName": "Your App Name"
```

### Change App Icon
1. Replace `assets/icon.png` with your icon (512x512)
2. Rebuild the application

### Code Signing (Optional)
For production releases, add code signing certificates in `package.json`:
```json
"win": {
  "certificateFile": "path/to/cert.pfx",
  "certificatePassword": "password",
  "signingHashAlgorithms": ["sha256"]
}
```

## Release Notes

### v1.0.0
- ✨ Initial release
- 🎯 Visual test case builder
- 💻 Multi-framework code generation
- ▶️ Test execution engine
- 📊 Real-time reporting
- 🌙 Dark mode support

---

**For more information, visit:** https://github.com/akashthatti/test-automation-studio
