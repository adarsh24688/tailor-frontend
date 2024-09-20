import React, { useState } from "react";
import './Navbar.css';

const Navbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <a href="https://www.amazon.in/" id="logo">TAILOR APP</a>
        </div>
        
        {/* Hamburger menu for mobile view */}
        <div className="hamburger-menu" onClick={toggleSidebar}>
          <span className="hamburger-icon">&#9776;</span>
        </div>

        {/* Desktop navigation */}
        <ul className="nav-list desktop-nav">
          <li className="nav-item"><a href="/">Home</a></li>
          <li className="nav-item"><a href="/about">About</a></li>
          <li className="nav-item"><a href="/services">Services</a></li>
          <li className="nav-item"><a href="/contact">Contact</a></li>
        </ul>

        <div className="search-container desktop-search">
          <input className="search-input" type="text" placeholder="Search TAILOR APP" />
          <button className="search-button">Search</button>
        </div>

        <select className="country-dropdown desktop-dropdown" id="country">
          <option value="EN">EN</option>
          <option value="HINDI">Hindi</option>
          <option value="UKEN">(UK) EN</option>
          <option value="MARATHI">Marathi</option>
        </select>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>&times;</button>
        <ul className="nav-list">
          <li className="nav-item"><a href="/">Home</a></li>
          <li className="nav-item"><a href="/about">About</a></li>
          <li className="nav-item"><a href="/services">Services</a></li>
          <li className="nav-item"><a href="/contact">Contact</a></li>
        </ul>
        <div className="search-container">
          <input className="search-input" type="text" placeholder="Search TAILOR APP" />
          <button className="search-button">Search</button>
        </div>
        <select className="country-dropdown" id="country">
          <option value="EN">EN</option>
          <option value="HINDI">Hindi</option>
          <option value="UKEN">(UK) EN</option>
          <option value="MARATHI">Marathi</option>
        </select>
      </div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && <div className="overlay" onClick={toggleSidebar}></div>}
    </div>
  );
};

export default Navbar;
