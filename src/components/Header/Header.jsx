import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import {
  FaPhoneAlt,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaWhatsapp,
  FaAngleRight
} from "react-icons/fa";
import {
  FaSnowflake,
  FaWrench,
  FaRotate,
  FaTemperatureArrowDown,
  FaLayerGroup
} from "react-icons/fa6";
import logoImg from "../../assets/logo.jpeg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(true);
  const [activeNav, setActiveNav] = useState("home");
  const [showCallDropdown, setShowCallDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceSubItems = [
    {
      id: "services",
      label: "AC Repair & Services",
      desc: "Installation, Jet Service, Gas Refill & AMC",
      href: "#services",
      icon: <FaSnowflake className="srv-menu-icon ac-icon" />
    },
    {
      id: "copper-piping",
      label: "Underground Copper Piping",
      desc: "Concealed Wall Piping & Nitrogen Leak Test",
      href: "#copper-piping",
      icon: <FaLayerGroup className="srv-menu-icon copper-icon" />
    },
    {
      id: "washing-machine",
      label: "Washing Machine Repair",
      desc: "Front & Top Load Doorstep Diagnostics",
      href: "#washing-machine",
      icon: <FaRotate className="srv-menu-icon wm-icon" />
    },
    {
      id: "refrigerator",
      label: "Refrigerator / Fridge Repair",
      desc: "Single/Double Door Gas Charging & Compressor",
      href: "#refrigerator",
      icon: <FaTemperatureArrowDown className="srv-menu-icon fridge-icon" />
    }
  ];

  const handleNavClick = (id) => {
    setActiveNav(id);
    setMobileMenuOpen(false);
    setShowServicesDropdown(false);
  };

  return (
    <header className={`header-wrapper ${isScrolled ? "header-scrolled" : ""}`}>
      <div className="container header-container">
        {/* Brand Logo */}
        <a
          href="#home"
          className="header-brand"
          onClick={() => handleNavClick("home")}
        >
          <div className="logo-icon-wrap">
            <img
              src={logoImg}
              alt="PatelAirCondition Logo"
              className="brand-logo-img"
            />
          </div>
          <div className="logo-text-wrap">
            <span className="brand-name">PatelAirCondition</span>
            <span className="brand-sub">AC &amp; APPLIANCE CARE</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {/* Home */}
            <li className="nav-item">
              <a
                href="#home"
                className={`nav-link ${activeNav === "home" ? "active" : ""}`}
                onClick={() => handleNavClick("home")}
              >
                Home
                {activeNav === "home" && <span className="active-dot"></span>}
              </a>
            </li>

            {/* Services Dropdown Item */}
            <li
              className="nav-item services-nav-item"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <a
                href="#services"
                className={`nav-link srv-trigger-link ${
                  ["services", "copper-piping", "washing-machine", "refrigerator"].includes(
                    activeNav
                  )
                    ? "active"
                    : ""
                }`}
                onClick={() => handleNavClick("services")}
              >
                <span>Our Services</span>
                <FaChevronDown
                  className={`dropdown-chevron ${
                    showServicesDropdown ? "rotate-up" : ""
                  }`}
                />
                {["services", "copper-piping", "washing-machine", "refrigerator"].includes(
                  activeNav
                ) && <span className="active-dot"></span>}
              </a>

              {/* Rich Services Dropdown Card */}
              <div
                className={`services-dropdown-card ${
                  showServicesDropdown ? "show" : ""
                }`}
              >
                <div className="services-dropdown-header">
                  <span>ALL REPAIR &amp; INSTALLATION SERVICES</span>
                </div>
                <div className="services-dropdown-grid">
                  {serviceSubItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      className="service-dropdown-row"
                      onClick={() => handleNavClick(item.id)}
                    >
                      <div className="srv-icon-bubble">{item.icon}</div>
                      <div className="srv-row-content">
                        <span className="srv-row-title">{item.label}</span>
                        <span className="srv-row-desc">{item.desc}</span>
                      </div>
                      <FaAngleRight className="srv-row-arrow" />
                    </a>
                  ))}
                </div>
              </div>
            </li>

            {/* About Us */}
            <li className="nav-item">
              <a
                href="#about"
                className={`nav-link ${activeNav === "about" ? "active" : ""}`}
                onClick={() => handleNavClick("about")}
              >
                About Us
                {activeNav === "about" && <span className="active-dot"></span>}
              </a>
            </li>

            {/* Why Us */}
            <li className="nav-item">
              <a
                href="#why-choose-us"
                className={`nav-link ${activeNav === "why-choose-us" ? "active" : ""}`}
                onClick={() => handleNavClick("why-choose-us")}
              >
                Why Us
                {activeNav === "why-choose-us" && <span className="active-dot"></span>}
              </a>
            </li>

            {/* Contact */}
            <li className="nav-item">
              <a
                href="#contact"
                className={`nav-link ${activeNav === "contact" ? "active" : ""}`}
                onClick={() => handleNavClick("contact")}
              >
                Contact
                {activeNav === "contact" && <span className="active-dot"></span>}
              </a>
            </li>
          </ul>
        </nav>

        {/* Right Actions: Call Pill with Dropdown */}
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
                <span className="call-label">Call Technician</span>
                <span className="call-number">+91 88886 78078</span>
              </div>
              <FaChevronDown className="call-arrow-icon" />
            </a>

            {/* Quick Dropdown for both Numbers */}
            <div
              className={`call-dropdown-menu ${showCallDropdown ? "show" : ""}`}
            >
              <div className="call-dropdown-header">
                <span>Instant Doorstep Help</span>
              </div>
              <a href="tel:+918888678078" className="dropdown-call-item">
                <div className="item-person-icon">
                  <FaPhoneAlt />
                </div>
                <div className="item-text">
                  <strong>Noman Patel</strong>
                  <span>+91 88886 78078</span>
                </div>
              </a>
              <div className="dropdown-divider"></div>
              <a href="tel:+917304077952" className="dropdown-call-item">
                <div className="item-person-icon">
                  <FaPhoneAlt />
                </div>
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
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-inner">
          <ul className="mobile-nav-list">
            <li>
              <a
                href="#home"
                className={`mobile-nav-link ${activeNav === "home" ? "active" : ""}`}
                onClick={() => handleNavClick("home")}
              >
                Home
              </a>
            </li>

            {/* Mobile Services Accordion */}
            <li className="mobile-services-accordion">
              <div
                className="mobile-accordion-toggle"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                <span className="mobile-nav-link">Our Services</span>
                <FaChevronDown
                  className={`mobile-chevron ${mobileServicesOpen ? "rotate-up" : ""}`}
                />
              </div>

              {mobileServicesOpen && (
                <div className="mobile-sub-services">
                  {serviceSubItems.map((item) => (
                    <a
                      key={item.id}
                      href={item.href}
                      className="mobile-sub-item"
                      onClick={() => handleNavClick(item.id)}
                    >
                      <span className="mobile-sub-icon">{item.icon}</span>
                      <span className="mobile-sub-text">{item.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </li>

            <li>
              <a
                href="#about"
                className={`mobile-nav-link ${activeNav === "about" ? "active" : ""}`}
                onClick={() => handleNavClick("about")}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#why-choose-us"
                className={`mobile-nav-link ${activeNav === "why-choose-us" ? "active" : ""}`}
                onClick={() => handleNavClick("why-choose-us")}
              >
                Why Choose Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`mobile-nav-link ${activeNav === "contact" ? "active" : ""}`}
                onClick={() => handleNavClick("contact")}
              >
                Contact Us
              </a>
            </li>
          </ul>

          <div className="mobile-cta-box">
            <span className="mobile-contact-title">Direct Calling:</span>
            <a href="tel:+918888678078" className="btn-primary-blue w-full">
              <FaPhoneAlt /> Noman Patel: 88886 78078
            </a>
            <a
              href="tel:+917304077952"
              className="btn-outline-blue w-full"
              style={{ background: "#f8fafc" }}
            >
              <FaPhoneAlt /> Muzammil Ahmad: 73040 77952
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
