// DesignShowcase.jsx
import React from "react";
import "./DesignShowcase.css";
import house1 from "../../assets/house1.jpg"
import house2 from "../../assets/house2.jpg"
import house3 from "../../assets/house3.jpg"

const designItems = [
    {
        img: house1,
        alt: "Modern House 3D Model",
        title: "Modern Villa",
        description: "Elegant 3D visualization of a luxury residential project."
    },
    {
        img: house2,
        alt: "Commercial Building 3D",
        title: "Commercial Complex",
        description: "Detailed exterior rendering for modern office architecture."
    },
    {
        img: house3,
        alt: "Interior 3D Design",
        title: "Interior Visualization",
        description: "Photorealistic interior rendering for client presentation."
    }
];

const DesignShowcase = () => {
    return (
        <section className="design-showcase" id="designs">
            <div className="design-header">
                <h2 className="design-title">Our 3D Design Excellence</h2>
                <p className="design-subtitle">
                    Experience innovation and precision through our architectural 3D concepts and construction visuals.
                </p>
                <div className="design-line"></div>
            </div>

            <div className="design-gallery">
                {designItems.map((item, index) => (
                    <div className="design-item" key={index}>
                        <img src={item.img} alt={item.alt} />
                        <div className="design-overlay">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default DesignShowcase;
