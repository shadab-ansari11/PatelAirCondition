import React, { useState, useEffect } from 'react';
import './Header.css';
import { FaPhoneAlt, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { FaSnowflake } from 'react-icons/fa6';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [showCallDropdown, setShowCallDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'about', label: 'About Us', href: '#about' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'contact', label: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (id) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`header-wrapper ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo */}
        <a href="#home" className="header-brand" onClick={() => handleNavClick('home')}>
          <div className="logo-icon-wrap">
            <FaSnowflake className="snowflake-icon" />
          </div>
          <div className="logo-text-wrap">
            <span className="brand-name">PatelAirCondition</span>
            <span className="brand-sub">AC SERVICE &amp; SOLUTIONS</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  href={item.href}
                  className={`nav-link ${activeNav === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                  {activeNav === item.id && <span className="active-dot"></span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right CTA: Dual Contact Call Button with Dropdown */}
        <div className="header-right-actions">
          <div 
            className="header-call-btn-container"
            onMouseEnter={() => setShowCallDropdown(true)}
            onMouseLeave={() => setShowCallDropdown(false)}
          >
            <a href="tel:+918888678078" className="header-call-btn">
              <div className="call-btn-icon">
                <FaPhoneAlt />
              </div>
              <div className="call-btn-text">
                <span className="call-label">Call Now</span>
                <span className="call-number">+91 88886 78078</span>
              </div>
              <FaChevronDown className="call-arrow-icon" />
            </a>

            {/* Quick Dropdown for both Numbers */}
            <div className={`call-dropdown-menu ${showCallDropdown ? 'show' : ''}`}>
              <a href="tel:+918888678078" className="dropdown-call-item">
                <div className="item-person-icon"><FaPhoneAlt /></div>
                <div className="item-text">
                  <strong>Noman Patel</strong>
                  <span>+91 88886 78078</span>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <a href="tel:+917304077952" className="dropdown-call-item">
                <div className="item-person-icon"><FaPhoneAlt /></div>
                <div className="item-text">
                  <strong>Muzammil Ahmad</strong>
                  <span>+91 73040 77952</span>
                </div>
              </a>
            </div>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-inner">
          <ul className="mobile-nav-list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`mobile-nav-link ${activeNav === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-cta-box">
            <span className="mobile-contact-title">Quick Call Technicians:</span>
            <a href="tel:+918888678078" className="btn-primary-blue w-full">
              <FaPhoneAlt /> Noman Patel: +91 88886 78078
            </a>
            <a href="tel:+917304077952" className="btn-outline-blue w-full" style={{ background: '#f8fafc' }}>
              <FaPhoneAlt /> Muzammil Ahmad: +91 73040 77952
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
