// PortfolioSection.jsx
import React from 'react';
import './PortfolioSection.css';

const PortfolioSection = () => {
    const projects = [
        {
            image: '/projects/commercial-tower.jpg',
            title: 'Greenfield Commercial Tower',
            category: 'Commercial Construction',
            year: '2023'
        },
        {
            image: '/projects/residential-complex.jpg',
            title: 'Luxury Residential Complex',
            category: 'Residential Construction',
            year: '2022'
        },
        {
            image: '/projects/highway-project.jpg',
            title: 'NH-24 Highway Expansion',
            category: 'Civil Engineering',
            year: '2021'
        }
    ];

    return (
        <section className="portfolio-section">
            <div className="section-header dark-bg">
                <h2>Our Signature Projects</h2>
                <p className="section-subtitle">Where vision meets exceptional execution</p>
                <div className="header-decoration"></div>
            </div>

            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-image-container">
                            <img src={project.image} alt={project.title} className="project-image" />
                            <div className="image-overlay"></div>
                        </div>
                        <div className="project-overlay">
                            <h3>{project.title}</h3>
                            <p className="project-meta">{project.category} • {project.year}</p>
                            <a href={`/projects/${index}`} className="view-project">
                                View Case Study
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="section-cta">
                <a href="/portfolio" className="cta-secondary">
                    View Full Portfolio
                </a>
            </div>
        </section>
    );
};

export default PortfolioSection;