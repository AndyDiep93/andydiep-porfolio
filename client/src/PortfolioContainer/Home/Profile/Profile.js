import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

<script
  src="https://kit.fontawesome.com/a076d05399.js"
  crossorigin="anonymous"
></script>;

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/andy-diep-521472182">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://github.com/Bluenurples">
                <i className="fa fa-github"></i>
              </a>
              <a href="https://andydiep33.wixsite.com/intro-to-python">
                <i className="fa fa-newspaper-o"></i>
              </a>
              <a href="https://www.instagram.com/mrandydiep/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://www.youtube.com/channel/UC8DHgzXaXBMj2Htfk7T-xEg">
                <i className="fa fa-youtube-square"></i>
              </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Andy</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev 😊",
                    1200,
                    "Full Stack Developer 💻",
                    1200,
                    "JavaScript, HTML, CSS Dev 🥞",
                    1200,
                    "React/React Native Dev 👾",
                    1200,
                    "Front-End Developer 🥽",
                    1200,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Knack of building applications with front and back end
                operations.
              </span>
            </span>
          </div>

         <div className="profile-options">
            <button className="btn primary-btn"
            onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="Andy_Diep_Resume.pdf" download="Andy_Diep_Resume.pdf">
            <button className="btn highlighted-btn">Get My Full Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
