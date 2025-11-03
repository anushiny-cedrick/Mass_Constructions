// ServicesSection.jsx
import React from "react";
import "./ServicesSection.css";

const ServicesSection = () => {
    const services = [
        {
            icon: "🏗️",
            title: "Building Construction",
            description:
                "From residential homes to commercial complexes, we deliver structurally sound buildings on time and within budget.",
            link: "/services/construction",
        },
        {
            icon: "🌉",
            title: "Civil Engineering",
            description:
                "Roads, bridges, and infrastructure projects executed with precision engineering and quality materials.",
            link: "/services/civil-engineering",
        },
        {
            icon: "📐",
            title: "Architectural Design",
            description:
                "Innovative designs using AutoCAD, Revit, and Lumion to visualize your project before construction begins.",
            link: "/services/architecture",
        },
    ];

    return (
        <section className="services-section" id="services">
            <div className="section-header-main">
                <h2 className="section-header">Our Core Services</h2>
                <p className="section-subtitle">
                    Comprehensive solutions from concept to completion
                </p>
                <div className="header-decoration"></div>
            </div>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <div className="service-icon">{service.icon}</div>
                        <h3>{service.title}</h3>
                        <p>{service.description}</p>
                        <a href={service.link} className="learn-more">
                            <span>Learn More</span>
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 12H19M19 12L12 5M19 12L12 19"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;
