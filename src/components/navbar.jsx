import React, { useState } from "react";
import Scrollspy from 'react-scrollspy';

import "bootstrap/dist/css/bootstrap.css";
// import logo1 from '../public/img/rl_white.png';
// import logo2 from '../public/img/rl.png';

const Navbar = () => {
  const [logo, setLogo] = useState("img/rl_white.png");
  const [showNav, setShowNav] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setLogo("img/rl.png");
    } else {
      setLogo("img/rl_white.png");
    }
  };

  const handleNavToggle = () => {
    setShowNav(!showNav);
  };

  const handleNavClick = (e) => {
    e.preventDefault();
    const href = e.target.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;
    window.scrollTo({
      top: offsetTop - 50,
      behavior: "smooth"
    });
    setShowNav(false);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-b navbar-trans fixed-top">
      <div className="container navbar-contents">
        <a className="navbar-brand js-scroll" href="#page-top">
          <img
            src={logo}
            alt="logo"
            style={{ maxWidth: "100px" }}
          />
        </a>
        <button
          className="navbar-toggler collapsed"
          type="button"
          onClick={handleNavToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          className={`navbar-collapse collapse justify-content-end${showNav ? " show" : ""}`}
          id="navbarDefault"
        >
          <Scrollspy
            items={["home", "about", "work", "contact"]}
            currentClassName="active"
            offset={-50}
            className="navbar-nav"
          >
            <li className="nav-item">
              <a className="nav-link js-scroll" href="#home" onClick={handleNavClick}>
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
