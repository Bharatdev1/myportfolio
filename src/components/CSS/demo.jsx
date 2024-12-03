// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <Link to="/about#section2">Go to Section 2 in About</Link>
        </div>
    );
};

const About = () => {
    const sectionRefs = {
        section1: React.createRef(),
        section2: React.createRef(),
        section3: React.createRef(),
    };

    React.useEffect(() => {
        const hash = window.location.hash;
        if (hash && sectionRefs[hash.replace("#", "")]) {
            sectionRefs[hash.replace("#", "")].current.scrollIntoView({ behavior: "smooth" });
        }
    }, []);

    return (
        <div>
            <h1>About Page</h1>
            <nav>
                <Link to="#section1">Section 1</Link>
                {" | "}
                <Link to="#section2">Section 2</Link>
                {" | "}
                <Link to="#section3">Section 3</Link>
            </nav>
            <div ref={sectionRefs.section1} style={{ height: "100vh", background: "lightblue" }}>
                <h2>Section 1</h2>
            </div>
            <div ref={sectionRefs.section2} style={{ height: "100vh", background: "lightcoral" }}>
                <h2>Section 2</h2>
            </div>
            <div ref={sectionRefs.section3} style={{ height: "100vh", background: "lightgreen" }}>
                <h2>Section 3</h2>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;