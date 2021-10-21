import React, { useEffect, useRef } from "react";
import observeTarget from "../observeTarget";
import SectionHeader from "../SectionHeader";
import "./index.scss";

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

const Skills = ({ width }) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      observeTarget(
        ref.current,
        (target) => {
          target.className += " from-left";
          setTimeout(() => {
            const skills = [...document.getElementsByClassName("skill")];
            skills.forEach((target) => {
              observeTarget(
                target,
                (target) => {
                  const delay = target.getAttribute("data-delay");
                  setTimeout(() => {
                    target.className += " show-skill";
                  }, Number(delay));
                },
                1,
                ref.current
              );
            });
          }, 300);
        },
        width <= 800 ? 0.2 : 0.4
      );
    }
  }, [ref, width]);

  return (
    <div className="section quater-fit" ref={ref}>
      <SectionHeader
        heading="Skills"
        text="Values I can add to the organization"
      />
      <div className="skills-section-content">
        <div className="skills">
          <h1>Technical</h1>
          <div className="skills-wrapper">
            {techSkills.map((e, idx) => (
              <span key={e} className="skill" data-delay={(idx + 1) * 30}>
                {e}
              </span>
            ))}
          </div>
        </div>
        <div className="skills">
          <h1>Soft</h1>
          <div className="skills-wrapper">
            {softSkills.map((e, idx) => (
              <span
                key={e}
                className="skill"
                data-delay={(techSkills.length + idx + 1) * 30}
              >
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
