import React from 'react'
import './scss/footer.css'
import { AiFillFacebook,AiFillTwitterSquare,AiFillInstagram } from "react-icons/ai";
// import { AiFillInstagram } from "react-icons/ai";
// import {  } from "react-icons/ai";



function Footer() {
  return (
    <footer id='footer'>
      <a href="#" className='main_link'>Borz</a>
      <ul className='link_list'>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="social_links">
        <a href="https://web.facebook.com/mamoun.bursi"><AiFillFacebook/></a>
        <a href="https://instagram.com"><AiFillInstagram/></a>
        <a href="https://twitter.com"><AiFillTwitterSquare/></a>

      </div>
    </footer>
  )
}

export default Footer