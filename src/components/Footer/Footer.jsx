import React from 'react';
import './Footer.css';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock
} from 'react-icons/fa';
import { FaSnowflake } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container footer-container">
        {/* Col 1: Brand & Socials */}
        <div className="footer-col footer-col-brand">
          <div className="footer-brand">
            <div className="footer-logo-icon">
              <FaSnowflake />
            </div>
            <div className="footer-brand-text">
              <span className="brand-name-white">PatelAirCondition</span>
              <span className="brand-sub-white">AC SERVICE &amp; SOLUTIONS</span>
            </div>
          </div>

          <p className="footer-about-text">
            Providing reliable AC installation, repair, maintenance &amp; AMC services for your complete comfort.
          </p>

          <div className="footer-social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon-btn">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-icon-btn">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon-btn">
              <FaTwitter />
            </a>
            <a href="https://wa.me/918888678078" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="social-icon-btn">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="footer-col">
          <h4 className="footer-col-title">Quick Links</h4>
          <ul className="footer-links-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>

        {/* Col 3: Our Services */}
        <div className="footer-col">
          <h4 className="footer-col-title">Our Services</h4>
          <ul className="footer-links-list">
            <li><a href="#services">AC Installation</a></li>
            <li><a href="#services">AC Repair</a></li>
            <li><a href="#services">AC Maintenance</a></li>
            <li><a href="#services">AC Gas Filling</a></li>
            <li><a href="#services">AC AMC</a></li>
          </ul>
        </div>

        {/* Col 4: Contact Info */}
        <div className="footer-col">
          <h4 className="footer-col-title">Contact Info</h4>
          <ul className="footer-contact-list">
            <li>
              <FaPhoneAlt className="footer-contact-icon" />
              <div>
                <a href="tel:+918888678078" style={{ display: 'block' }}>Noman Patel: +91 88886 78078</a>
                <a href="tel:+917304077952" style={{ display: 'block', marginTop: '4px' }}>Muzammil Ahmad: +91 73040 77952</a>
              </div>
            </li>
            <li>
              <FaEnvelope className="footer-contact-icon" />
              <a href="mailto:info@patelaircondition.com">info@patelaircondition.com</a>
            </li>
            <li>
              <FaMapMarkerAlt className="footer-contact-icon" />
              <span>12, Central Avenue, Nagpur - 440001</span>
            </li>
            <li>
              <FaClock className="footer-contact-icon" />
              <span>Mon - Sun: 8:00 AM - 8:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Sub-Footer Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-inner">
          <p className="copyright-text">
            &copy; 2025 PatelAirCondition. All Rights Reserved.
          </p>
          <div className="footer-legal-links">
            <a href="#privacy">Privacy Policy</a>
            <span className="sep-bar">|</span>
            <a href="#terms">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
