// import React from 'react';
import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Footer from "./components/footer/footer";
// import Service from './pages/service/service';
import Portfolio from "./pages/portfolio/portfolio";
import Experience from "./pages/experience/experience";
import Contact from "./pages/contact/contact";
import About from "./pages/about/about";
import "./App.css";
import React, { useEffect, useRef, useState } from "react";

function App() {
  const [showNavbar, setShowNavbar] = useState(true);

  const [rectHeader, setRectHeader] = useState(null);
  const [rectAbout, setRectAbout] = useState(null);
  const [rectExperience, setRectExperience] = useState(null);
  const [rectPortfolio, setRectPortfolio] = useState(null);
  const [rectContact, setRectContact] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const headerElement = document.querySelector(".slide-in-header");
      const aboutElement = document.querySelector(".slide-in-about");
      const experienceElement = document.querySelector(".slide-in-experience");
      const portfolioElement = document.querySelector(".slide-in-portfolio");
      const contactElement = document.querySelector(".slide-in-contact");

      setRectHeader(headerElement.getBoundingClientRect());
      setRectAbout(aboutElement.getBoundingClientRect());
      setRectExperience(experienceElement.getBoundingClientRect());
      setRectPortfolio(portfolioElement.getBoundingClientRect());
      setRectContact(contactElement.getBoundingClientRect());
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [
    rectHeader,
    setRectHeader,
    rectAbout,
    setRectAbout,
    rectExperience,
    setRectExperience,
    rectPortfolio,
    setRectPortfolio,
    rectContact,
    setRectContact,
  ]);

  useEffect(() => {
    const headerElement = document.querySelector(".slide-in-header");
    const aboutElement = document.querySelector(".slide-in-about");
    const experienceElement = document.querySelector(".slide-in-experience");
    const portfolioElement = document.querySelector(".slide-in-portfolio");
    const contactElement = document.querySelector(".slide-in-contact");

    if (rectAbout) {
      const isAboutInViewport =
        rectAbout.top <= window.innerHeight && rectAbout.bottom >= 0;
      if (isAboutInViewport) {
        aboutElement.classList.add("slide_about_active");
      } else {
        aboutElement.classList.remove("slide_about_active");
      }
    }
    if (rectExperience) {
      const isExperienceInViewport =
        rectExperience.top <= window.innerHeight && rectExperience.bottom >= 0;
      if (isExperienceInViewport) {
        experienceElement.classList.add("slide_experience_active");
      } else {
        experienceElement.classList.remove("slide_experience_active");
      }
    }
    if (rectPortfolio) {
      const isPortfolioInViewport =
        rectPortfolio.top <= window.innerHeight && rectPortfolio.bottom >= 0;
      if (isPortfolioInViewport) {
        portfolioElement.classList.add("slide_portfolio_active");
      } else {
        portfolioElement.classList.remove("slide_portfolio_active");
      }
    }
    if (rectContact) {
      const isContactInViewport =
        rectContact.top <= window.innerHeight && rectContact.bottom >= 0;
      if (isContactInViewport) {
        contactElement.classList.add("slide_contact_active");
      } else {
        contactElement.classList.remove("slide_contact_active");
      }
    }

    if (rectHeader) {
      const isHeaderInViewport =
        rectHeader.top <= window.outerHeight && rectHeader.bottom >= 0;
      if (isHeaderInViewport) {
        headerElement.classList.add("slide_header_active");
      } else {
        headerElement.classList.remove("slide_header_active");
      }
    }
  }, [rectHeader, rectAbout, rectExperience, rectPortfolio, rectContact]);

  useEffect(() => {
    const handleScroller = () => {
      const footer = document.querySelector("footer");
      const footerPosition = footer.getBoundingClientRect().top;

      if (footerPosition <= window.innerHeight) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
    };

    window.addEventListener("scroll", handleScroller);

    return () => {
      window.removeEventListener("scroll", handleScroller);
    };
  }, []);

  return (
    <>
      {/* <div className="slide-in-header slide_header_active">
        <Header />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Portfolio />
      </div>
      <div>
        <Contact />
      </div>  */}
      <div className="slide-in-header slide_header_active">
        <Header />
        </div>
      <div className="slide-in-about">
        <About />
      </div>
      <div className="slide-in-experience">
        <Experience />
      </div>
      <div className="slide-in-portfolio">
        <Portfolio />
      </div>
      <div className="slide-in-contact">
        <Contact />
      </div>
      <Footer />
      {showNavbar && <Nav />}
    </>
  );
}

export default App;
