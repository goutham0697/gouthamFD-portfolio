import React from "react";
import "./skills.css";
import html5img from "../../assets/html5img.png";
import javascript from "../../assets/javascript.png";
import react from "../../assets/react.svg";
import nodejs from "../../assets/nodejs.svg";
import python from "../../assets/python.svg";
import aws from "../../assets/aws.svg";
import database from "../../assets/database.svg";
import devops from "../../assets/devops.svg";

const skills = [
  {
    name: "React.js",
    img: react,
  },
  {
    name: "Node.js",
    img: nodejs,
  },
  {
    name: "Python",
    img: python,
  },
  {
    name: "AWS Cloud",
    img: aws,
  },
  {
    name: "JavaScript",
    img: javascript,
  },
  {
    name: "HTML5",
    img: html5img,
  },
  {
    name: "PostgreSQL",
    img: database,
  },
  {
    name: "Docker",
    img: devops,
  },
];

const Skills = () => {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <h2 id="skills-heading" className="skillTitle">
        What I do
      </h2>

      <p className="skillDesc">
        Full-Stack Developer with 3 years of experience building scalable,
        user-focused applications using React.js, Node.js, Python, and AWS cloud
        services. Skilled in designing responsive UIs, developing RESTful APIs,
        and automating workflows with CI/CD pipelines. Experienced with modern
        JavaScript frameworks, database design, and cloud architecture.
        Passionate about delivering high-quality, secure, and performant
        solutions that improve user experience and business outcomes.
      </p>

      <div className="skillsContainer">
        <div className="skillsScroll">
          {/* Duplicate skills array multiple times for smooth infinite scroll */}
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div key={`${skill.name}-${index}`} className="skillItem">
              <img src={skill.img} alt={skill.name} className="skillIcon" />
              <span className="skillName">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
