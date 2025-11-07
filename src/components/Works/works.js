import React, { useState, useEffect, useRef } from "react";
import "./works.css";
import portfolio2 from "../../assets/portfolio2.jpg";
import portfolio3 from "../../assets/portfolio3.jpg";
import todo1 from "../../assets/todo1.png";
import todo2 from "../../assets/todo2.png";
import todo3 from "../../assets/todo3.png";
//import portfolio4 from "../../assets/portfolio4.jpg";
//import portfolio5 from "../../assets/portfolio5.jpg";
//import portfolio6 from "../../assets/portfolio6.jpg";

const projects = [
  {
    id: 0,
    title: "Todo App – FastAPI + Web Interface",
    short:
      "A simple Todo application built with FastAPI backend and a web interface with full CRUD operations.",
    img: todo1,
    detailImg: todo2,
    images: [todo1, todo2, todo3], // Multiple images for the Todo app
    overview:
      "A comprehensive task management application built with FastAPI and modern web technologies. This full-stack solution provides complete CRUD operations for task management with a documented REST API and a lightweight, responsive web interface. The modular architecture separates backend logic, frontend GUI, and data layers for enhanced maintainability and scalability.",
    motivation:
      "Developed to demonstrate proficiency in modern Python web frameworks and full-stack development. The project showcases the ability to build scalable, well-documented APIs while providing an intuitive user interface. Emphasis on clean architecture, fast development cycles, and production-ready code practices.",
    tech: "FastAPI framework, Pydantic for data validation, Python async/await patterns, JSON-based storage system, HTML5/CSS3 responsive design, JavaScript ES6+ for frontend interactions, Uvicorn ASGI server for fast local development, RESTful API design principles, Modular component architecture.",
    impact:
      "Demonstrated ability to rapidly prototype and deploy full-stack applications. Improved development workflow with hot-reload capabilities and automatic API documentation. Modular design enables easy feature extensions and maintenance. Fast development cycle with Uvicorn enabling sub-second restart times. Architecture supports easy migration to production databases and deployment platforms.",
    features: [
      "Create, read, update, and delete todo tasks",
      "Mark tasks as complete/incomplete",
      "Web interface to view and manage tasks",
      "REST API with automatic OpenAPI documentation",
      "FastAPI backend with Uvicorn server",
      "JSON file storage for data persistence",
      "Pydantic data validation",
      "Modular backend/GUI/data layer structure",
      "Health check endpoint for monitoring",
      "Hot-reload development environment",
    ],
    technologies: [
      "FastAPI",
      "Python",
      "Pydantic",
      "Uvicorn",
      "HTML5/CSS3",
      "JavaScript",
      "JSON Storage",
      "RESTful APIs",
    ],
    apiEndpoints: [
      "GET /tasks - List all tasks",
      "POST /tasks - Create a new task",
      "PATCH /tasks/{task_id} - Update a task",
      "DELETE /tasks/{task_id} - Delete a task",
      "GET /web - Web interface",
      "GET /health - Health check",
    ],
    setup: [
      "pip install fastapi uvicorn",
      "uvicorn backend.main:app --reload",
      "Access web interface: http://localhost:8000/web",
      "API documentation: http://localhost:8000/docs",
      "API root: http://localhost:8000/",
    ],
  },

  // keep other gallery items simple
  {
    id: 1,
    title: "Full-Stack Dashboard",
    img: portfolio2,
    short: "React.js + Node.js Enterprise Dashboard",
  },
  {
    id: 2,
    title: "AWS Cloud Application",
    img: portfolio3,
    short: "Serverless Architecture with Lambda & S3",
  },
];

const Works = () => {
  const [lightbox, setLightbox] = useState({ open: false, index: 0 });
  const [projectModal, setProjectModal] = useState({
    open: false,
    index: null,
  });
  const canvasRef = useRef(null);
  const animRef = useRef(null);

  const openLightbox = (i) => setLightbox({ open: true, index: i });
  const closeLightbox = () => setLightbox({ open: false, index: 0 });

  const openProject = (i) => {
    // open detailed project modal for index i (portfolio1 = index 0)
    setProjectModal({ open: true, index: i });
  };
  const closeProject = () => setProjectModal({ open: false, index: null });

  // small particle "matter" effect for project modal (simple canvas)
  useEffect(() => {
    if (!projectModal.open) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = canvas.clientWidth);
    let h = (canvas.height = canvas.clientHeight);

    const particles = [];
    const count = Math.max(18, Math.floor(w / 60));
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 1 + Math.random() * 3,
        vx: (Math.random() - 0.5) * 0.4,
        vy: -0.2 - Math.random() * 0.6,
        alpha: 0.08 + Math.random() * 0.14,
      });
    }

    const onResize = () => {
      w = canvas.width = canvas.clientWidth;
      h = canvas.height = canvas.clientHeight;
    };
    window.addEventListener("resize", onResize);

    function frame() {
      ctx.clearRect(0, 0, w, h);
      // subtle gradient background
      const g = ctx.createLinearGradient(0, 0, w, h);
      g.addColorStop(0, "rgba(20,20,30,0.08)");
      g.addColorStop(1, "rgba(10,10,20,0.02)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      for (let p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += (Math.random() - 0.5) * 0.02;
        if (p.y < -10) p.y = h + 10;
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        p.alpha = Math.max(0.03, Math.min(0.18, p.alpha));

        ctx.beginPath();
        ctx.fillStyle = `rgba(124,58,237,${p.alpha})`; // accent purple
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(frame);
    }

    animRef.current = requestAnimationFrame(frame);
    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", onResize);
    };
  }, [projectModal.open]);

  const prev = () =>
    setLightbox((s) => ({
      ...s,
      index: (s.index + projects.length - 1) % projects.length,
    }));
  const next = () =>
    setLightbox((s) => ({ ...s, index: (s.index + 1) % projects.length }));

  return (
    <section id="works" className="worksSection">
      <div className="worksContainer">
        <h2 className="worksTitle">My Projects</h2>
        <p className="worksDesc">
          Innovative ServiceNow solutions spanning ITSM, automation, and
          platform engineering that drive digital transformation.
        </p>
        <div className="worksGrid" aria-label="Portfolio gallery">
          {projects.map((p, i) => (
            <figure
              key={p.id}
              className="worksCard"
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" ? openProject(i) : null)}
              onClick={() => {
                // open project detail for portfolio1 (index 0), otherwise open lightbox
                if (i === 0) openProject(i);
                else openLightbox(i);
              }}
            >
              <img
                src={p.img}
                alt={p.short || p.title}
                className="worksImg"
                loading="lazy"
                decoding="async"
              />
              <div className="worksCardContent">
                <h3 className="worksCardTitle">{p.title}</h3>
                <p className="worksCardShort">{p.short}</p>
              </div>
              <figcaption className="worksOverlay">
                <span>{i === 0 ? "View Details" : "View Image"}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="worksActions">
          <button className="workBtn">View All Projects</button>
        </div>
      </div>

      {/* basic lightbox for images (non-detailed items) */}
      {lightbox.open && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          tabIndex={-1}
          onKeyDown={(e) => e.key === "Escape" && closeLightbox()}
        >
          {/* backdrop to allow click-to-close */}
          <div className="lbBackdrop" onClick={closeLightbox} />

          <button
            className="lbClose"
            onClick={closeLightbox}
            aria-label="Close"
          >
            ×
          </button>

          <button className="lbNav left" onClick={prev} aria-label="Previous">
            ‹
          </button>

          <img
            src={projects[lightbox.index].img}
            alt={projects[lightbox.index].title}
            className="lbImg"
          />

          <button className="lbNav right" onClick={next} aria-label="Next">
            ›
          </button>
        </div>
      )}
      {/* project detail modal with generative "matter" effect */}
      {projectModal.open && projectModal.index !== null && (
        <div
          className="projectModal"
          role="dialog"
          aria-modal="true"
          aria-label={projects[projectModal.index].title}
        >
          <div className="pmBackdrop" onClick={closeProject} />
          <div className="pmCard" role="document">
            <button
              className="pmClose"
              onClick={closeProject}
              aria-label="Close project"
            >
              ×
            </button>

            {/* ...existing modal content... */}
            <div className="pmLeft">
              <div className="pmMedia">
                {projects[projectModal.index].images ? (
                  <div className="pmImageGallery">
                    {projects[projectModal.index].images.map((image, idx) => (
                      <img
                        key={idx}
                        src={image}
                        alt={`${
                          projects[projectModal.index].title
                        } - Screenshot ${idx + 1}`}
                        className="pmGalleryImg"
                      />
                    ))}
                  </div>
                ) : (
                  <img
                    src={
                      projects[projectModal.index].detailImg ||
                      projects[projectModal.index].img
                    }
                    alt={projects[projectModal.index].title}
                  />
                )}
                <canvas ref={canvasRef} className="pmCanvas" />
              </div>
            </div>

            <div className="pmRight">
              <h3 className="pmTitle">{projects[projectModal.index].title}</h3>
              <p className="pmShort">{projects[projectModal.index].short}</p>

              <h4>Project Overview</h4>
              <p>{projects[projectModal.index].overview}</p>

              <h4>Business Challenge</h4>
              <p>{projects[projectModal.index].motivation}</p>

              <h4>Technical Implementation</h4>
              <p>{projects[projectModal.index].tech}</p>

              {projects[projectModal.index].features && (
                <>
                  <h4>Key Features</h4>
                  <ul className="pmFeatureList">
                    {projects[projectModal.index].features.map(
                      (feature, idx) => (
                        <li key={idx}>{feature}</li>
                      )
                    )}
                  </ul>
                </>
              )}

              {projects[projectModal.index].technologies && (
                <>
                  <h4>Technologies Used</h4>
                  <div className="pmTechStack">
                    {projects[projectModal.index].technologies.map(
                      (tech, idx) => (
                        <span key={idx} className="pmTechTag">
                          {tech}
                        </span>
                      )
                    )}
                  </div>
                </>
              )}

              {projects[projectModal.index].apiEndpoints && (
                <>
                  <h4>API Endpoints</h4>
                  <ul className="pmApiList">
                    {projects[projectModal.index].apiEndpoints.map(
                      (endpoint, idx) => (
                        <li key={idx} className="pmApiItem">
                          {endpoint}
                        </li>
                      )
                    )}
                  </ul>
                </>
              )}

              {projects[projectModal.index].setup && (
                <>
                  <h4>Setup & Usage</h4>
                  <ol className="pmSetupList">
                    {projects[projectModal.index].setup.map((step, idx) => (
                      <li key={idx} className="pmSetupItem">
                        {step}
                      </li>
                    ))}
                  </ol>
                </>
              )}

              <h4>Business Impact & Results</h4>
              <p>{projects[projectModal.index].impact}</p>
              {/*
              <div className="pmActions">
                <a
                  href={projects[projectModal.index].demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pmBtn"
                >
                  Open Demo (login required)
                </a>
                <button
                  className="pmBtn"
                  onClick={() => {
                    navigator.clipboard?.writeText(window.location.href);
                    alert("Page link copied");
                  }}
                >
                  Copy Page URL
                </button> 
              </div>*/}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Works;
