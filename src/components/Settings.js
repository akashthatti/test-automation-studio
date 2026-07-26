import React, { useState } from 'react';
import './Settings.css';

function Settings({ project, onProjectUpdate }) {
  const [settings, setSettings] = useState({
    framework: project?.framework || 'selenium',
    language: project?.language || 'java',
    timeout: '30',
    headless: true,
    debugMode: false,
    notifyOnComplete: true
  });

  const handleSave = () => {
    onProjectUpdate({
      framework: settings.framework,
      language: settings.language
    });
    alert('Settings saved successfully!');
  };

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h1>⚙️ Settings</h1>
        <p>Configure your test automation preferences</p>
      </div>

      <div className="settings-grid">
        <div className="settings-card">
          <h2>Automation Settings</h2>

          <div className="setting-group">
            <label>Test Framework</label>
            <select
              value={settings.framework}
              onChange={(e) => setSettings({ ...settings, framework: e.target.value })}
            >
              <option value="selenium">Selenium WebDriver</option>
              <option value="playwright">Playwright</option>
              <option value="cypress">Cypress</option>
              <option value="puppeteer">Puppeteer</option>
            </select>
          </div>

          <div className="setting-group">
            <label>Language</label>
            <select
              value={settings.language}
              onChange={(e) => setSettings({ ...settings, language: e.target.value })}
            >
              <option value="java">Java</option>
              <option value="python">Python</option>
              <option value="csharp">C#</option>
              <option value="javascript">JavaScript/TypeScript</option>
            </select>
          </div>

          <div className="setting-group">
            <label>Element Timeout (seconds)</label>
            <input
              type="number"
              value={settings.timeout}
              onChange={(e) => setSettings({ ...settings, timeout: e.target.value })}
              min="1"
              max="300"
            />
          </div>

          <div className="setting-group checkbox">
            <label>
              <input
                type="checkbox"
                checked={settings.headless}
                onChange={(e) => setSettings({ ...settings, headless: e.target.checked })}
              />
              <span>Run in Headless Mode</span>
            </label>
          </div>

          <div className="setting-group checkbox">
            <label>
              <input
                type="checkbox"
                checked={settings.debugMode}
                onChange={(e) => setSettings({ ...settings, debugMode: e.target.checked })}
              />
              <span>Enable Debug Mode</span>
            </label>
          </div>

          <div className="setting-group checkbox">
            <label>
              <input
                type="checkbox"
                checked={settings.notifyOnComplete}
                onChange={(e) => setSettings({ ...settings, notifyOnComplete: e.target.checked })}
              />
              <span>Notify When Tests Complete</span>
            </label>
          </div>

          <button className="btn-save" onClick={handleSave}>💾 Save Settings</button>
        </div>

        <div className="info-card">
          <h2>About</h2>
          <div className="info-section">
            <p><strong>Application:</strong> Test Automation Studio</p>
            <p><strong>Version:</strong> 1.0.0</p>
            <p><strong>Build:</strong> Production Ready</p>
          </div>

          <div className="info-section">
            <h3>Features</h3>
            <ul>
              <li>✅ Visual Test Case Builder</li>
              <li>✅ Smart Element Detection</li>
              <li>✅ Multi-Framework Support</li>
              <li>✅ Code Generation</li>
              <li>✅ Real-time Execution</li>
              <li>✅ Comprehensive Reports</li>
              <li>✅ Cross-Platform Support</li>
            </ul>
          </div>

          <div className="info-section">
            <h3>Supported Frameworks</h3>
            <ul>
              <li>🔹 Selenium WebDriver</li>
              <li>🔹 Playwright</li>
              <li>🔹 Cypress</li>
              <li>🔹 Puppeteer</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;