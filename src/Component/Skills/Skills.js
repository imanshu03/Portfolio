import React from "react";
import SectionHeader from "../SectionHeader";
import "./index.scss";

const Skills = () => {
  const techSkills = [
    "React.js",
    "JavaScript ES6+",
    "TypeScript",
    "HTML5",
    "CSS3",
    "SCSS",
    "Redux.js",
    "Redux Saga",
    "Express.js",
    "Node.js",
    "Git",
    "Adobe Photoshop",
    "WebPack",
    "Jest/Enzyme",
    "System Design",
    "Data Structures & Algorithms",
  ];
  const softSkills = [
    "Fluent Communicator",
    "Active Listening",
    "Collaborative",
    "Multitasking",
    "Time Management",
    "Persuasive",
    "Rapport Building",
    "Ability to Work Under Pressure",
    "Problem Solving",
    "Brainstorming",
  ];

  return (
    <div className="section quater-fit">
      <SectionHeader
        heading="Skills"
        text="Values I can add to the organization"
      />
      <div className="skills-section-content">
        <div className="skills">
          <h1>Technical</h1>
          <div className="skills-set">
            {techSkills.map((e) => (
              <span key={e} className="skill">
                {e}
              </span>
            ))}
          </div>
        </div>
        <div className="skills">
          <h1>Soft</h1>
          <div className="skills-set">
            {softSkills.map((e) => (
              <span key={e} className="skill">
                {e}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
