import React, { useState } from 'react';
import './CodeGenerator.css';

function CodeGenerator({ project, testCases }) {
  const [framework, setFramework] = useState('selenium');
  const [language, setLanguage] = useState('java');
  const [selectedTests, setSelectedTests] = useState(new Set());

  const generateSeleniumJava = (testCase) => {
    const steps = testCase.steps.filter(s => s.action).map(step => {
      const action = step.action.toLowerCase();
      const target = step.target;
      const value = step.value;
      
      switch(action) {
        case 'click':
          return `driver.findElement(By.cssSelector("${target}")).click();`;
        case 'type':
          return `driver.findElement(By.cssSelector("${target}")).sendKeys("${value}");`;
        case 'select':
          return `new Select(driver.findElement(By.cssSelector("${target}"))).selectByValue("${value}");`;
        case 'wait':
          return `Thread.sleep(${parseInt(value) || 2000});`;
        case 'hover':
          return `new Actions(driver).moveToElement(driver.findElement(By.cssSelector("${target}"))).perform();`;
        case 'submit':
          return `driver.findElement(By.cssSelector("${target}")).submit();`;
        case 'clear':
          return `driver.findElement(By.cssSelector("${target}")).clear();`;
        case 'navigate':
          return `driver.navigate().to("${value}");`;
        default:
          return '';
      }
    }).filter(s => s);

    return `
@Test
public void ${testCase.name.toLowerCase().replace(/\s+/g, '_')}() {
    WebDriver driver = new ChromeDriver();
    try {
        ${steps.join('\n        ')}
        // ${testCase.expectedResult}
        Assert.assertTrue(true);
    } finally {
        driver.quit();
    }
}
    `;
  };

  const generatePlaywright = (testCase) => {
    const steps = testCase.steps.filter(s => s.action).map(step => {
      const action = step.action.toLowerCase();
      const target = step.target;
      const value = step.value;
      
      switch(action) {
        case 'click':
          return `await page.click('${target}');`;
        case 'type':
          return `await page.fill('${target}', '${value}');`;
        case 'select':
          return `await page.selectOption('${target}', '${value}');`;
        case 'wait':
          return `await page.waitForTimeout(${parseInt(value) || 2000});`;
        case 'hover':
          return `await page.hover('${target}');`;
        case 'submit':
          return `await page.click('${target}'); await page.keyboard.press('Enter');`;
        case 'clear':
          return `await page.fill('${target}', '');`;
        case 'navigate':
          return `await page.goto('${value}');`;
        default:
          return '';
      }
    }).filter(s => s);

    return `
test('${testCase.name}', async ({ page }) => {
    ${steps.join('\n    ')}
    // ${testCase.expectedResult}
});
    `;
  };

  const generateCode = () => {
    const tests = Array.from(selectedTests)
      .map(id => testCases.find(t => t.id === id))
      .filter(Boolean);

    if (tests.length === 0) return '';

    if (framework === 'selenium') {
      const imports = `
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.chrome.ChromeDriver;
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;
      `;
      return imports + `\npublic class ${project.name.replace(/\s+/g, '')}Test {\n${tests.map(t => generateSeleniumJava(t)).join('\n')}\n}`;
    } else {
      return `import { test, expect } from '@playwright/test';\n\n${tests.map(t => generatePlaywright(t)).join('\n')}`;
    }
  };

  const code = generateCode();

  return (
    <div className="generator-container">
      <div className="generator-header">
        <h1>💻 Code Generator</h1>
        <p>Generate production-ready test automation code</p>
      </div>

      <div className="generator-layout">
        <div className="generator-settings">
          <div className="settings-card">
            <h2>Generate Code</h2>
            
            <div className="setting-group">
              <label>Framework</label>
              <div className="radio-group">
                <label>
                  <input
                    type="radio"
                    value="selenium"
                    checked={framework === 'selenium'}
                    onChange={(e) => setFramework(e.target.value)}
                  />
                  Selenium WebDriver
                </label>
                <label>
                  <input
                    type="radio"
                    value="playwright"
                    checked={framework === 'playwright'}
                    onChange={(e) => setFramework(e.target.value)}
                  />
                  Playwright
                </label>
              </div>
            </div>

            <div className="setting-group">
              <label>Language</label>
              <select value={language} onChange={(e) => setLanguage(e.target.value)}>
                <option value="java">Java</option>
                <option value="python">Python</option>
                <option value="js">JavaScript</option>
                <option value="csharp">C#</option>
              </select>
            </div>

            <div className="setting-group">
              <label>Select Test Cases</label>
              <div className="checkbox-group">
                {testCases.length === 0 ? (
                  <p className="empty-message">No test cases available</p>
                ) : (
                  testCases.map(test => (
                    <label key={test.id} className="checkbox-label">
                      <input
                        type="checkbox"
                        checked={selectedTests.has(test.id)}
                        onChange={(e) => {
                          const newSet = new Set(selectedTests);
                          if (e.target.checked) {
                            newSet.add(test.id);
                          } else {
                            newSet.delete(test.id);
                          }
                          setSelectedTests(newSet);
                        }}
                      />
                      <span>{test.name}</span>
                    </label>
                  ))
                )}
              </div>
            </div>

            <div className="action-buttons">
              <button className="btn-copy" onClick={() => {
                navigator.clipboard.writeText(code);
                alert('Code copied to clipboard!');
              }}>
                📋 Copy Code
              </button>
              <button className="btn-download" onClick={() => {
                const element = document.createElement('a');
                element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(code));
                element.setAttribute('download', `${project.name}_tests.${framework === 'selenium' ? 'java' : 'js'}`);
                element.style.display = 'none';
                document.body.appendChild(element);
                element.click();
                document.body.removeChild(element);
              }}>
                ⬇️ Download
              </button>
            </div>
          </div>
        </div>

        <div className="generator-preview">
          <div className="code-preview">
            <div className="preview-toolbar">
              <span>Code Preview</span>
              <select value={framework} onChange={(e) => setFramework(e.target.value)}>
                <option value="selenium">Selenium</option>
                <option value="playwright">Playwright</option>
              </select>
            </div>
            <pre><code>{code || '// Select test cases to generate code'}</code></pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CodeGenerator;