import React from 'react';
import './CopperPiping.css';
import copperImg from '../../assets/copper-piping-service.jpg';
import {
  FaCheckCircle,
  FaShieldAlt,
  FaWrench,
  FaPhoneAlt,
  FaWhatsapp,
  FaArrowRight
} from 'react-icons/fa';
import {
  FaLayerGroup,
  FaGaugeHigh,
  FaBuildingLock
} from 'react-icons/fa6';

const CopperPiping = () => {
  const waUrl =
    'https://wa.me/918888678078?text=Hello%20PatelAirCondition,%20I%20need%20Underground%20AC%20Copper%20Piping%20service.';

  const features = [
    {
      icon: <FaLayerGroup />,
      title: '100% Pure Copper Pipes',
      desc: 'Heavy gauge, seamless copper tubes ensuring high pressure resistance and maximum thermal conductivity.'
    },
    {
      icon: <FaGaugeHigh />,
      title: 'Nitrogen Leak Testing',
      desc: 'High-pressure nitrogen testing is performed before concealing to guarantee 0% gas leakage for years.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Class-O Nitrile Insulation',
      desc: 'Premium closed-cell thermal insulation prevents sweating, water dripping, and wall dampness inside rooms.'
    },
    {
      icon: <FaBuildingLock />,
      title: 'Underground & Wall Chasing',
      desc: 'Flawless concealed layout for new homes, villas, offices, and commercial sites before plastering & false ceiling.'
    }
  ];

  const highlights = [
    'Concealed Piping for Split & VRV / VRF Systems',
    'Pre-Construction Piping for New Houses & Offices',
    'Testing & Replacement of Old Damaged Copper Pipes',
    'Concealed Drain Piping & Multi-Core Electrical Cabling',
    'Expert Brazing & Flare Nut Leak-Proof Joints'
  ];

  return (
    <section className="copper-section section-padding" id="copper-piping">
      <div className="container">
        {/* Section Header */}
        <div className="copper-header-center">
          <span className="section-badge">CONCEALED PIPING SPECIALISTS</span>
          <h2 className="copper-main-title">
            AC Underground &amp; Concealed Copper Piping
          </h2>
          <div className="title-underline-accent"></div>
          <p className="copper-subtitle">
            Get concealed copper pipe installation done during construction or renovation for a clean, wire-free modern look with zero leakage guarantee.
          </p>
        </div>

        <div className="copper-grid">
          {/* Left Column: Image with Floating Quality Badges */}
          <div className="copper-image-col">
            <div className="copper-image-wrapper">
              <img
                src={copperImg}
                alt="Underground AC Copper Piping Installation"
                className="copper-main-img"
              />
              <div className="copper-floating-badge top-right">
                <span className="badge-highlight">100%</span>
                <span className="badge-text">Leak Proof Assured</span>
              </div>
              <div className="copper-floating-badge bottom-left">
                <FaShieldAlt className="badge-icon-blue" />
                <div>
                  <strong>Heavy Gauge</strong>
                  <span>Pure Copper Pipes</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Information & Feature List */}
          <div className="copper-content-col">
            <h3 className="copper-content-title">
              Why Under-Wall &amp; Underground Piping is Essential?
            </h3>
            <p className="copper-content-desc">
              Concealed copper piping keeps your walls sleek and eliminates messy visible pipes and outdoor wires. <strong>PatelAirCondition</strong> specializes in end-to-end concealed piping with heavy gauge copper tubes, high-grade insulation, and nitrogen pressure testing before final finishing.
            </p>

            <ul className="copper-checklist">
              {highlights.map((item, idx) => (
                <li key={idx} className="copper-check-item">
                  <FaCheckCircle className="copper-check-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            {/* Quick Action Buttons */}
            <div className="copper-action-btns">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-blue copper-wa-btn"
              >
                <FaWhatsapp /> Get Copper Piping Quote
              </a>
              <a href="tel:+918888678078" className="btn-outline-blue copper-call-btn">
                <FaPhoneAlt /> Call: 88886 78078
              </a>
            </div>
          </div>
        </div>

        {/* Feature Cards Bottom Grid */}
        <div className="copper-cards-row">
          {features.map((feat, idx) => (
            <div key={idx} className="copper-feat-card">
              <div className="feat-card-icon">{feat.icon}</div>
              <h4 className="feat-card-title">{feat.title}</h4>
              <p className="feat-card-desc">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CopperPiping;
