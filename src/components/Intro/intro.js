import React, { useState, useEffect } from "react";
import "./intro.css";
import bg from "../../assets/bg.png";
import hire from "../../assets/hire.png";
import { Link } from "react-scroll";

const Intro = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const fullText =
    "I'm a Full-Stack Developer with 4 years of experience building scalable, user-focused applications using React.js, Node.js, Python, and AWS cloud services. I've delivered numerous projects and enhancements across diverse domains, specializing in responsive UI design, RESTful API development, and automated CI/CD workflows. Proficient in Vue.js, FastAPI, and modern development tools within Agile environments using GitHub and Jira. Strong problem-solver with meticulous attention to detail, collaborative leadership, and passion for delivering high-quality, secure, and performant solutions that drive digital transformation and exceptional user experiences.";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 30); // Typing speed
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <section
      id="intro"
      role="banner"
      aria-label="Introduction"
      className="intro-loading"
    >
      <div className="introContainer">
        <div className="introContent">
          <span className="hello">Hello, I'm a Developer</span>

          <h1 className="introText">
            I'm <span className="introName">Goutham</span>
            <span className="introRole">Full-Stack Developer</span>
          </h1>

          <p className="introPara typing-text">
            {displayedText}
            {showCursor && <span className="typing-cursor">|</span>}
          </p>

          <Link
            to="contact"
            smooth={true}
            offset={-80}
            duration={500}
            className="btn"
            aria-label="Hire me - Contact section"
          >
            <img src={hire} alt="" className="hire" />
            Let's Work Together
          </Link>

          <div className="introStats">
            <div className="statCard">
              <span className="statNumber">4</span>
              <span className="statLabel">Years Experience</span>
            </div>
            <div className="statCard">
              <span className="statNumber">20+</span>
              <span className="statLabel">
                Projects & Enhancements Delivered
              </span>
            </div>
          </div>
        </div>

        <div className="introImage">
          <img src={bg} alt="Professional developer workspace" className="bg" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
