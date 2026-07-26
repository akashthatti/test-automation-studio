import React from 'react';
import './Dashboard.css';

function Dashboard({ projects, testCases }) {
  const totalProjects = projects.length;
  const totalTestCases = testCases.length;
  const passedTests = testCases.filter(tc => tc.status === 'passed').length;
  const failedTests = testCases.filter(tc => tc.status === 'failed').length;

  const stats = [
    { label: 'Total Projects', value: totalProjects, icon: '📁', color: '#667eea' },
    { label: 'Total Test Cases', value: totalTestCases, icon: '📝', color: '#48bb78' },
    { label: 'Passed', value: passedTests, icon: '✅', color: '#48bb78' },
    { label: 'Failed', value: failedTests, icon: '❌', color: '#f56565' }
  ];

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome to Test Automation Studio</p>
      </div>

      <div className="stats-grid">
        {stats.map((stat, idx) => (
          <div key={idx} className="stat-card">
            <div className="stat-icon" style={{ background: stat.color + '20' }}>
              {stat.icon}
            </div>
            <div className="stat-content">
              <p className="stat-label">{stat.label}</p>
              <p className="stat-value">{stat.value}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-section">
          <h2>Features</h2>
          <ul className="feature-list">
            <li>✨ <strong>Visual Test Builder</strong> - Build test cases with an intuitive UI</li>
            <li>🎯 <strong>Smart Locators</strong> - Intelligent element detection</li>
            <li>💻 <strong>Code Generation</strong> - Generate Selenium Java & Playwright code</li>
            <li>▶️ <strong>Test Execution</strong> - Run tests directly from the app</li>
            <li>📊 <strong>Real-time Reports</strong> - Comprehensive test analytics</li>
            <li>🔄 <strong>Parallel Execution</strong> - Run multiple tests simultaneously</li>
            <li>🌐 <strong>Multi-Browser Support</strong> - Chrome, Firefox, Safari, Edge</li>
            <li>💾 <strong>Project Management</strong> - Organize and manage projects</li>
          </ul>
        </div>

        <div className="dashboard-section">
          <h2>Quick Start</h2>
          <div className="quick-start">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>Create a Project</h3>
                <p>Use the sidebar to create a new test automation project</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>Build Test Cases</h3>
                <p>Define test cases and scenarios using the Test Builder</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>Generate Code</h3>
                <p>Generate production-ready Selenium or Playwright code</p>
              </div>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>Execute Tests</h3>
                <p>Run your tests and view comprehensive reports</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="latest-projects">
        <h2>Recent Projects</h2>
        {projects.length === 0 ? (
          <p className="empty-message">No projects yet. Create one to get started!</p>
        ) : (
          <div className="project-list">
            {projects.slice(-3).reverse().map(project => (
              <div key={project.id} className="project-card">
                <div className="project-info">
                  <h3>{project.name}</h3>
                  <p className="project-meta">{project.framework} • {project.language}</p>
                  <p className="project-date">Created {new Date(project.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
