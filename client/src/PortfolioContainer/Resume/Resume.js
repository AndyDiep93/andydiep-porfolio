import React, { useState, useEffect} from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interesting Facts", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React Js", ratingPercentage: 85 },
    { skill: "HTML", ratingPercentage: 85 },
    { skill: "CSS", ratingPercentage: 90 },
    { skill: "React Native", ratingPercentage: 80 },
    { skill: "MySQL", ratingPercentage: 65 },
    { skill: "Java", ratingPercentage: 65 },
    { skill: "Python", ratingPercentage: 70 },
  ];

  const projectsDetails = [
    {
        title: "Personal Portfolio Website",
        duration: { fromDate: "2023", toDate: "2023" },
        description:
          "A Personal Portfolio website to showcase all my detials and projects at one place",
        subHeading: "Technologies Used: React JS, Bootstrap",
      },
      {
        title: "Clean Collective",
        duration: { fromDate: "2021", toDate: "2022" },
        description: "Tinder for clean tech and oil & gas",
        subHeading: "Technologies Used: React JS, Node Js, MongoDB, MUI",
      },
      {
        title: "Keeper App",
        duration: { fromDate: "2022", toDate: "2022" },
        description: "An app where you can create notes",
        subHeading: "Technologies Used: React JS",
      },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"The Southern Alberta Institute of Technology, Calgary AB"}
        subHeading={"Diploma of Information Techonogy - Software Development"}
        fromDate={"2021"}
        toDate={"2022"}
      />
      <ResumeHeading
        heading={"Mount Royal University, Calgary AB"}
        subHeading={"Diploma of Personal Fitness Trainer"}
        fromDate={"2017"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"High School, Calgary AB"}
        subHeading={"Lester B. Pearson"}
        fromDate={"2009"}
        toDate={"2011"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
           heading={"GYMVMT (Recreational Fitness gym), Calgary AB"}
        subHeading={"Personal Trainer (Level 3)"}
        fromDate={"2019"}
        toDate={"2021"}
        />
        <div className="experience-description">
        <span className="resume-description-text">•	Trainer with credentials at a high-volume club that enabled clients to achieve weight loss.</span>
        <br />
        <span className="resume-description-text">•	Consistently recognized as a high performer and critical team member.</span>
        <br />
       
        </div>
        
      <ResumeHeading
        heading={"Red Lobster, Calgary AB"}
        subHeading={"Waiter"}
        fromDate={"2012"}
        toDate={"2018"}
      />
      <div className="experience-description">
        <span className="resume-description-text">•	Executed adaptable conflict resolution procedures, problem-solving, and critical thinking. </span>
        <br />
        <span className="resume-description-text">•	Orchestrated a guest-oriented environment, using self-knowledge through online training courses.</span>
        <br />
        </div>
      </div>
    </div>
    ,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading heading="Bilingual" description="I speak and write in English (proficient) and speak Chinese-Cantonese(adequate)" />
        <ResumeHeading heading="Seasons of Giving" description="Started a Seasons of Giving group in 2010 with my sister and two friends. Over the past five years, with the help of many other individuals, we have raised $29,145. This money has gone a long way towards helping those in need through personal distribution (gift bags, gift cards, essential items) and charitable donations"/>
        <ResumeHeading
          heading="Started a Blog"
          description="Started a blog to introduce the Python Programming Language. The blog presents the basics and helps the reader slowly put things together through my instructions throughout the blog. By the end of this short journey, the blog teaches them to put everything together to make small functional applications. "
        />
      </div>,
  ];



  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fadeIn"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"Find Out More About Who I Am"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};