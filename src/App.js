import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Members  from "./pages/Members";

const App = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<div><h1>Welcome to Team Ray's Website</h1></div>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/members" element={<Members />} /> {/* ✅ Add Members Page */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
