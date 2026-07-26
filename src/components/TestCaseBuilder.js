import React, { useState } from 'react';
import './TestCaseBuilder.css';

function TestCaseBuilder({ project, testCases, onAddTestCase, onUpdateTestCase, onDeleteTestCase }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    steps: [{ action: '', target: '', value: '' }],
    expectedResult: '',
    priority: 'medium'
  });
  const [selectedTest, setSelectedTest] = useState(null);

  const handleAddStep = () => {
    setFormData({
      ...formData,
      steps: [...formData.steps, { action: '', target: '', value: '' }]
    });
  };

  const handleRemoveStep = (index) => {
    setFormData({
      ...formData,
      steps: formData.steps.filter((_, i) => i !== index)
    });
  };

  const handleStepChange = (index, field, value) => {
    const newSteps = [...formData.steps];
    newSteps[index][field] = value;
    setFormData({ ...formData, steps: newSteps });
  };

  const handleSubmit = () => {
    if (formData.name.trim() && formData.steps.some(s => s.action)) {
      onAddTestCase(formData);
      setFormData({
        name: '',
        description: '',
        steps: [{ action: '', target: '', value: '' }],
        expectedResult: '',
        priority: 'medium'
      });
      setShowForm(false);
    }
  };

  const actions = ['Click', 'Type', 'Select', 'Wait', 'Hover', 'Submit', 'Clear', 'Navigate'];

  return (
    <div className="builder-container">
      <div className="builder-header">
        <h1>📝 Test Case Builder</h1>
        <p>Create comprehensive test cases and scenarios</p>
      </div>

      <div className="builder-layout">
        <div className="builder-form-section">
          {showForm ? (
            <div className="form-card">
              <h2>New Test Case</h2>
              <input
                type="text"
                placeholder="Test Case Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              />

              <div className="steps-section">
                <label>Test Steps</label>
                {formData.steps.map((step, idx) => (
                  <div key={idx} className="step-input">
                    <select
                      value={step.action}
                      onChange={(e) => handleStepChange(idx, 'action', e.target.value)}
                    >
                      <option value="">Select Action</option>
                      {actions.map(action => <option key={action} value={action}>{action}</option>)}
                    </select>
                    <input
                      type="text"
                      placeholder="Target (CSS/XPath)"
                      value={step.target}
                      onChange={(e) => handleStepChange(idx, 'target', e.target.value)}
                    />
                    <input
                      type="text"
                      placeholder="Value (if needed)"
                      value={step.value}
                      onChange={(e) => handleStepChange(idx, 'value', e.target.value)}
                    />
                    <button
                      className="btn-remove"
                      onClick={() => handleRemoveStep(idx)}
                      title="Remove step"
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <button className="btn-add-step" onClick={handleAddStep}>+ Add Step</button>
              </div>

              <textarea
                placeholder="Expected Result"
                value={formData.expectedResult}
                onChange={(e) => setFormData({ ...formData, expectedResult: e.target.value })}
              />

              <select
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
              >
                <option value="low">Priority: Low</option>
                <option value="medium">Priority: Medium</option>
                <option value="high">Priority: High</option>
              </select>

              <div className="form-buttons">
                <button className="btn-create" onClick={handleSubmit}>Create Test Case</button>
                <button className="btn-cancel" onClick={() => setShowForm(false)}>Cancel</button>
              </div>
            </div>
          ) : (
            <button className="btn-new" onClick={() => setShowForm(true)}>+ New Test Case</button>
          )}
        </div>

        <div className="tests-list-section">
          <h2>Test Cases ({testCases.length})</h2>
          {testCases.length === 0 ? (
            <p className="empty-message">No test cases yet. Create one to get started!</p>
          ) : (
            <div className="tests-list">
              {testCases.map(test => (
                <div
                  key={test.id}
                  className={`test-card ${selectedTest?.id === test.id ? 'active' : ''}`}
                  onClick={() => setSelectedTest(test)}
                >
                  <div className="test-header">
                    <h3>{test.name}</h3>
                    <span className={`priority ${test.priority}`}>{test.priority}</span>
                  </div>
                  <p className="test-description">{test.description || 'No description'}</p>
                  <p className="test-steps">{test.steps.filter(s => s.action).length} steps</p>
                  <button
                    className="btn-delete"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteTestCase(test.id);
                      setSelectedTest(null);
                    }}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {selectedTest && (
        <div className="test-preview">
          <h2>Test Details: {selectedTest.name}</h2>
          <div className="preview-content">
            <div className="preview-section">
              <h3>Description</h3>
              <p>{selectedTest.description || 'No description'}</p>
            </div>
            <div className="preview-section">
              <h3>Steps ({selectedTest.steps.filter(s => s.action).length})</h3>
              <ol>
                {selectedTest.steps.map((step, idx) => (
                  step.action && (
                    <li key={idx}>
                      <strong>{step.action}</strong> on <code>{step.target}</code>
                      {step.value && <> with value <code>{step.value}</code></>
                    </li>
                  )
                ))}
              </ol>
            </div>
            <div className="preview-section">
              <h3>Expected Result</h3>
              <p>{selectedTest.expectedResult || 'No expected result defined'}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default TestCaseBuilder;