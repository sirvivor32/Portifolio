import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"; // Ensure the path is correct
import About from "./components/About/About";
import Services from "./components/Services/Services";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <About />
            <Services />
        </div>
    );
}

export default App;

