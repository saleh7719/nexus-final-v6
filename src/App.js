import React from 'react';
import './App.css';

function App() {
  return (
    <div className="ultra-dashboard">
      {/* Sidebar Navigation */}
      <aside className="ultra-sidebar">
        <div className="brand">NEXUS<span>ULTRA</span></div>
        <nav className="menu">
          <div className="menu-item active">Overview</div>
          <div className="menu-item">Cloud Storage</div>
          <div className="menu-item">Team Members</div>
          <div className="menu-item">Security Hub</div>
          <div className="menu-item">Financials</div>
          <div className="menu-item">Settings</div>
        </nav>
        <div className="storage-card">
          <p>Cloud Capacity</p>
          <div className="progress-bar"><div className="fill" style={{width: '75%'}}></div></div>
          <span>1.5 TB / 2 TB</span>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="content-area">
        <header className="main-header">
          <div className="search-box">Search projects...</div>
          <div className="header-actions">
            <span className="notification">🔔</span>
            <div className="profile">Saleh Al-Qahtani</div>
          </div>
        </header>

        {/* Info Cards Section */}
        <section className="info-cards">
          <div className="card">
            <h4>Total Revenue</h4>
            <h3>$128,430.00</h3>
            <span className="tag-green">+24% ↑</span>
          </div>
          <div className="card">
            <h4>Active Sessions</h4>
            <h3>4,291</h3>
            <span className="tag-blue">Live</span>
          </div>
          <div className="card">
            <h4>Error Rate</h4>
            <h3>0.02%</h3>
            <span className="tag-gray">Stable</span>
          </div>
          <div className="card">
            <h4>System Load</h4>
            <h3>32%</h3>
            <span className="tag-orange">Normal</span>
          </div>
        </section>

        {/* Data Table Section */}
        <section className="data-section">
          <div className="table-container">
            <h3>Recent Transactions</h3>
            <table className="nexus-table">
              <thead>
                <tr>
                  <th>Project Name</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Budget</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cyber Nexus V5</td>
                  <td>Jan 18, 2026</td>
                  <td><span className="status-done">Completed</span></td>
                  <td>$12,000</td>
                </tr>
                <tr>
                  <td>Smart Dashboard</td>
                  <td>Jan 19, 2026</td>
                  <td><span className="status-pending">Pending</span></td>
                  <td>$8,500</td>
                </tr>
                <tr>
                  <td>Ultra AI Engine</td>
                  <td>Jan 19, 2026</td>
                  <td><span className="status-done">Completed</span></td>
                  <td>$25,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;