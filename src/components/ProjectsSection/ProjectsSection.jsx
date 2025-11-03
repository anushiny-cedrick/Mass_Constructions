import React, { useState } from "react";
import "./ProjectsSection.css";
import house1 from "../../assets/house1.jpg"

const projects = [
    {
        title: "Modern Luxury Villa (3D Design to Reality)",
        type: "Residential - 2 Storey",
        location: "Douala, Cameroon",
        completionDate: "2025",
        description:
            "A luxurious family residence with 3D visualizations brought to life — elegant design, functional layout, and sustainable materials.",
        image: "/images/projects/villa3d.jpg", // 3D render
        progressImage: "/images/projects/villa-site.jpg", // live photo
        progressStage: 70,
        stageDescription: "First-floor roofing completed — interior finishing ongoing.",
        timeline: [
            { stage: "3D Design & Architectural Plan", status: "Completed", image: house1 },
            { stage: "Foundation", status: "Completed", image: "/images/stages/villa-foundation.jpg" },
            { stage: "Ground Floor Construction", status: "Completed", image: "/images/stages/villa-ground.jpg" },
            { stage: "First Floor Construction", status: "Completed", image: "/images/stages/villa-firstfloor.jpg" },
            { stage: "second Floor Construction", status: "Completed", image: "/images/stages/villa-firstfloor.jpg" },
            { stage: "Thirs Floor Construction", status: "In progress", image: "/images/stages/villa-firstfloor.jpg" },
            { stage: "Roofing", status: "In Progress", image: "/images/stages/villa-roofing.jpg" },
            { stage: "Finishing & Painting", status: "Pending", image: "/images/stages/villa-finishing.jpg" },
        ],
    },
    {
        title: "Commercial Complex Plaza",
        type: "Commercial - Multi-floor",
        location: "Yaoundé, Cameroon",
        completionDate: "2024",
        description:
            "A commercial high-rise integrating retail and office spaces with efficient design and modern facilities.",
        image: "/images/projects/plaza3d.jpg",
        progressImage: "/images/projects/plaza-site.jpg",
        progressStage: 95,
        stageDescription: "Exterior glazing installed — final touches ongoing.",
        timeline: [
            { stage: "3D Concept Rendering", status: "Completed", image: "/images/stages/plaza-3d.jpg" },
            { stage: "Foundation & Basement", status: "Completed", image: "/images/stages/plaza-foundation.jpg" },
            { stage: "Structural Framing", status: "Completed", image: "/images/stages/plaza-structure.jpg" },
            { stage: "Roof Slab & Façade", status: "Completed", image: "/images/stages/plaza-roof.jpg" },
            { stage: "Interior Works", status: "In Progress", image: "/images/stages/plaza-interior.jpg" },
        ],
    },
    {
        title: "Residential Duplex Bungalow",
        type: "Residential - Single Storey",
        location: "Buea, Cameroon",
        completionDate: "2023",
        description:
            "A compact yet stylish home that demonstrates our commitment to detail and client satisfaction.",
        image: "/images/projects/bungalow3d.jpg",
        progressImage: "/images/projects/bungalow-site.jpg",
        progressStage: 100,
        stageDescription: "Project completed and handed over.",
        timeline: [
            { stage: "3D Design Concept", status: "Completed", image: "/images/stages/bungalow-3d.jpg" },
            { stage: "Foundation", status: "Completed", image: "/images/stages/bungalow-foundation.jpg" },
            { stage: "Walls Construction", status: "Completed", image: "/images/stages/bungalow-walls.jpg" },
            { stage: "Roofing & Painting", status: "Completed", image: "/images/stages/bungalow-roof.jpg" },
            { stage: "Finishing & Landscaping", status: "Completed", image: "/images/stages/bungalow-finish.jpg" },
        ],
    },
];

const ProjectsSection = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => setSelectedProject(project);
    const closeModal = () => setSelectedProject(null);

    return (
        <section className="projects-section" id="projects">
            <div className="projects-header">
                <h2>Ongoing & Completed Projects</h2>
                <p>Explore our journey from 3D design to real-world construction excellence</p>
                <div className="header-line"></div>
            </div>

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="image-container">
                            <img src={project.image} alt={project.title} className="main-image" />
                            <img src={project.progressImage} alt={`${project.title} progress`} className="progress-image" />
                        </div>

                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p className="project-type">
                                {project.type} | {project.location}
                            </p>
                            <p className="project-description">{project.description}</p>

                            <div className="progress-bar">
                                <div className="progress-fill" style={{ width: `${project.progressStage}%` }}></div>
                            </div>
                            <p className="progress-text">
                                {project.stageDescription} ({project.progressStage}%)
                            </p>

                            <button className="view-btn" onClick={() => openModal(project)}>
                                View Project
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="close-btn" onClick={closeModal}>
                            &times;
                        </button>

                        <h3>{selectedProject.title}</h3>
                        <p className="modal-subtitle">{selectedProject.location}</p>

                        <div className="timeline">
                            {selectedProject.timeline.map((step, i) => (
                                <div key={i} className={`timeline-step ${step.status.toLowerCase()}`}>
                                    {step.image && <img src={step.image} alt={step.stage} />}
                                    <h4>{step.stage}</h4>
                                    <span className="status">{step.status}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ProjectsSection;
