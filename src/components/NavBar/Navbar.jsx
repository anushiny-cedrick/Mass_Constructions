import { useState, useEffect } from 'react';
import "./Navbar.css"
import logo1 from "../../assets/logo1.png"

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container rounded">
                {/* Logo with plain <a> tag */}
                <a href="/" className="logo">
                    <img
                        src={logo1}
                        alt="MAC Construction"
                        width="70"
                        height="70"
                    />
                </a>

                {/* Mobile Menu Toggle */}
                <button
                    className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Navigation Links with <a> tags */}
                <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li>
                        <a href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                    </li>
                    <li>
                        <a href="/projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a>
                    </li>
                    <li>
                        <a href="/internships" onClick={() => setIsMobileMenuOpen(false)}>Internships</a>
                    </li>
                    <li>
                        <a href="/aboutus" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
                    </li>
                    <li>
                        <a
                            href="/contact"
                            className="cta-button"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;