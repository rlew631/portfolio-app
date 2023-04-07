import React, { useState, useEffect } from "react";
import Scrollspy from 'react-scrollspy';

const Navbar = () => {
  const [logoColor, setLogoColor] = useState("white");
  const [logoHeight, setLogoHeight] = useState(115);
  const [toggleColor, setToggleColor] = useState('black');

  const [navClass, setNavClass] = useState("navbar navbar-expand-md navbar-b navbar-trans fixed-top")
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 50) {
      setLogoColor("black");
      setLogoHeight(50);
      setToggleColor("#0078ff");
      setNavClass("navbar navbar-expand-md navbar-b navbar-reduce fixed-top ")
    } else {
      setLogoColor("white");
      setLogoHeight(115);
      setToggleColor("black");
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

  const handleNavToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({top: 0,behavior: "smooth"})
  }

  return (
    <nav className={navClass}>
      <div className="container navbar-contents">
        <a className="navbar-brand js-scroll" href="#">
          <svg
            width={175}
            height={logoHeight}
            preserveAspectRatio="xMinYMid"
            className="logo"
            fill={logoColor}
            viewBox="0 0 45.9 30.8"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g strokeWidth=".265" aria-label="RL">
                <path d="M11.7 5.7H6.3v8.1h5.6c5.5 0 5.5-8.1-.2-8.1zm18.5 25.1H21l-10.5-11H6.3v11H0V0h12.8c12.1 0 13.4 13.1 5.4 17.8z"/>
                <path d="M45.9 30.8H25.8V0h7.4v24.8h12.7z"/>
            </g>
          </svg>
        </a>
        <button
          id="nabar-toggler"
          className="navbar-toggler collapsed"
          type="button"
          onClick={handleNavToggle}
          style={{borderColor:toggleColor, borderWidth:'2px', transition:'all 500ms ease', margin:'0.5em', boxShadow:'none'}}
        >
          <span classname="toggler-span" style={{backgroundColor:toggleColor, height:"0.2em", borderRadius:'01.em'}}/>
          <span classname="toggler-span" style={{backgroundColor:toggleColor, height:"0.2em", borderRadius:'01.em'}}/>
          <span classname="toggler-span" style={{backgroundColor:toggleColor, height:"0.2em", borderRadius:'01.em'}}/>
          {/* three bars for hamburger dropdown icon */}
        </button>
        <div
          className={`navbar-collapse collapse justify-content-end ${isMenuOpen ? 'show' : ''}`}
          id="navbarDefault"
        >
          <Scrollspy
            items={["home", "about", "work", "contact"]}
            currentClassName="active"
            offset={-50}
            className="navbar-nav"
            style={{paddingTop:'1em'}}
          >
            <li className="nav-item">
              <a id="navbar-link" className="nav-link js-scroll" href="#" onClick={scrollToTop}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a id="navbar-link" className="nav-link js-scroll" href="#about" onClick={handleNavClick}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a id="navbar-link" className="nav-link js-scroll" href="#work" onClick={handleNavClick}>
                Work
              </a>
            </li>
            <li className="nav-item">
              <a id="navbar-link" className="nav-link js-scroll" href="#contact" onClick={handleNavClick}>
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
