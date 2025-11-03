import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
import "./AboutUs.css";

// Sample data
const leadershipTeam = [
    {
        name: "John Doe",
        role: "CEO",
        image: "/images/team1.jpg",
        social: {
            linkedin: "https://linkedin.com/in/johndoe",
            twitter: "https://twitter.com/johndoe",
            facebook: "https://facebook.com/johndoe"
        }
    },
    {
        name: "Jane Smith",
        role: "Chief Architect",
        image: "/images/team2.jpg",
        social: {
            linkedin: "https://linkedin.com/in/janesmith",
            twitter: "https://twitter.com/janesmith",
            facebook: "https://facebook.com/janesmith"
        }
    },
    {
        name: "Samuel Johnson",
        role: "Project Manager",
        image: "/images/team3.jpg",
        social: {
            linkedin: "https://linkedin.com/in/samueljohnson",
            twitter: "https://twitter.com/samueljohnson",
            facebook: "https://facebook.com/samueljohnson"
        }
    },
    {
        name: "Anushiny Cedrick",
        role: "Software Engineer",
        image: "/images/team4.jpg",
        social: {
            linkedin: "https://linkedin.com/in/anushiny",
            twitter: "https://twitter.com/anushiny",
            facebook: "https://facebook.com/anushiny"
        }
    }
];

const awards = [
    "Best Residential Project 2023",
    "Excellence in Construction Safety 2022",
    "Top Architectural Design 2021"
];

const AboutUs = () => {
    return (
        <section className="about-us" id="about">
            <div className="about-header">
                <h2>About MAC Construction</h2>
                <p>Building Dreams, Crafting Realities</p>
                <div className="about-line"></div>
            </div>

            {/* Company Overview */}
            <div className="about-section company-overview">
                <h3>Company Overview</h3>
                <p>
                    MAC Construction is a leading construction firm based in Cameroon,
                    specializing in residential, commercial, and industrial projects.
                    Since 2014, we have been delivering high-quality, sustainable, and
                    innovative construction solutions with precision and professionalism.
                </p>
            </div>

            {/* Mission & Values */}
            <div className="about-section mission-values">
                <h3>Mission, Vision & Core Values</h3>
                <ul>
                    <li><strong>Mission:</strong> To deliver exceptional construction solutions that exceed client expectations.</li>
                    <li><strong>Vision:</strong> To be the most trusted and innovative construction firm in Cameroon and beyond.</li>
                    <li><strong>Core Values:</strong> Integrity, Quality, Innovation, Safety, Sustainability.</li>
                </ul>
            </div>

            {/* Leadership Team */}
            <div className="about-section leadership-team">
                <h3>Management & Leadership Team</h3>
                <div className="team-grid">
                    {leadershipTeam.map((member, idx) => (
                        <div className="team-member" key={idx}>
                            <img src={member.image} alt={member.name} />
                            <h4>{member.name}</h4>
                            <span>{member.role}</span>
                            <div className="social-icons">
                                <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                                <a href={member.social.twitter} target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                                <a href={member.social.facebook} target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Safety & Quality Policy */}
            <div className="about-section safety-quality">
                <h3>Safety & Quality Policy</h3>
                <p>
                    Safety is our top priority on all construction sites. We follow
                    international safety standards and ensure that every project is
                    executed with strict quality control and attention to detail.
                </p>
            </div>

            {/* Awards & Certifications */}
            <div className="about-section awards-certifications">
                <h3>Awards & Certifications</h3>
                <ul>
                    {awards.map((award, idx) => (
                        <li key={idx}>⭐ {award}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default AboutUs;
