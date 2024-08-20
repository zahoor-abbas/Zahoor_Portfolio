import React from "react";
import "./about.css";
import pattern_theme from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.jpg";

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={pattern_theme} alt="about img" />
      </div>
      <div className="about-section">
        <div className="about-sectionleft">
          <img src={profile_img} alt="about_profile" />
        </div>
        <div className="about-sectionright">
          <div className="about-para">
            <p>
            I am Frontend /React js Developer with a track record of one plus year at House of Code, where I played a pivotal role in designing and developing projects for clients. My primary focus involved converting Figma designs into intuitive and visually appealing user interfaces. contributing to the design and development of impactful projects.
            </p>
          </div>
          <div className="about-skills">
            <div className="about-skill">
              <p>HTML/CSS</p> <hr/>
            </div>
            <div className="about-skill">
              <p>Javascript</p> <hr/>
            </div>
            <div className="about-skill">
              <p>Figma</p> <hr/>
            </div>
            <div className="about-skill">
              <p>BootStrap</p>
              <hr/>
            </div>
            <div className="about-skill">
              <p>Tailwind</p> <hr/>
            </div>
            <div className="about-skill">
              <p>React JS</p>
              <hr/>
            </div>
            <div className="about-skill">
              <p>Git & Github</p> <hr/>
            </div>
          </div>
        </div>
      </div>
      <div className="about-acheivements">
        <div className="about-acheivement">
          <h2>1+</h2>
          <p> YEARS OF EXPERIENCE</p>
        </div>
        <div className="about-acheivement">
          <h2>20+</h2>
          <p> PROJECTS COMPLETED</p>
        </div>
        <div className="about-acheivement">
          <h2>2</h2>
          <p> Mega Projects</p>
        </div>
      </div>
    </div>
  );
};

export default About;
