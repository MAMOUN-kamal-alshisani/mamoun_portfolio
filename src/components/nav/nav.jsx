import React, { useState } from "react";
import "./scss/nav.css";
import Scrollspy from "react-scrollspy";
function Nav() {
  const [activate, setActivate] = useState("#");

  return (
    <nav>
      <Scrollspy
        items={["#", "about", "experience", "portfolio", "contact"]}
        currentClassName="active"
      >
        <a href="#" className={activate === '#' ? "active" :'' } onClick={()=>setActivate('#')}>
        home
      </a>
        <a href="#about">about</a>
        <a href="#experience">experience</a>
        <a href="#portfolio">portfolio</a>
        <a href="#contact">contact</a>
      </Scrollspy>
      {/* <a href="#home" className={activate === '#home' ? "active" :'' } onClick={()=>setActivate('#home')}>
        home
      </a>
      <a href="#about" className={activate === '#about' ? "active" :'' } onClick={()=>setActivate('#about')}>
        about
      </a>
      <a href="#experience" className={activate === '#experience' ? "active" :'' } onClick={()=>setActivate('#experience')}>
        experience
      </a>
      <a href="#service" className={activate === "#service" ? "active" :'' } onClick={()=>setActivate("#service")}>
        services
      </a>
      <a href="#contact" className={activate === "#contact" ? "active" :'' } onClick={()=>setActivate("#contact")}>
        contact
      </a> */}
      
    </nav>
  );
}

export default Nav;
