import React, { useState, useRef, useEffect } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import contact from "../../assets/contact.png";
import { Link, Events, scrollSpy } from "react-scroll";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("intro");
  const [scrolled, setScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navVisible, setNavVisible] = useState(true);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  useEffect(() => {
    // Close menu on Escape or outside click
    const onKey = (e) => {
      if (e.key === "Escape") setShowMenu(false);
    };
    const onClickOutside = (e) => {
      if (
        showMenu &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !btnRef.current.contains(e.target)
      ) {
        setShowMenu(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [showMenu]);

  useEffect(() => {
    // Handle scroll for navbar visibility and background
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Set scrolled state for background blur effect
      setScrolled(currentScrollY > 50);

      // Hide/show navbar based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold - hide navbar
        setNavVisible(false);
      } else {
        // Scrolling up or at top - show navbar
        setNavVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    // react-scroll event bindings
    Events.scrollEvent.register("begin", () => {});
    Events.scrollEvent.register("end", () => {});
    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const navLinks = [
    { to: "intro", label: "Home", offset: -100 },
    { to: "skills", label: "About", offset: -100 },
    { to: "works", label: "Portfolio", offset: -100 },
    { to: "workExperience", label: "WorkExperience", offset: -100 },
    { to: "education", label: "Education", offset: -100 },
    { to: "contact", label: "Contact", offset: 0 },
  ];

  return (
    <nav
      className={`navbar ${scrolled ? "scrolled" : ""} ${
        navVisible ? "visible" : "hidden"
      }`}
      role="navigation"
      aria-label="Main"
    >
      <div className="navInner">
        <img src={logo} alt="Goutham logo" className="logo" />

        {/* Desktop Menu */}
        <div className="desktopMenu" aria-hidden={showMenu}>
          {navLinks.slice(0, 5).map((l) => (
            <Link
              key={l.to}
              to={l.to}
              spy={true}
              smooth={true}
              hashSpy={true}
              isDynamic={true}
              offset={l.offset}
              duration={500}
              onSetActive={() => setActiveLink(l.to)}
              className={`desktopMenuListItem ${
                activeLink === l.to ? "active" : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Contact Button */}
        <button
          className="desktopMenuBtn"
          ref={btnRef}
          onClick={() =>
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <img
            src={contact}
            alt=""
            className="desktopMenuImg"
            aria-hidden="true"
          />
          <span>Contact Me</span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        ref={menuRef}
        className="navMenu"
        style={{ display: showMenu ? "flex" : "none" }}
        role="menu"
        aria-hidden={!showMenu}
      >
        {navLinks.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            spy={true}
            smooth={true}
            hashSpy={true}
            isDynamic={true}
            offset={l.offset}
            duration={500}
            onSetActive={() => setActiveLink(l.to)}
            onClick={() => {
              setShowMenu(false);
              setActiveLink(l.to);
            }}
            className={`listItem ${activeLink === l.to ? "active" : ""}`}
            role="menuitem"
            tabIndex={showMenu ? 0 : -1}
          >
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
