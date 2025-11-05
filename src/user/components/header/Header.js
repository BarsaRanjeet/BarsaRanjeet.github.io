import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "@assets/scss/components/_header.scss";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-brand">
          <img alt="logo" src="/images/logo.svg" width={200} height={40} />
        </Link>
        <button
          className={`mobile-menu-toggle ${isMobileMenuOpen ? "active" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <Link
            className="nav-link"
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <a
            className="nav-link"
            href="#features"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Features
          </a>
          <a
            className="nav-link"
            href="#about"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Me
          </a>
          <a
            className="nav-link"
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact Me
          </a>
          <Link
            className="nav-link nav-link-login"
            to="/login"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
