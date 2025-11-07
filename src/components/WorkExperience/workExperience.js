import "./workExperience.css";
import amex from "../../assets/amex.jpg";
import goldman from "../../assets/goldman.jpg";

const experiences = [
  {
    id: "amex",
    company: "American Express",
    title: "Full-Stack Developer",
    period: "August 2023 — Present",
    img: amex,
    desc: "Designed and developed responsive dashboards and user interfaces using React.js, improving workflow visibility and reducing manual reporting time by 30%. Built and maintained scalable Node.js REST APIs, optimizing backend performance and improving response time by 25% for high-traffic internal services. Integrated AWS services including Lambda, S3, API Gateway, enabling secure, event-driven processing for customer-facing applications. Automated recurring tasks using Python scripts, reducing operational overhead and improving data accuracy across teams.",
  },
  {
    id: "goldman",
    company: "Goldman Sachs",
    title: "Software Engineer",
    period: "January 2021 — December 2021",
    img: goldman,
    desc: "Developed full-stack internal tools using React.js and Node.js, improving team productivity and accelerating data access workflows by 20%. Created Python-based automation utilities that streamlined data validation and reduced manual processing time for analysts. Implemented secure authentication flows (JWT/OAuth) and optimized API integrations to support high-security internal systems. Deployed cloud-native components on AWS, leveraging EC2, S3, and IAM to strengthen application reliability and security.",
  },
];

const WorkExperience = () => {
  return (
    <section
      id="workExperience"
      aria-labelledby="workExperience-heading"
      className="weSection"
    >
      <h2 id="workExperience-heading" className="weTitle">
        Work Experience
      </h2>

      <div className="weGrid">
        {experiences.map((e) => (
          <article
            key={e.id}
            className="weCard"
            tabIndex={0}
            aria-label={`${e.company} — ${e.title}`}
          >
            <img src={e.img} alt={e.company} className="weLogo" />
            <div className="weBody">
              <h3 className="weCompany">{e.company}</h3>
              <div className="weMeta">
                <span className="weTitleText">{e.title}</span>
                <span className="wePeriod">{e.period}</span>
              </div>
              <p className="weDesc">{e.desc}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;
