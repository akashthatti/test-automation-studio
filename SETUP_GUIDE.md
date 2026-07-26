# Test Automation Studio - Complete Setup & Installation Guide

## 🎯 Overview

**Test Automation Studio** is a professional desktop application for creating test cases, generating automation code, and executing tests. Built with Electron and React, it supports multiple test frameworks and languages.

**Version**: 1.0.0  
**Platform**: Windows, macOS, Linux  
**License**: MIT  

---

## 📋 Table of Contents

1. [System Requirements](#system-requirements)
2. [Installation](#installation)
3. [Development Setup](#development-setup)
4. [Building for Production](#building-for-production)
5. [Usage Guide](#usage-guide)
6. [Architecture](#architecture)
7. [Troubleshooting](#troubleshooting)
8. [FAQ](#faq)

---

## 🖥️ System Requirements

### Minimum Requirements
- **OS**: Windows 10, macOS 10.13+, or Ubuntu 18.04+
- **RAM**: 2GB
- **Disk Space**: 500MB free
- **Internet**: For downloading dependencies

### Recommended Requirements
- **OS**: Windows 11, macOS 12+, or Ubuntu 22.04+
- **RAM**: 4GB or more
- **Disk Space**: 1GB free
- **Processor**: Intel i5 or equivalent

### For Development
- **Node.js**: v14 or higher (v16+ recommended)
- **npm**: v6 or higher (or yarn)
- **Git**: Latest version
- **Code Editor**: VS Code recommended

### For Running Tests
- **Browsers**: Chrome, Firefox, Safari, or Edge (depending on your tests)
- **WebDriver**: Chromedriver, Geckodriver, etc. (auto-installed by Selenium)

---

## 📥 Installation

### For End Users (Windows)

1. **Download the Application**
   - Visit [GitHub Releases](https://github.com/akashthatti/test-automation-studio/releases)
   - Download `Test Automation Studio-1.0.0.exe`

2. **Run the Installer**
   - Double-click the downloaded `.exe` file
   - Click "Next" through the installation wizard
   - Choose installation location (default: `C:\Program Files\Test Automation Studio`)
   - Select "Create Desktop Shortcut" (recommended)
   - Click "Install"

3. **Launch the Application**
   - Double-click the desktop shortcut, OR
   - Search for "Test Automation Studio" in Windows Start Menu, OR
   - Navigate to installation folder and run `Test Automation Studio.exe`

4. **Verify Installation**
   - Application window should open
   - You should see the Dashboard
   - Sidebar shows "Projects" section

---

## 🛠️ Development Setup

### Step 1: Clone Repository

```bash
git clone https://github.com/akashthatti/test-automation-studio.git
cd test-automation-studio
```

### Step 2: Install Dependencies

```bash
npm install
```

This installs:
- React and React DOM
- Electron framework
- Supporting libraries (axios, recharts, etc.)
- Development tools (electron-builder, concurrently, etc.)

**Troubleshooting Installation**:
```bash
# If npm install fails, try clearing cache
npm cache clean --force

# Delete node_modules and lock files
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Step 3: Verify Installation

```bash
# Check Node.js version
node --version    # Should be v14+

# Check npm version
npm --version     # Should be v6+

# List installed packages
npm list --depth=0
```

### Step 4: Start Development Server

```bash
npm run dev
```

This command:
1. Starts React dev server on `http://localhost:3000`
2. Waits for React server to be ready
3. Launches Electron with hot-reload
4. Opens DevTools automatically

**What to expect**:
- React dev server console shows compilation
- Electron window opens with the application
- DevTools panel visible (Press F12 to toggle)
- Auto-reload on code changes

---

## 🏗️ Building for Production

### Prepare for Build

```bash
# Ensure you're on main branch
git checkout main
git pull origin main

# Clean previous builds
rm -rf build dist node_modules package-lock.json

# Fresh install
npm install
```

### Build for Windows

**Option 1: Using Build Script (Recommended)**

```bash
# Run the build script
build.bat
```

**Option 2: Manual Build**

```bash
# Build React application
npm run react-build

# Build Electron for Windows
npm run build-win
```

### Build Output

After successful build, you'll find in the `dist/` folder:

```
dist/
├── Test Automation Studio-1.0.0.exe        # Full installer
├── Test Automation Studio-1.0.0-portable.exe # Portable version
├── Test Automation Studio-1.0.0.exe.blockmap
└── builder-effective-config.yaml
```

### Build for macOS

```bash
npm run build-mac
```

### Build for Linux

```bash
npm run build-linux
```

### Build for All Platforms

```bash
npm run build
```

---

## 📖 Usage Guide

### Getting Started (5 minutes)

1. **Create Your First Project**
   - Click the `+` button in sidebar under "Projects"
   - Enter project name: "My First Project"
   - Click "Create"

2. **Build a Test Case**
   - Go to "Test Builder" from sidebar
   - Click "New Test Case"
   - Fill in details:
     ```
     Name: Login Test
     Description: Test user login functionality
     Priority: High
     ```
   - Add steps:
     - Action: `Click` | Target: `#login-btn` | Value: (empty)
     - Action: `Type` | Target: `#username` | Value: `testuser`
     - Action: `Type` | Target: `#password` | Value: `testpass`
     - Action: `Click` | Target: `#submit` | Value: (empty)
   - Expected Result: `User successfully logged in`
   - Click "Create Test Case"

3. **Generate Code**
   - Go to "Code Generator"
   - Select framework: Selenium WebDriver
   - Select language: Java
   - Check "Login Test"
   - Click "Copy Code"
   - Paste into your IDE

4. **Execute Tests**
   - Go to "Test Executor"
   - Select browser: Chrome
   - Check "Login Test"
   - Click "Execute Tests"
   - Monitor real-time results

### Advanced Features

#### Smart Element Selection
- Use CSS selectors: `#id`, `.class`, `[attr="value"]`
- Use XPath: `//button[@id='login']`, `//input[@type='password']`
- Use relative paths: `div > button:first-child`

#### Test Case Organization
- Use descriptive names
- Group related tests
- Set appropriate priorities
- Add detailed descriptions

#### Code Generation
- Select framework and language
- Choose multiple test cases
- Customize before execution
- Export for CI/CD integration

---

## 🏛️ Architecture

### Project Structure

```
test-automation-studio/
├── public/
│   ├── electron.js          # Electron main process
│   ├── preload.js           # IPC bridge
│   ├── index.html           # HTML entry
│   └── package.json         # Electron-specific config
│
├── src/
│   ├── components/
│   │   ├── Dashboard.js      # Statistics & overview
│   │   ├── TestCaseBuilder.js # Test creation UI
│   │   ├── CodeGenerator.js   # Code generation
│   │   ├── TestExecutor.js    # Test runner
│   │   ├── Settings.js        # Configuration
│   │   └── Sidebar.js         # Navigation
│   │
│   ├── App.js               # Main app component
│   ├── App.css              # App styles
│   └── index.js             # React entry point
│
├── package.json             # Dependencies & scripts
├── build.bat / build.sh     # Build scripts
├── README.md                # Project overview
└── BUILD_INSTRUCTIONS.md    # Build guide
```

### Technology Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18, CSS3 |
| **Desktop** | Electron 27 |
| **State** | React Hooks |
| **Storage** | LocalStorage |
| **Build** | electron-builder |
| **Dev Tools** | concurrently, wait-on |

### Data Flow

```
User Input
    ↓
React Component
    ↓
State Update (useState)
    ↓
LocalStorage Persistence
    ↓
Re-render UI
```

### Component Hierarchy

```
App
├── Sidebar
│   ├── Navigation Items
│   └── Projects List
└── Main Content
    ├── Dashboard
    ├── TestCaseBuilder
    ├── CodeGenerator
    ├── TestExecutor
    └── Settings
```

---

## 🔧 Troubleshooting

### Installation Issues

**Problem**: `npm install` fails with permission error
```bash
# Solution 1: Run as Administrator
# (Right-click Command Prompt → Run as administrator)

# Solution 2: Use npm with sudo (macOS/Linux)
sudo npm install

# Solution 3: Change npm permissions (recommended)
mkdir ~/.npm-global
npm config set prefix '~/.npm-global'
export PATH=~/.npm-global/bin:$PATH
```

**Problem**: Node modules corruption
```bash
# Clean slate
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Development Issues

**Problem**: DevTools closes automatically
- This is normal. Re-open with F12.

**Problem**: Changes not reflecting in app
- Kill both processes (Ctrl+C)
- Run `npm run dev` again

**Problem**: Port 3000 already in use
```bash
# Find process using port 3000
netstat -ano | findstr :3000  # Windows
lsof -i :3000                  # macOS/Linux

# Kill the process
taskkill /PID <PID> /F         # Windows
kill -9 <PID>                  # macOS/Linux
```

### Build Issues

**Problem**: Build fails with "out of memory"
```bash
# Increase Node memory
node --max-old-space-size=4096 node_modules/.bin/electron-builder
```

**Problem**: Installer creation fails
- Ensure you have admin rights
- Check disk space (needs 1GB+)
- Disable antivirus temporarily

**Problem**: Signed installer required
- Generate code signing certificate
- Add to `package.json`:
```json
"win": {
  "certificateFile": "path/to/cert.pfx",
  "certificatePassword": "your-password"
}
```

### Runtime Issues

**Problem**: Application crashes on startup
- Clear application cache: `C:\Users\<User>\AppData\Roaming\Test Automation Studio`
- Reinstall application
- Check system logs

**Problem**: Tests don't run
- Verify browser is installed
- Check element selectors are valid
- Enable debug mode in Settings

**Problem**: Dark mode not working
- Click sun/moon icon in sidebar header
- Refresh application
- Clear browser cache (Ctrl+Shift+Delete)

---

## ❓ FAQ

### Q: Can I run this on macOS/Linux?
**A**: Yes! Build files are generated for all platforms. Use `npm run build-mac` or `npm run build-linux`.

### Q: What test frameworks are supported?
**A**: Selenium WebDriver, Playwright, Cypress (code gen), Puppeteer (code gen).

### Q: Can I export/backup my projects?
**A**: Projects are saved in LocalStorage. For backup, use browser DevTools to export LocalStorage data.

### Q: Is there a mobile testing feature?
**A**: Not in v1.0. Planned for v2.0 with Appium integration.

### Q: Can I integrate with CI/CD?
**A**: Yes! Generate code and integrate with GitHub Actions, Jenkins, etc.

### Q: Is the application open source?
**A**: Yes! Licensed under MIT. Contributions welcome!

### Q: Can I self-host this?
**A**: This is a desktop app. For web version, fork the project and deploy React to a server.

### Q: What about cloud execution?
**A**: Planned for v1.1. Currently, tests run on your local machine.

### Q: How do I report bugs?
**A**: Open an issue on [GitHub Issues](https://github.com/akashthatti/test-automation-studio/issues).

### Q: Can I contribute?
**A**: Absolutely! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📞 Support

- **Documentation**: [GitHub README](https://github.com/akashthatti/test-automation-studio)
- **Issues**: [GitHub Issues](https://github.com/akashthatti/test-automation-studio/issues)
- **Discussions**: [GitHub Discussions](https://github.com/akashthatti/test-automation-studio/discussions)
- **Email**: support@testautomationstudio.com (if applicable)

---

## 📝 Changelog

### v1.0.0 (Initial Release)
- ✨ Visual test case builder
- 💻 Multi-framework code generation
- ▶️ Test execution engine
- 📊 Real-time reporting
- 🌙 Dark mode support
- 📁 Project management
- ⚙️ Settings & configuration

---

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details.

---

**Built with ❤️ for QA Engineers**

*Last Updated: 2026-07-26*
