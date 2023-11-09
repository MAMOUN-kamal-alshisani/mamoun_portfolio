import React, { useEffect,useState } from "react";
import "./scss/experience.css";
import { AiFillCheckCircle } from "react-icons/ai";
function Experience() {
 
  return (
    <section id="experience" /*className="slide-in"*/>
      <h5>Explore My </h5>
      <h1>Experience</h1>
      <div className="cr experience_cr">
        <div className="frontend_cr set_cr">
          <h2>Frontend Development</h2>
          <div className="skill_list">
            <article className="skill_item">
              <div className="icon_cr">
                <AiFillCheckCircle />
              </div>
              <div className="skills">
                <h4>JavaScript</h4>
                <small>experienced</small>
              </div>
            </article>
            <article className="skill_item">
              <div className="icon_cr">
                <AiFillCheckCircle />
              </div>
              <div className="skills">
                <h4>React.js</h4>
                <small>experienced</small>
              </div>
            </article>
            <article className="skill_item">
              <div className="icon_cr">
                <AiFillCheckCircle />
              </div>
              <div className="skills">
                <h4>HTML</h4>
                <small>experienced</small>
              </div>
            </article>
            <article className="skill_item">
              <div className="icon_cr">
                <AiFillCheckCircle />
              </div>
              <div className="skills">
                <h4>Css\Scss</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skill_item">
              <div className="icon_cr">
                <AiFillCheckCircle />
              </div>
              <div className="skills">
                <h4>Git - Version Control</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skill_item">
              <div className="icon_cr">
                <AiFillCheckCircle />
              </div>
              <div className="skills">
                <h4>Problem-Solving and Debugging</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="backend_cr set_cr">
          <h2>Backend Development</h2>
          <div className="skill_list">
            <article className="skill_item">
              <div className="icon_cr">
                <AiFillCheckCircle />
              </div>
              <div className="skills">
                <h4>Python</h4>
                <small>beginner</small>
              </div>
            </article>
            <article className="skill_item">
              <div className="icon_cr">
                <AiFillCheckCircle />
              </div>
              <div className="skills">
                <h4>Flask</h4>
                <small>beginner</small>
              </div>
            </article>
            <article className="skill_item">
              <div className="icon_cr">
                <AiFillCheckCircle />
              </div>
              <div className="skills">
                <h4>Node.js</h4>
                <small>experienced</small>
              </div>
            </article>
            <article className="skill_item">
              <div className="icon_cr">
                <AiFillCheckCircle />
              </div>
              <div className="skills">
                <h4>SQL</h4>
                <small>Intermediate</small>
              </div>
            </article>
            <article className="skill_item">
              <div className="icon_cr">
                <AiFillCheckCircle />
              </div>
              <div className="skills">
                <h4>NOSQL-MongoDB</h4>
                <small>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
