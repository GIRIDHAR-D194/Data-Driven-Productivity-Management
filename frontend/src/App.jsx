import { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import AllTemplatesPage from './AllTemplatesPage';
import AllFeaturesPage from './AllFeaturesPage';
import AIFeaturesPage from './AIFeaturesPage';
import ServiceManagementPage from './ServiceManagementPage';
import MarketingPage from './MarketingPage';
import OperationsPage from './OperationsPage';
import SoftwareDevelopmentPage from './SoftwareDevelopmentPage';
import ITOperationsPage from './ITOperationsPage';
import HRTemplatesPage from './HRTemplatesPage';
import ScrumBoardPage from './ScrumBoardPage';
import ScrumTemplateInfoPage from './ScrumTemplateInfoPage';
import AgileFlowPage from './pages/AgileFlowPage';

function App() {
  const [showTemplatesDropdown, setShowTemplatesDropdown] = useState(false);
  const [showFeaturesDropdown, setShowFeaturesDropdown] = useState(false);

  return (
    <div className="container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/" className="logo nav-logo-link">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.03 2.01L2.83995 7.37L12.0299 12.69L21.1699 7.37L12.0299 2.01H12.03ZM3.78995 16.59L12.0299 21.36L20.2699 16.59L12.0299 11.82L3.78995 16.59Z" fill="#0052CC" />
              <path d="M12.03 2.01L2.83995 7.37L12.0299 12.69L21.1699 7.37L12.0299 2.01H12.03Z" fill="#2684FF" />
              <path d="M11.53 12.22L2.59995 17.58L11.53 22.94L20.46 17.58L11.53 12.22Z" fill="#0052CC" />
            </svg>
            <span className="brand-name">ANORYX</span>
          </Link>
          <ul className="nav-links">
            <li
              className="nav-item-dropdown"
              onMouseEnter={() => setShowFeaturesDropdown(true)}
              onMouseLeave={() => setShowFeaturesDropdown(false)}
              onClick={() => setShowFeaturesDropdown(!showFeaturesDropdown)}
            >
              Features <ChevronDown size={14} />
              {showFeaturesDropdown && (
                <div className="dropdown-menu shadow-lg" style={{ left: 0 }}>
                  <ul className="dropdown-list">
                    <li>
                      <Link to="/features">All Features</Link>
                    </li>
                    <li>
                      <Link to="/ai-features">AI Features</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>Solutions <ChevronDown size={14} /></li>
            <li>Guide</li>
            <li
              className="nav-item-dropdown"
              onMouseEnter={() => setShowTemplatesDropdown(true)}
              onMouseLeave={() => setShowTemplatesDropdown(false)}
              onClick={() => setShowTemplatesDropdown(!showTemplatesDropdown)}
            >
              Templates <ChevronDown size={14} />
              {showTemplatesDropdown && (
                <div className="dropdown-menu shadow-lg">
                  <ul className="dropdown-list">
                    <li><Link to="/software-development" style={{ color: 'inherit', textDecoration: 'none' }}>Software Development</Link></li>
                    <li><Link to="/marketing" style={{ color: 'inherit', textDecoration: 'none' }}>Marketing</Link></li>
                    <li><Link to="/operations" style={{ color: 'inherit', textDecoration: 'none' }}>Operations</Link></li>
                    <li><Link to="/service-management" style={{ color: 'inherit', textDecoration: 'none' }}>Service Management</Link></li>
                    <li><Link to="/hr" style={{ color: 'inherit', textDecoration: 'none' }}>HR</Link></li>
                    <li><Link to="/it-operations" style={{ color: 'inherit', textDecoration: 'none' }}>IT Operations</Link></li>
                  </ul>
                </div>
              )}
            </li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="nav-right">
          <button className="btn-primary-outline">Get it free</button>
          <Search size={20} className="search-icon" />
          <span className="signin-link">Sign in</span>
        </div>
      </nav>

      {/* Route Definitions */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<AllFeaturesPage />} />
        <Route path="/marketing" element={<MarketingPage />} />
        <Route path="/operations" element={<OperationsPage />} />
        <Route path="/service-management" element={<ServiceManagementPage />} />
        <Route path="/ai-features" element={<AIFeaturesPage />} />
        <Route path="/templates" element={<AllTemplatesPage />} />
        <Route path="/software-development" element={<SoftwareDevelopmentPage />} />
        <Route path="/scrum-template" element={<ScrumTemplateInfoPage />} />
        <Route path="/scrum-board" element={<ScrumBoardPage />} />
        <Route path="/it-operations" element={<ITOperationsPage />} />
        <Route path="/hr" element={<HRTemplatesPage />} />
        <Route path="/agileflow" element={<AgileFlowPage />} />
      </Routes>
    </div>
  );
}

export default App;
