import React from "react";

import { MdDateRange } from "react-icons/md";
import "./scss/about.css";
import ME3 from "../../assets/me3.jpg";
const About = () => {
  // const [rect, setRect] = useState('')
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const elements = document.querySelectorAll("abt_slide");

  //     elements.forEach((element) => {
  //       // const rect = element.getBoundingClientRect();
  //       setRect(element.getBoundingClientRect())

  //       const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;

  //       if (isInViewport) {
  //         element.classList.add("abt_slide--active");
  //       }
  //       else{
  //         element.classList.remove("abt_slide--active");
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [rect,setRect]);

  return (
    <section id="about" /*className='abt_slide'*/>
      <h5>Get To Know</h5>
      <h1>
        About <span>Me</span>{" "}
      </h1>

      <div className="cr about_cr">
        <div className="about_me">
          <div className="about_me_img">
            <img src={ME3} alt="myimg" className="about_img" />
          </div>
        </div>
        <div className="about_intro">
          <p>
            I am a Full Stack Developer With passion and desire to turn ideas
            into reality and chunks of codes into visual websites, and as a full
            stack developer i try to perfect the craft daily by practicing,
            learning and building new things whether it is on backend side or
            frontend, i am a team player with Growth Mindset and the
            determination to be an indispensable team member.
          </p>
          <div className="link">
          <a href="#contact">Lets Talk</a>
          </div>
        </div>

      </div>
      <div className="cr about_content">
        {/* <h1>Education</h1> */}
          <div className="about_cards">
            {/* <h3>Education</h3> */}
            <article className="abt_card one">
              <h5>
                <MdDateRange />
                2014 - 2019
              </h5>
              <h4>Bachelor's Degree</h4>
              <p>
                Bachelor's Degree in Management Information Systems From Amman
                University College of Financial and Administrative Sciences
              </p>
            </article>
            <article className="abt_card">
              <h5>
                <MdDateRange />
                April - October 2021
              </h5>
              <h4>Extensive Course Certificate</h4>
              <p>
                Full stack development Certificate from Luminus Technical
                University College (LTUC)
              </p>
            </article>
            <article className="abt_card">
              <h5>
                <MdDateRange />
                May - September 2023
              </h5>
              <h4>Extensive Course Certificate</h4>
              <p>
                Full stack development Certificate NanoDegree Program from
                Udacity
              </p>
            </article>
          </div>
       

        </div>

    </section>
  );
};

export default About;
