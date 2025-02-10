import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";  // ✅ Navbar Import
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Members from "./pages/Members";
import JoinUs from "./pages/JoinUs";
import News from "./pages/News";

const App = () => {
    return (
        <Router>
            <div>
                <NavBar /> {/* ✅ Sticky Transparent Navbar */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/members" element={<Members />} />
                    <Route path="/join" element={<JoinUs />} />
                    <Route path="/news" element={<News />} /> 
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
