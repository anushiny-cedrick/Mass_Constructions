import React, { useState, useEffect } from "react";
import "./TestimonialSection.css";

const testimonials = [
    {
        name: "John Doe",
        role: "CEO, BuildCorp",
        image: "/images/client1.jpg",
        rating: 5,
        feedback:
            "MAC Construction exceeded our expectations. Their attention to detail and professionalism made our project seamless.",
    },
    {
        name: "Jane Smith",
        role: "Architect, DesignHub",
        image: "/images/client2.jpg",
        rating: 4,
        feedback:
            "Working with MAC Construction was a pleasure. Their team brought our vision to life with precision and creativity.",
    },
    {
        name: "Samuel Johnson",
        role: "Property Developer",
        image: "/images/client3.jpg",
        rating: 5,
        feedback:
            "Their level of expertise and commitment to quality was exceptional. Highly recommended for any large-scale construction project.",
    },
    {
        name: "Emily Brown",
        role: "Interior Designer",
        image: "/images/client4.jpg",
        rating: 4,
        feedback:
            "Professional, responsive, and highly skilled. The 3D designs were outstanding and accurate to every detail.",
    },
];

const TestimonialSection = () => {
    const [current, setCurrent] = useState(0);
    const length = testimonials.length;

    // Auto-slide every 6 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % length);
        }, 6000);
        return () => clearInterval(timer);
    }, [length]);

    const nextSlide = () => setCurrent((current + 1) % length);
    const prevSlide = () => setCurrent((current - 1 + length) % length);

    const renderStars = (count) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={`star ${i < count ? "filled" : ""}`}>
                ★
            </span>
        ));
    };

    return (
        <section className="testimonial-section" id="testimonials">
            <div className="testimonial-header">
                <h2>What Our Clients Say</h2>
                <p>Trusted by clients for quality, precision, and reliability</p>
                <div className="testimonial-line"></div>
            </div>

            <div className="testimonial-carousel">
                {testimonials.map((item, index) => (
                    <div
                        key={index}
                        className={`testimonial-card ${index === current ? "active" : "inactive"}`}
                    >
                        <div className="client-image">
                            <img src={item.image} alt={item.name} />
                        </div>
                        <p className="feedback">“{item.feedback}”</p>
                        <div className="rating">{renderStars(item.rating)}</div>
                        <h3>{item.name}</h3>
                        <span className="role">{item.role}</span>
                    </div>
                ))}

                {/* Arrows */}
                <button className="prev-btn" onClick={prevSlide}>&#10094;</button>
                <button className="next-btn" onClick={nextSlide}>&#10095;</button>
            </div>

            {/* Dots */}
            <div className="carousel-dots">
                {testimonials.map((_, idx) => (
                    <span
                        key={idx}
                        className={`dot ${idx === current ? "active-dot" : ""}`}
                        onClick={() => setCurrent(idx)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default TestimonialSection;
