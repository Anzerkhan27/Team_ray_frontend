import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <NavBar />
      <main style={{ padding: "20px" }}>
        <h1>Welcome to Team Ray's Website</h1>
        <p>This is the starting point for our frontend.</p>
      </main>
      <Footer />
    </div>
  );
};

export default App;
