import React, { useState, useEffect } from "react";
import Scrollspy from 'react-scrollspy';

// still need to fix behavior for dropdown when viewing on smaller screens
const Navbar = () => {
  const [logo, setLogo] = useState("img/rl_white.png");
  const [navClass, setNavClass] = useState("navbar navbar-expand-md navbar-b navbar-trans fixed-top")

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setLogo("img/rl.png");
      setNavClass("navbar navbar-expand-md navbar-b navbar-reduce fixed-top")
    } else {
      setLogo("img/rl_white.png");
      setNavClass("navbar navbar-expand-md navbar-b navbar-trans fixed-top")
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleNavClick = (e) => {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    window.scrollTo({
      top: offsetTop - 50,
      behavior: "smooth"
    });
  };

  return (
    <nav className={navClass}>
      <div className="container navbar-contents">
        <a className="navbar-brand js-scroll" href="#">
          <img
            src={logo}
            alt="logo"
            style={{ maxWidth: "100px" }}
          />
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          // onClick={handleNavToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className={`navbar-collapse collapse justify-content-end`}
          id="navbarDefault"
        >
          <Scrollspy
            items={["home", "about", "work", "contact"]}
            currentClassName="active"
            offset={-50}
            className="navbar-nav"
          >
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#" onClick={window.scrollTo({top: 0,behavior: "smooth"})}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#about" onClick={handleNavClick}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#work" onClick={handleNavClick}>
                Work
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#contact" onClick={handleNavClick}>
                Contact
              </a>
            </li>
          </Scrollspy>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
