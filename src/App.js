import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";  // ✅ Navbar Import
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Members from "./pages/Members";
import JoinUs from "./pages/JoinUs";

const App = () => {
    return (
        <Router>
            <div>
                <NavBar /> {/* ✅ Sticky Transparent Navbar */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/members" element={<Members />} />
                    <Route path="/join" element={<JoinUs />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
