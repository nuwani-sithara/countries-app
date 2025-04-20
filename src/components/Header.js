// src/components/Header.js
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="app-header navbar navbar-expand-lg shadow-sm">
      <div className="container" >
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <i className="bi bi-globe-americas me-2"></i>
          <h1 className="m-0 fs-4 fw-bold">World Explorer</h1>
        </Link>
        <div className="d-flex align-items-center">
          <button 
            onClick={toggleTheme}
            className="btn btn-link text-decoration-none"
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <i className={`bi ${theme === 'light' ? 'bi-moon-fill' : 'bi-sun-fill'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;