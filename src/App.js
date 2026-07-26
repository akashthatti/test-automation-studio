import React, { useState, useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import TestCaseBuilder from './components/TestCaseBuilder';
import CodeGenerator from './components/CodeGenerator';
import TestExecutor from './components/TestExecutor';
import Settings from './components/Settings';

function App() {
  const [currentPage, setCurrentPage] = useState('dashboard');
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);
  const [testCases, setTestCases] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Load projects from localStorage
    const savedProjects = localStorage.getItem('projects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }

    // Load dark mode preference
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) {
      setDarkMode(JSON.parse(savedDarkMode));
    }
  }, []);

  useEffect(() => {
    // Save projects to localStorage
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    // Save dark mode to localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    // Load test cases for current project
    if (currentProject) {
      const saved = localStorage.getItem(`testcases_${currentProject.id}`);
      if (saved) {
        setTestCases(JSON.parse(saved));
      } else {
        setTestCases([]);
      }
    }
  }, [currentProject]);

  useEffect(() => {
    // Save test cases to localStorage
    if (currentProject) {
      localStorage.setItem(`testcases_${currentProject.id}`, JSON.stringify(testCases));
    }
  }, [testCases, currentProject]);

  const handleCreateProject = (projectName) => {
    const newProject = {
      id: Date.now().toString(),
      name: projectName,
      createdAt: new Date().toISOString(),
      framework: 'selenium',
      language: 'java'
    };
    setProjects([...projects, newProject]);
    setCurrentProject(newProject);
    setCurrentPage('builder');
  };

  const handleDeleteProject = (projectId) => {
    const filtered = projects.filter(p => p.id !== projectId);
    setProjects(filtered);
    localStorage.removeItem(`testcases_${projectId}`);
    if (currentProject?.id === projectId) {
      setCurrentProject(filtered[0] || null);
    }
  };

  const handleAddTestCase = (testCase) => {
    const newTestCase = {
      id: Date.now().toString(),
      ...testCase,
      createdAt: new Date().toISOString()
    };
    setTestCases([...testCases, newTestCase]);
  };

  const handleUpdateTestCase = (testCaseId, updates) => {
    setTestCases(testCases.map(tc => 
      tc.id === testCaseId ? { ...tc, ...updates } : tc
    ));
  };

  const handleDeleteTestCase = (testCaseId) => {
    setTestCases(testCases.filter(tc => tc.id !== testCaseId));
  };

  return (
    <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
      <Sidebar 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        projects={projects}
        currentProject={currentProject}
        setCurrentProject={setCurrentProject}
        onCreateProject={handleCreateProject}
        onDeleteProject={handleDeleteProject}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <main className="main-content">
        {currentPage === 'dashboard' && <Dashboard projects={projects} testCases={testCases} />}
        {currentPage === 'builder' && currentProject && (
          <TestCaseBuilder 
            project={currentProject}
            testCases={testCases}
            onAddTestCase={handleAddTestCase}
            onUpdateTestCase={handleUpdateTestCase}
            onDeleteTestCase={handleDeleteTestCase}
          />
        )}
        {currentPage === 'generator' && currentProject && (
          <CodeGenerator 
            project={currentProject}
            testCases={testCases}
          />
        )}
        {currentPage === 'executor' && currentProject && (
          <TestExecutor 
            project={currentProject}
            testCases={testCases}
          />
        )}
        {currentPage === 'settings' && (
          <Settings 
            project={currentProject}
            onProjectUpdate={(updates) => {
              setCurrentProject({...currentProject, ...updates});
              setProjects(projects.map(p => p.id === currentProject.id ? {...p, ...updates} : p));
            }}
          />
        )}
      </main>
    </div>
  );
}

export default App;
