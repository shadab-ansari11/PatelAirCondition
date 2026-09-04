import React from 'react';
import './About.css';
import aboutRoomImg from '../../assets/about-room-hd.jpg';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const About = () => {
  const features = [
    'Experienced & Certified Technicians',
    '100% Customer Satisfaction',
    'Affordable & Transparent Pricing',
    'Genuine Spare Parts',
    'Quick Response & On-Time Service'
  ];

  return (
    <section className="about-section section-padding" id="about">
      <div className="container about-container">
        {/* Left Column: Text & Features */}
        <div className="about-left">
          <span className="section-badge">ABOUT US</span>
          <h2 className="about-heading">
            We Keep You <span className="text-highlight-blue">Cool</span> <br />
            All Year Round
          </h2>

          <p className="about-desc">
            PatelAirCondition is a trusted name in AC service &amp; solutions.
            We provide end-to-end services including installation, repair, maintenance,
            gas filling &amp; AMC for all major AC brands.
          </p>

          <ul className="about-features-list">
            {features.map((item, idx) => (
              <li key={idx} className="about-feature-item">
                <FaCheckCircle className="about-check-icon" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="about-cta-wrap">
            <a href="#contact" className="btn-primary-blue btn-about-cta">
              <span>Know More About Us</span>
              <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Right Column: Crystal Clear HD Image with 10+ Experience Floating Box */}
        <div className="about-right">
          <div className="about-image-wrapper">
            <img
              src={aboutRoomImg}
              alt="Modern living room with wall mounted split air conditioner"
              className="about-main-img"
            />

            {/* Floating Experience Badge */}
            <div className="floating-exp-card">
              <span className="exp-number">10+</span>
              <div className="exp-text-block">
                <span className="exp-title">Years of</span>
                <span className="exp-sub">Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
