// HeroSection.jsx
import { useState, useEffect, useRef } from "react";
import "./HeroSection.css";

const HeroSection = () => {
    const [displayText, setDisplayText] = useState("");
    const [counter, setCounter] = useState(0);
    const tagline = "Building Dreams, Crafting Realities";
    const statsRef = useRef(null);

    // Typewriter effect
    useEffect(() => {
        const typeWriter = () => {
            if (counter < tagline.length) {
                setDisplayText((prev) => prev + tagline.charAt(counter));
                setCounter((prev) => prev + 1);
            }
        };
        const timer = setTimeout(typeWriter, 100);
        return () => clearTimeout(timer);
    }, [counter, tagline]);

    // Animated stats
    useEffect(() => {
        const animateCounters = () => {
            const counters = statsRef.current?.querySelectorAll(".stat-number");
            if (!counters) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            counters.forEach((counterEl) => {
                                const target = +counterEl.getAttribute("data-count");
                                const duration = 2000;
                                const startTime = performance.now();

                                const updateCount = (currentTime) => {
                                    const elapsedTime = currentTime - startTime;
                                    const progress = Math.min(elapsedTime / duration, 1);
                                    const value = Math.floor(progress * target);
                                    counterEl.textContent = value.toLocaleString();
                                    if (progress < 1) requestAnimationFrame(updateCount);
                                };

                                requestAnimationFrame(updateCount);
                            });
                            observer.disconnect();
                        }
                    });
                },
                { threshold: 0.5 }
            );

            observer.observe(statsRef.current);
        };

        animateCounters();
    }, []);

    // Generate particles
    const particles = Array.from({ length: 20 }).map((_, i) => (
        <div
            key={i}
            className="particle"
            style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                animationDelay: `${Math.random() * 5}s`,
                opacity: Math.random() * 0.5 + 0.3,
            }}
        />
    ));

    return (
        <section className="hero-section">
            <div className="hero-overlay"></div>
            <div className="particles">{particles}</div>

            <div className="hero-content">
                <h1 className="hero-title">
                    <span className="highlight">MAC</span> Construction <br />
                    <span className="hero-title1">
                        Mass Architecture and Construction Ltd.
                    </span>
                </h1>

                <p className="hero-tagline">{displayText}</p>
                <p className="hero-description">
                    Premium construction services with architectural excellence and
                    engineering precision since 2014
                </p>

                <div className="hero-buttons">
                    <a href="/projects" className="cta-primary">
                        View Our Work
                    </a>
                    <a href="/contact" className="cta-secondary">
                        Get Free Consultation
                    </a>
                </div>

                <div className="hero-stats" ref={statsRef}>
                    <div className="stat-item">
                        <span className="stat-number" data-count="250">
                            0
                        </span>
                        <span className="stat-label">Projects Completed</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number" data-count="15">
                            0
                        </span>
                        <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number" data-count="50">
                            0
                        </span>
                        <span className="stat-label">Professional Team</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
