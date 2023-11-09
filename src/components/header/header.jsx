import React from 'react';
import "./scss/header.css";
import Me5 from "../../assets/me5.png";
import resume from "../../assets/mamoun_alshishani_resume.pdf";

import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";




const Header = () => {
 

  return (
    <header id="#">
      <div className="cr header_cr" >
        <div className="headers_txt">
        <h3 className="text first_txt">Hello I'm </h3>
        <h2 className="text second_txt">Mamoun Alshishani</h2>
        <h5 className="text third_txt">Full Stack Developer</h5>
        </div>
       
        <div className="cta">
          <a href={resume} download className="btn">
            DownLoad CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
        <div className="header_social">
          <a href="https://www.linkedin.com/in/mamounalshishani-350277210" target="_blank"><FaLinkedinIn className='header_icon icon'/></a>
          <a href="https://github.com/MAMOUN-kamal-alshisani" target="_blank"><FaGithub  className='header_icon icon'/></a>
          <a href="mailto:mamoun.bursi@yahoo.com" target="_blank"><MdOutlineEmail  className='header_icon icon'/></a>
        </div>
        <div className="myImg_div">
          <img src={Me5} alt="me" className="header_img"/>
        </div>

        {/* <a href="#contact" className="scroll_down">
          Scroll Down
        </a> */}


      </div>
    </header>
  );
};

export default Header;
