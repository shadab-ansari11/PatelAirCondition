import React, { useState, useEffect } from 'react';
import './Hero.css';
import heroTech1 from '../../assets/hero-tech-1.jpg';
import heroTech2 from '../../assets/hero-tech-2.jpg';
import heroTech3 from '../../assets/hero-tech-3.jpg';

import {
  FaClock,
  FaHeadset,
  FaArrowRight,
  FaPhoneAlt,
  FaCheckCircle,
  FaTag,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaTimes
} from 'react-icons/fa';
import { FaWrench } from 'react-icons/fa6';

const slidesData = [
  {
    badge: 'Serving Nagpur, Kamptee & Kanhan',
    titleLine1: 'Patel Air Condition',
    titleLine2: 'AC & Appliance Repair',
    description: 'Top-rated AC Installation, Jet Pump Servicing, Underground Copper Piping, Washing Machine & Refrigerator Repair across Nagpur, Kamptee & Kanhan.',
    image: heroTech1,
  },
  {
    badge: 'Fast 45-60 Min Doorstep Arrival',
    titleLine1: 'Expert Repair,',
    titleLine2: 'Instant Cooling',
    description: 'Same-day AC troubleshooting, gas top-up, washing machine PCB repair & fridge compressor replacement with 100% genuine parts.',
    image: heroTech2,
  },
  {
    badge: 'Concealed Copper Piping & Gas Refill',
    titleLine1: 'Underground Piping,',
    titleLine2: 'Zero Leakage Guarantee',
    description: 'Heavy gauge pure copper pipe installation for new buildings & renovations with nitrogen pressure testing in Nagpur, Kamptee & Kanhan.',
    image: heroTech3,
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [callModalOpen, setCallModalOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesData.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const slide = slidesData[currentSlide];

  const waNoman = "https://wa.me/918888678078?text=Hello%20PatelAirCondition,%20I%20want%20to%20book%20an%20AC%20service/repair.";

  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        {/* Left Content */}
        <div className="hero-left">
          {/* Top Trust Badge */}
          <div className="hero-badge">
            <FaMapMarkerAlt className="badge-pin-icon" />
            <span>{slide.badge}</span>
          </div>

          {/* Main Hero Heading */}
          <h1 className="hero-title">
            {slide.titleLine1} <br />
            <span className="text-highlight-blue">{slide.titleLine2}</span>
          </h1>

          {/* Subtitle Description */}
          <p className="hero-description">
            {slide.description}
          </p>

          {/* 4 Feature Highlights */}
          <div className="hero-trust-row">
            <div className="trust-item">
              <div className="trust-icon">
                <FaWrench />
              </div>
              <span className="trust-label">Certified Technicians</span>
            </div>

            <div className="trust-item">
              <div className="trust-icon">
                <FaCheckCircle />
              </div>
              <span className="trust-label">100% Reliable</span>
            </div>

            <div className="trust-item">
              <div className="trust-icon">
                <FaClock />
              </div>
              <span className="trust-label">On-Time Service</span>
            </div>

            <div className="trust-item">
              <div className="trust-icon">
                <FaTag />
              </div>
              <span className="trust-label">Affordable Pricing</span>
            </div>
          </div>

          {/* CTA Action Buttons */}
          <div className="hero-cta-group">
            <a href="#contact" className="btn-primary-blue btn-hero-cta">
              <span>Book a Service</span>
              <FaArrowRight />
            </a>

            <button 
              type="button"
              className="btn-outline-blue btn-hero-cta"
              onClick={() => setCallModalOpen(true)}
            >
              <span>Call Now</span>
              <FaPhoneAlt className="cta-phone-icon" />
            </button>
          </div>
        </div>

        {/* Right Media Column */}
        <div className="hero-right">
          <div className="hero-image-wrapper">
            <img
              src={slide.image}
              alt="Professional AC technician servicing indoor split air conditioner unit"
              className="hero-main-img"
            />

            {/* Floating 24/7 Support Card */}
            <div 
              className="floating-support-card cursor-pointer"
              onClick={() => setCallModalOpen(true)}
            >
              <div className="support-icon-box">
                <FaHeadset />
              </div>
              <div className="support-text-box">
                <strong className="support-title">24/7</strong>
                <span className="support-sub">Support Available</span>
                <p className="support-desc">Click to call technician now!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slider Pagination Dots */}
      <div className="hero-slider-dots">
        {slidesData.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Quick Call Modal Popup */}
      {callModalOpen && (
        <div className="call-modal-overlay" onClick={() => setCallModalOpen(false)}>
          <div className="call-modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Direct Call &amp; Booking</h3>
              <button 
                className="modal-close-btn" 
                onClick={() => setCallModalOpen(false)}
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
            </div>

            <p className="modal-subtext">
              Choose a technician to call directly for instant doorstep AC repair:
            </p>

            <div className="modal-contacts-list">
              {/* Noman Patel - Direct Call & WhatsApp */}
              <div className="modal-contact-row">
                <div className="contact-person-info">
                  <strong>Noman Patel</strong>
                  <span>Call &amp; WhatsApp Booking</span>
                </div>
                <div className="contact-btn-pair">
                  <a href="tel:+918888678078" className="btn-call-action" title="Direct Phone Call">
                    <FaPhoneAlt /> Call +91 88886 78078
                  </a>
                  <a href={waNoman} target="_blank" rel="noopener noreferrer" className="btn-wa-action" title="Chat on WhatsApp">
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>
              </div>

              {/* Muzammil Ahmad - Calling Only */}
              <div className="modal-contact-row">
                <div className="contact-person-info">
                  <strong>Muzammil Ahmad</strong>
                  <span>Direct Calling Only</span>
                </div>
                <div className="contact-btn-single">
                  <a href="tel:+917304077952" className="btn-call-action w-full" title="Direct Phone Call">
                    <FaPhoneAlt /> Call +91 73040 77952
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
