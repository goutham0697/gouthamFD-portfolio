import React from "react";
import "./education.css";

const educationData = [
  {
    id: "masters",
    degree: "Master's in Computer Technology",
    institution: "Eastern Illinois University",
    location: "Charleston, Illinois",
    period: "May 2023",
    description:
      "Advanced coursework in software engineering, data structures, algorithms, and modern web technologies. Focus on full-stack development, cloud computing, and software architecture.",
  },
  {
    id: "bachelors",
    degree: "Bachelor's in Computer Science",
    institution: "JNTUH",
    location: "Hyderabad, India",
    period: "November 2020",
    description:
      "Comprehensive foundation in computer science fundamentals including programming, database systems, software engineering, and mathematics for computing.",
  },
];

const Education = () => {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="educationSection"
    >
      <h2 id="education-heading" className="educationTitle">
        Education
      </h2>

      <div className="educationGrid">
        {educationData.map((edu) => (
          <article
            key={edu.id}
            className="educationCard"
            tabIndex={0}
            aria-label={`${edu.degree} from ${edu.institution}`}
          >
            <div className="educationHeader">
              <h3 className="educationDegree">{edu.degree}</h3>
              <span className="educationPeriod">{edu.period}</span>
            </div>
            <div className="educationInstitution">
              <strong>{edu.institution}</strong>
              <span className="educationLocation">{edu.location}</span>
            </div>
            <p className="educationDescription">{edu.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
