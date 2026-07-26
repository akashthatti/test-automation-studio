# Test Automation Studio 🚀

**Professional Desktop Application for Test Case Development & Automation Code Generation**

## Features ✨

- 📝 **Visual Test Case Builder** - Create test cases with an intuitive drag-and-drop interface
- 🎯 **Smart Element Detection** - Intelligent XPath and CSS selector suggestions
- 💻 **Multi-Framework Support** - Generate code for Selenium WebDriver, Playwright, Cypress, and Puppeteer
- 🔨 **Code Generation** - Auto-generate production-ready test automation code
- ▶️ **Test Execution** - Execute tests directly from the application
- 📊 **Real-time Reports** - Comprehensive test execution analytics and reports
- 🌐 **Multi-Browser Testing** - Support for Chrome, Firefox, Safari, and Edge
- 🎨 **Modern UI** - Beautiful dark mode support and responsive design
- 💾 **Project Management** - Organize and manage multiple test projects
- ⚡ **Cross-Platform** - Works on Windows, Mac, and Linux

## Supported Frameworks 🛠️

- **Selenium WebDriver** (Java, Python, C#, JavaScript)
- **Playwright** (JavaScript/TypeScript)
- **Cypress** (JavaScript)
- **Puppeteer** (JavaScript)

## Installation 📥

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Development

```bash
# Clone the repository
git clone https://github.com/akashthatti/test-automation-studio.git
cd test-automation-studio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Production Build

```bash
# Build for Windows
npm run build-win

# Build for all platforms
npm run build
```

## Usage 🎯

1. **Create Project** - Start by creating a new test project
2. **Build Test Cases** - Define test scenarios using the visual builder
3. **Generate Code** - Select test cases and generate automation code
4. **Execute Tests** - Run tests and monitor results in real-time
5. **View Reports** - Analyze comprehensive test execution reports

## Project Structure 📁

```
test-automation-studio/
├── public/
│   ├── electron.js          # Electron main process
│   ├── preload.js           # Electron preload script
│   └── index.html           # HTML entry point
├── src/
│   ├── components/          # React components
│   │   ├── Dashboard.js
│   │   ├── TestCaseBuilder.js
│   │   ├── CodeGenerator.js
│   │   ├── TestExecutor.js
│   │   ├── Settings.js
│   │   └── Sidebar.js
│   ├── App.js              # Main app component
│   ├── App.css             # App styles
│   └── index.js            # React entry point
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## Technologies 🔧

- **Frontend**: React 18
- **Desktop**: Electron 27
- **Styling**: CSS3 with Dark Mode
- **State Management**: React Hooks
- **Testing Frameworks**: Selenium WebDriver, Playwright
- **Build Tool**: electron-builder

## Available Scripts 📝

- `npm run dev` - Start development environment
- `npm run react-start` - Start React dev server only
- `npm run react-build` - Build React application
- `npm run build` - Build Electron app for all platforms
- `npm run build-win` - Build Electron app for Windows only
- `npm run pack` - Create application package

## Configuration ⚙️

Edit `package.json` to configure:
- Application name and version
- Build outputs and targets
- Auto-update settings
- Code signing certificates

## Contributing 🤝

Contributions are welcome! Please feel free to submit pull requests or open issues for bugs and feature requests.

## License 📄

MIT License - Feel free to use this in personal and commercial projects.

## Support 💬

For issues, questions, or suggestions, please create an issue on GitHub.

---

**Made with ❤️ for QA Engineers and Test Automation Enthusiasts**
