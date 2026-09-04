import React from 'react';
import './Services.css';
import serviceCard1 from '../../assets/service-card-1.jpg';
import serviceCard2 from '../../assets/service-card-2.jpg';
import serviceCard3 from '../../assets/service-card-3.jpg';
import serviceCard4 from '../../assets/service-card-4.jpg';
import serviceCard5 from '../../assets/service-card-5.jpg';

import {
  FaWrench,
  FaGear,
  FaArrowRight,
  FaShieldHalved
} from 'react-icons/fa6';
import { FaSlidersH } from 'react-icons/fa';
import { TbGauge } from 'react-icons/tb';

const servicesData = [
  {
    id: 'install',
    title: 'AC Installation',
    desc: 'Professional installation of all types of AC with perfect setup.',
    img: serviceCard1,
    icon: <FaWrench />
  },
  {
    id: 'repair',
    title: 'AC Repair',
    desc: 'Fast & reliable repair services for all AC brands and models.',
    img: serviceCard2,
    icon: <FaGear />
  },
  {
    id: 'maintenance',
    title: 'AC Maintenance',
    desc: 'Regular maintenance for better performance and long life.',
    img: serviceCard3,
    icon: <FaSlidersH />
  },
  {
    id: 'gas',
    title: 'AC Gas Filling',
    desc: 'Gas top-up for cooling efficiency and better performance.',
    img: serviceCard4,
    icon: <TbGauge />
  },
  {
    id: 'amc',
    title: 'AC AMC',
    desc: 'Annual Maintenance Contracts for worry-free cooling all year.',
    img: serviceCard5,
    icon: <FaShieldHalved />
  }
];

const Services = () => {
  return (
    <section className="services-section section-padding" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="services-header-center">
          <span className="section-badge">OUR SERVICES</span>
          <h2 className="services-main-title">
            Complete AC Solutions Under One Roof
          </h2>
          <div className="title-underline-accent"></div>
        </div>

        {/* 5 Service Cards Grid with pure HD AC Photos */}
        <div className="services-cards-grid">
          {servicesData.map((item) => (
            <div key={item.id} className="service-item-card">
              {/* Card Image */}
              <div className="service-card-image-wrap">
                <img src={item.img} alt={item.title} className="service-card-img" />
              </div>

              {/* Overlapping Blue Round Icon Badge */}
              <div className="service-icon-badge">
                {item.icon}
              </div>

              {/* Card Text Content */}
              <div className="service-card-body">
                <h3 className="service-card-title">{item.title}</h3>
                <p className="service-card-desc">{item.desc}</p>

                <a href="#contact" className="service-learn-more">
                  <span>Learn More</span>
                  <FaArrowRight className="learn-arrow-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
