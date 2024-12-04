// App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

import './components/CSS/Navbar.css';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

// Animation 
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
});

function App() { 
    // Section refs for scrolling
    const sectionRefs = {
        home: useRef(null),
        skills: useRef(null),
        project: useRef(null),
        contact: useRef(null),
    };

    const location = useLocation();

    // Scroll to section based on hash in URL
    useEffect(() => {
        const hash = location.hash.replace("#", ""); // Get the hash without '#'
        if (hash && sectionRefs[hash] && sectionRefs[hash].current) {
            sectionRefs[hash].current.scrollIntoView({ behavior: "smooth" });
        }
    }, [location]);


    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky-top" >
                <Link to="#home" className="navbar-brand text-light" style={{ cursor: "pointer" }}>
                    DevBharat
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link to="#home" className="nav-item nav-link text-light" style={{ cursor: "pointer" }}>
                            Home
                        </Link>
                        <Link to="#skills" className="nav-item nav-link text-light" style={{ cursor: "pointer" }}>
                            Skills
                        </Link>
                        <Link to="#project" className="nav-item nav-link text-light" style={{ cursor: "pointer" }}>
                            Projects
                        </Link>
                        <Link to="#contact" className="nav-item nav-link text-light" style={{ cursor: "pointer" }}>
                            Contact
                        </Link>
                        <a className="resume navbar-brand text-light" target='blank' href="./Bharat_Vasnani_Resume.pdf">
                    Download Resume
                </a>
                    </div>
                </div>
            </nav>

            {/* Sections */}
            <div ref={sectionRefs.home}>
                <Home />
            </div>
            <div ref={sectionRefs.skills}>
                <Skills />
            </div>
            <div ref={sectionRefs.project}>
                <Projects />
            </div>
            <div ref={sectionRefs.contact} >
                <Contact />
            </div>
        </div>
    );
}

const WrappedApp = () => (
    <Router>
        <Routes>
            <Route path="/" element={<App />} />
        </Routes>
    </Router>
);

export default WrappedApp;
// Open source contrubtion