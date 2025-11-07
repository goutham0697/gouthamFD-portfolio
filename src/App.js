import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/navbar";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import WorkExperience from "./components/WorkExperience/workExperience";
import Works from "./components/Works/works";
import Education from "./components/Education/education";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="app-content">
        <Intro />
        <Skills />
        <Works />
        <WorkExperience />
        <Education />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
