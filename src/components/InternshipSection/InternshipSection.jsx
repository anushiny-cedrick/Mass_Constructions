import { useState } from 'react';
import './InternshipSection.css';
import ApplyForm from '../ApplyForm/ApplyForm';

const InternshipSection = () => {
    const [activeTab, setActiveTab] = useState('architecture');
    const [showForm, setShowForm] = useState(false);
    const [selectedInternship, setSelectedInternship] = useState(null);

    const internships = {
        architecture: [
            {
                id: 1,
                title: "Architectural Design Intern",
                duration: "3-6 months",
                location: "New York, NY",
                description: "Work alongside our senior architects on real projects using Revit, AutoCAD, and Lumion. Participate in client meetings and site visits.",
                skills: ["AutoCAD", "3D Modeling", "Design Thinking"],
                department: "Architecture"
            },
            {
                id: 2,
                title: "Sustainable Design Intern",
                duration: "6 months",
                location: "Remote Possible",
                description: "Research and implement sustainable building practices. Assist in creating eco-friendly design solutions for upcoming projects.",
                skills: ["Green Building", "Energy Modeling", "LEED Principles"],
                department: "Architecture"
            }
        ],
        engineering: [
            {
                id: 3,
                title: "Civil Engineering Intern",
                duration: "4-8 months",
                location: "Chicago, IL",
                description: "Gain hands-on experience in infrastructure projects. Assist with site surveys, material testing, and project documentation.",
                skills: ["CAD", "Structural Analysis", "Project Management"],
                department: "Engineering"
            }
        ],
        construction: [
            {
                id: 4,
                title: "Construction Management Intern",
                duration: "3-12 months",
                location: "Multiple Sites",
                description: "Shadow project managers on active construction sites. Learn scheduling, budgeting, and quality control processes.",
                skills: ["Blueprint Reading", "Safety Protocols", "Team Coordination"],
                department: "Construction"
            }
        ]
    };

    const handleApplyClick = (internship) => {
        setSelectedInternship(internship);
        setShowForm(true);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
    };

    const handleCloseForm = () => {
        setShowForm(false);
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    };

    return (
        <section className="internship-section">
            <div className="section-header">
                <span className="section-label">Career Growth</span>
                <h2>Build Your Future With Us</h2>
                <p className="section-subtitle">Hands-on internships that shape tomorrow's construction leaders</p>
            </div>

            <div className="internship-container">
                <div className="tab-buttons">
                    <button
                        className={`tab-button ${activeTab === 'architecture' ? 'active' : ''}`}
                        onClick={() => setActiveTab('architecture')}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 21H21M5 21V7L12 3L19 7V21M9 21V13H15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Architecture
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'engineering' ? 'active' : ''}`}
                        onClick={() => setActiveTab('engineering')}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 6L12 12L22 6M2 18L12 12L22 18M12 12V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Engineering
                    </button>
                    <button
                        className={`tab-button ${activeTab === 'construction' ? 'active' : ''}`}
                        onClick={() => setActiveTab('construction')}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7 22H17M7 18H17M12 2V6M9.5 6H14.5M20 14V8C20 6.89543 19.1046 6 18 6H6C4.89543 6 4 6.89543 4 8V14C4 15.1046 4.89543 16 6 16H18C19.1046 16 20 15.1046 20 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Construction
                    </button>
                </div>

                <div className="internship-cards">
                    {internships[activeTab].map((internship, index) => (
                        <div className="internship-card" key={internship.id}>
                            <div className="card-header">
                                <h3>{internship.title}</h3>
                                <div className="meta-info">
                                    <span className="duration">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 8V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {internship.duration}
                                    </span>
                                    <span className="location">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M12 2C8.13401 2 5 5.13401 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13401 15.866 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        {internship.location}
                                    </span>
                                </div>
                            </div>

                            <p className="description">{internship.description}</p>

                            <div className="skills-section">
                                <h4>You'll Learn:</h4>
                                <div className="skill-tags">
                                    {internship.skills.map((skill, i) => (
                                        <span className="skill-tag" key={i}>{skill}</span>
                                    ))}
                                </div>
                            </div>

                            <button
                                className="apply-button"
                                onClick={() => handleApplyClick(internship)}
                            >
                                Apply Now
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="benefits-section">
                <h3>Internship Benefits</h3>
                <div className="benefits-grid">
                    <div className="benefit-card">
                        <div className="benefit-icon">💼</div>
                        <h4>Real Project Experience</h4>
                        <p>Work on actual MAC Construction projects, not just simulations</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">👨‍🏫</div>
                        <h4>Mentorship</h4>
                        <p>1-on-1 guidance from industry experts</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">🏗️</div>
                        <h4>Site Visits</h4>
                        <p>Regular visits to active construction sites</p>
                    </div>
                    <div className="benefit-card">
                        <div className="benefit-icon">💸</div>
                        <h4>Competitive Stipend</h4>
                        <p>Paid internship opportunities</p>
                    </div>
                </div>
            </div>

            {/* Apply Form Modal */}
            {showForm && (
                <div className="modal-overlay">
                    <ApplyForm
                        internship={selectedInternship}
                        onClose={handleCloseForm}
                    />
                </div>
            )}
        </section>
    );
};

export default InternshipSection;