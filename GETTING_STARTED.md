# Test Automation Studio

## Quick Start Guide

### Installation

1. **Download the installer**
   - Visit [Releases](https://github.com/akashthatti/test-automation-studio/releases)
   - Download the latest `Test Automation Studio-*.exe`

2. **Run the installer**
   - Double-click the `.exe` file
   - Follow the installation wizard
   - Application will be installed to Program Files

3. **Launch the application**
   - Click the desktop shortcut or
   - Search for "Test Automation Studio" in Windows Start Menu

### First Steps

1. **Create a Project**
   - Click the `+` button in the sidebar under "Projects"
   - Enter a project name
   - Click "Create"

2. **Build Your First Test Case**
   - Navigate to "Test Builder" from the sidebar
   - Click "New Test Case"
   - Fill in:
     - Test Case Name
     - Description
     - Test Steps (add steps using the form)
     - Expected Result
     - Priority
   - Click "Create Test Case"

3. **Generate Code**
   - Go to "Code Generator"
   - Select your test framework (Selenium/Playwright)
   - Choose your language (Java/Python/JavaScript/C#)
   - Select test cases to generate
   - Click "Copy Code" or "Download"

4. **Execute Tests**
   - Navigate to "Test Executor"
   - Select a browser (Chrome/Firefox/Safari/Edge)
   - Choose test cases
   - Click "Execute Tests"
   - Monitor results in real-time

### Features

#### 📝 Test Case Builder
- Visual drag-and-drop interface
- Predefined actions (Click, Type, Select, Wait, etc.)
- Smart element locators
- Priority levels (Low, Medium, High)
- Comprehensive descriptions

#### 💻 Code Generator
- **Selenium WebDriver** support (Java, Python, C#, JavaScript)
- **Playwright** support (JavaScript/TypeScript)
- Production-ready code
- Copy to clipboard or download as file
- Framework-specific templates

#### ▶️ Test Executor
- Run tests from the UI
- Real-time execution monitoring
- Multi-browser testing
- Headless mode support
- Comprehensive result summaries

#### 📊 Dashboard
- Project statistics
- Test case overview
- Execution metrics
- Quick project access

#### ⚙️ Settings
- Framework selection
- Language preferences
- Timeout configuration
- Debug mode toggle
- Notification settings

### Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+N` | New Project |
| `Ctrl+S` | Save Test Case |
| `Ctrl+E` | Execute Tests |
| `Ctrl+Shift+D` | Toggle Dark Mode |
| `F5` | Refresh |

### Supported Test Frameworks

- ✅ Selenium WebDriver 4.x
- ✅ Playwright
- ✅ Cypress (code generation only)
- ✅ Puppeteer (code generation only)

### File Organization

```
Your Project/
├── test-cases.json       # All test cases
├── generated-code/
│   ├── SeleniumJava.java
│   ├── Playwright.js
│   └── ...
└── reports/
    └── execution-*.json
```

### Tips & Tricks

1. **Use XPath for complex selectors**: The builder accepts both CSS selectors and XPath
2. **Group related tests**: Organize test cases by feature
3. **Leverage priority**: Use for test execution ordering
4. **Generate and customize**: Generated code is a great starting point
5. **Export projects**: Save your projects for backup

### Troubleshooting

**Q: Tests are running but no browser opens**
A: Enable headless mode in Settings if you want to see the browser

**Q: Generated code has errors**
A: Ensure you're using correct element locators (CSS or XPath)

**Q: Application crashes on startup**
A: Try reinstalling - uninstall completely and run installer again

**Q: Dark mode not working**
A: Click the moon/sun icon in the sidebar header to toggle

### System Requirements

- **OS**: Windows 10 or later
- **RAM**: 2GB minimum (4GB recommended)
- **Disk**: 500MB free space
- **Browsers**: Chrome, Firefox, Safari, or Edge installed (for test execution)

### Getting Help

- 📖 Read the [Documentation](https://github.com/akashthatti/test-automation-studio)
- 🐛 Report issues on [GitHub Issues](https://github.com/akashthatti/test-automation-studio/issues)
- 💬 Join our community discussions

---

**Happy Testing! 🚀**
