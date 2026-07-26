import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar({ 
  currentPage, 
  setCurrentPage, 
  projects, 
  currentProject, 
  setCurrentProject,
  onCreateProject,
  onDeleteProject,
  darkMode,
  setDarkMode
}) {
  const [showNewProject, setShowNewProject] = useState(false);
  const [projectName, setProjectName] = useState('');

  const handleCreateProject = () => {
    if (projectName.trim()) {
      onCreateProject(projectName);
      setProjectName('');
      setShowNewProject(false);
    }
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'builder', label: 'Test Builder', icon: '🔨' },
    { id: 'generator', label: 'Code Generator', icon: '💻' },
    { id: 'executor', label: 'Test Executor', icon: '▶️' },
    { id: 'settings', label: 'Settings', icon: '⚙️' }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h1>🚀 Test Studio</h1>
        <button 
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          title={darkMode ? 'Light Mode' : 'Dark Mode'}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map(item => (
          <button
            key={item.id}
            className={`nav-item ${currentPage === item.id ? 'active' : ''} ${!currentProject && item.id !== 'dashboard' ? 'disabled' : ''}`}
            onClick={() => setCurrentPage(item.id)}
            disabled={!currentProject && item.id !== 'dashboard'}
          >
            <span className="icon">{item.icon}</span>
            <span className="label">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-divider"></div>

      <div className="projects-section">
        <div className="section-header">
          <h3>Projects</h3>
          <button 
            className="add-btn"
            onClick={() => setShowNewProject(!showNewProject)}
            title="New Project"
          >
            +
          </button>
        </div>

        {showNewProject && (
          <div className="new-project-form">
            <input
              type="text"
              placeholder="Project name..."
              value={projectName}
              onChange={(e) => setProjectName(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleCreateProject()}
              autoFocus
            />
            <div className="form-buttons">
              <button className="btn-create" onClick={handleCreateProject}>Create</button>
              <button className="btn-cancel" onClick={() => setShowNewProject(false)}>Cancel</button>
            </div>
          </div>
        )}

        <div className="projects-list">
          {projects.length === 0 ? (
            <p className="empty-text">No projects yet</p>
          ) : (
            projects.map(project => (
              <div
                key={project.id}
                className={`project-item ${currentProject?.id === project.id ? 'active' : ''}`}
                onClick={() => setCurrentProject(project)}
              >
                <span className="project-name">{project.name}</span>
                <button
                  className="delete-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (window.confirm('Delete this project?')) {
                      onDeleteProject(project.id);
                    }
                  }}
                  title="Delete"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="sidebar-footer">
        <p>v1.0.0</p>
        <p>Made with ❤️</p>
      </div>
    </aside>
  );
}

export default Sidebar;
