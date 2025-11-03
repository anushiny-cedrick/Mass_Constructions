// TechnologySection.jsx
import React from 'react';
import './TechnologySection.css';
import AutoCAD from "../../assets/Autocad-Logo.png"
import Revit from "../../assets/revit-logo.png"
import chief from "../../assets/chief.png"
import Lumion from "../../assets/lumion.png"
import ArchiCAD from "../../assets/ArchiCAD.png"

const TechnologySection = () => {
    const tools = [
        { name: 'AutoCAD', logo: AutoCAD },
        { name: 'Revit', logo: Revit },
        { name: 'Lumion', logo: Lumion },
        { name: 'Chief Architect', logo: chief },
        { name: 'ArchiCAD', logo: ArchiCAD }
    ];

    return (
        <section className="technology-section">
            <div className="section-header">
                <h2>Precision Through Technology</h2>
                <p className="section-subtitle">We leverage cutting-edge tools for flawless execution</p>
                <div className="header-decoration"></div>
            </div>

            <div className="tools-carousel">
                {tools.map((tool, index) => (
                    <div className="tool-item" key={index}>
                        <div className="tool-logo-container">
                            <img src={tool.logo} alt={tool.name} className="tool-logo" />
                        </div>
                        <p className="tool-name">{tool.name}</p>
                    </div>
                ))}
            </div>

            <div className="tech-description">
                <p>
                    Our team combines these advanced tools with years of hands-on
                    experience to deliver projects with millimeter precision and
                    stunning visualizations before construction even begins.
                </p>
            </div>
        </section>
    );
};

export default TechnologySection;