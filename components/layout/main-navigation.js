import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

function MainNavigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const isActive = (pathname) => {
    return router.pathname === pathname;
  };

  return (
    <div className="border-bottom main-nav-shell">
      <nav className="container navbar navbar-expand-lg navbar-dark main-nav-container">
        <div className="navbar-brand">
          <Link href={"/"} className="text-decoration-none">
            <div className="d-flex align-items-center">
              <div className="logo-icon me-3">
                <div className="eye-logo">
                  <div className="eye-shape">
                    <div className="iris"></div>
                    <div className="pupil"></div>
                  </div>
                </div>
              </div>
              <div className="logo-text">
                <h4 className="mb-0 text-white fw-bold">EYN Solutions</h4>
                <small className="text-light">Technology Consulting</small>
              </div>
            </div>
          </Link>
        </div>
        
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-controls="navbarNav" 
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
          <div className="navbar-nav ms-auto">
            <Link 
              href="/" 
              className={`nav-link nav-link-pill ${isActive('/') ? "nav-link-pill-active" : "text-light"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className={`nav-link nav-link-pill ${isActive('/about') ? "nav-link-pill-active" : "text-light"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/services" 
              className={`nav-link nav-link-pill ${isActive('/services') ? "nav-link-pill-active" : "text-light"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/contact" 
              className={`nav-link nav-link-pill ${isActive('/contact') ? "nav-link-pill-active" : "text-light"}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default MainNavigation;
