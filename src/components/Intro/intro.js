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
    "I'm a Full-Stack Developer with 3 years of experience building scalable, user-focused applications using React.js, Node.js, Python, and AWS cloud services. Skilled in designing responsive UIs, developing RESTful APIs, and automating workflows with CI/CD pipelines. Experienced with Vue.js, and proficient in Agile environments using GitHub and Jira. Strong problem-solver with attention to detail, collaborative mindset, and passion for delivering high-quality, secure, and performant solutions. Eager to build scalable, reliable applications that improve user experience and business outcomes.";

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
              <span className="statNumber">3+</span>
              <span className="statLabel">Years Experience</span>
            </div>
            <div className="statCard">
              <span className="statNumber">50+</span>
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
