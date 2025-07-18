import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/">
            <img
              src="/infinite-creations-logo.png"
              alt="Infinite Creations Logo"
              className="logo-image"
            />
          </Link>
        </div>

        <nav className="navigation">
          <ul className={`nav-menu ${isMenuOpen ? "nav-menu-open" : ""}`}>
            <li className="nav-item">
              <Link to="/coming-soon" className="nav-link">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link">
                Our Work
              </Link>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <Link to="/coming-soon" className="nav-link">
                Contact Us
              </Link>
            </li>
            {/* Saved dropdown design for future use:
            <li
              className={`nav-item dropdown ${
                isDropdownOpen ? "dropdown-open" : ""
              }`}
            >
              <button
                className="nav-link dropdown-toggle"
                onClick={toggleDropdown}
                aria-expanded={isDropdownOpen}
              >
                Menu Item
                <svg
                  className="dropdown-arrow"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="dropdown-menu">
                <Link to="/coming-soon" className="dropdown-item">
                  Dropdown Item 1
                </Link>
                <Link to="/coming-soon" className="dropdown-item">
                  Dropdown Item 2
                </Link>
                <Link to="/coming-soon" className="dropdown-item">
                  Dropdown Item 3
                </Link>
                <Link to="/coming-soon" className="dropdown-item">
                  Dropdown Item 4
                </Link>
              </div>
            </li>
            */}
            <li className="nav-item mobile-only">
              <Link to="/coming-soon" className="nav-link">
                Client Login
              </Link>
            </li>
          </ul>

          <div className="header-buttons">
            <Link to="/coming-soon" className="btn-link">
              Client Login
            </Link>
          </div>

          <button className="mobile-menu-toggle" onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
