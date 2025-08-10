import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.css";

const Header = ({ isAdmin = false }) => {
  return (
    <header className="app-header">
      <div className="header-container">
        <NavLink to="/" className="logo">
          <span className="logo-icon">🔗</span>
          <span className="logo-text">Short.ly</span>
        </NavLink>

        <nav className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            end
          >
            Home
          </NavLink>
          <NavLink
            to="/admin"
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
          >
            Admin
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
