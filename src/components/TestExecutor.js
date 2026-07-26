import React, { useState } from 'react';
import './TestExecutor.css';

function TestExecutor({ project, testCases }) {
  const [executing, setExecuting] = useState(false);
  const [selectedTests, setSelectedTests] = useState(new Set());
  const [results, setResults] = useState([]);
  const [browser, setBrowser] = useState('chrome');

  const handleSelectAll = () => {
    if (selectedTests.size === testCases.length) {
      setSelectedTests(new Set());
    } else {
      setSelectedTests(new Set(testCases.map(t => t.id)));
    }
  };

  const handleExecute = async () => {
    const tests = Array.from(selectedTests)
      .map(id => testCases.find(t => t.id === id))
      .filter(Boolean);

    if (tests.length === 0) return;

    setExecuting(true);
    setResults([]);

    // Simulate test execution
    for (let test of tests) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      const passed = Math.random() > 0.3;
      setResults(prev => [...prev, {
        id: test.id,
        name: test.name,
        status: passed ? 'passed' : 'failed',
        duration: Math.random() * 5 + 1,
        timestamp: new Date().toLocaleTimeString()
      }]);
    }

    setExecuting(false);
  };

  const passedCount = results.filter(r => r.status === 'passed').length;
  const failedCount = results.filter(r => r.status === 'failed').length;
  const totalDuration = results.reduce((sum, r) => sum + r.duration, 0);

  return (
    <div className="executor-container">
      <div className="executor-header">
        <h1>▶️ Test Executor</h1>
        <p>Execute and monitor test cases in real-time</p>
      </div>

      <div className="executor-layout">
        <div className="executor-panel">
          <div className="panel-card">
            <h2>Test Execution</h2>

            <div className="setting-group">
              <label>Browser</label>
              <select value={browser} onChange={(e) => setBrowser(e.target.value)} disabled={executing}>
                <option value="chrome">Chrome</option>
                <option value="firefox">Firefox</option>
                <option value="safari">Safari</option>
                <option value="edge">Edge</option>
              </select>
            </div>

            <div className="setting-group">
              <label>Select Tests</label>
              <div className="select-controls">
                <button
                  className="btn-select-all"
                  onClick={handleSelectAll}
                  disabled={executing}
                >
                  {selectedTests.size === testCases.length ? 'Deselect All' : 'Select All'}
                </button>
                <span className="selection-info">{selectedTests.size}/{testCases.length}</span>
              </div>

              <div className="tests-checkbox">
                {testCases.length === 0 ? (
                  <p className="empty-message">No test cases available</p>
                ) : (
                  testCases.map(test => (
                    <label key={test.id}>
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
                        disabled={executing}
                      />
                      <span>{test.name}</span>
                    </label>
                  ))
                )}
              </div>
            </div>

            <button
              className="btn-execute"
              onClick={handleExecute}
              disabled={executing || selectedTests.size === 0}
            >
              {executing ? '⏳ Executing...' : '▶️ Execute Tests'}
            </button>
          </div>
        </div>

        <div className="executor-results">
          <div className="results-card">
            {results.length === 0 ? (
              <div className="no-results">
                <p>🎯 Select tests and click Execute to start</p>
              </div>
            ) : (
              <>
                <div className="results-summary">
                  <div className="summary-stat">
                    <div className="stat-value">{results.length}</div>
                    <div className="stat-label">Total</div>
                  </div>
                  <div className="summary-stat passed">
                    <div className="stat-value">✅ {passedCount}</div>
                    <div className="stat-label">Passed</div>
                  </div>
                  <div className="summary-stat failed">
                    <div className="stat-value">❌ {failedCount}</div>
                    <div className="stat-label">Failed</div>
                  </div>
                  <div className="summary-stat">
                    <div className="stat-value">{totalDuration.toFixed(1)}s</div>
                    <div className="stat-label">Duration</div>
                  </div>
                </div>

                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{
                      width: `${(passedCount / results.length) * 100}%`,
                      backgroundColor: failedCount === 0 ? '#48bb78' : '#f6ad55'
                    }}
                  ></div>
                </div>

                <div className="results-list">
                  {results.map(result => (
                    <div key={result.id} className={`result-item ${result.status}`}>
                      <div className="result-header">
                        <span className="result-icon">{result.status === 'passed' ? '✅' : '❌'}</span>
                        <span className="result-name">{result.name}</span>
                        <span className="result-time">{result.duration.toFixed(2)}s</span>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TestExecutor;