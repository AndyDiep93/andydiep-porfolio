import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

export default function AboutMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "A highly motivated and enthusiastic software developer with a passion for technology and a strong desire to learn. Possess solid experience in coding and problem-solving, as well as knowledge in various programming languages and software development methodologies. Proficient in Python and JavaScript, with experience in developing web applications. Seeking a Junior Software Developer role where I can continue to grow my skills and utilize my skills and contribute to the success of a dynamic organization." +" A cooperative, accommodating, collaborative individual with dependability for creating commitment and delegation to company growth to expand efficacy. Enthusiastic about researching up-to-date technology that can help influence self-knowledge and obtain new expertise that will benefit all contributors and collaborators.",
    highlights: {
      bullets: [
        "Interactive Front End as per the design",
        "Mobile Development",
        "Familiar with HTML, CSS, and SQL",
        "Proficient in JavaScript",
        "Java & Python",
        "Experience in developing web applications using React",
        "Strong written and verbal communication skills",
        "Git",
      ],
      heading: "Here are a Few Highlights:",
    },
  };
  const renderHighlight = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  return (
    <div
      className="about-me-container screen-container fadeIn"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlight()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >
                {" "}
                Hire Me{" "}
              </button>
              <a href="Andy_Diep_Resume.pdf"
                download="Andy_Diep_Resume.pdf">
                <button className="btn highlighted-btn">Get My Full Resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


