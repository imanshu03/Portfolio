import React, { useEffect, useRef } from "react";
import observeTarget from "../observeTarget";
import SectionHeader from "../SectionHeader";
import Timeline from "../Timeline/Timeline";
import "./index.scss";

const prefix = "work-edu-section";

const WorkExperience = ({ width }) => {
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      observeTarget(
        ref.current,
        (target) => {
          target.className += " from-left";
          const timelines = [...ref.current.getElementsByClassName("timeline")];
          timelines.forEach((target) => {
            observeTarget(
              target,
              (target) => {
                const delay = target.getAttribute("data-delay");
                setTimeout(() => {
                  target.className += " show-line";
                }, Number(delay));
              },
              1,
              ref.current
            );
          });
        },
        width <= 800 ? 0.2 : 0.4
      );
    }
  }, [ref, width]);

  return (
    <div className="section" ref={ref}>
      <SectionHeader heading="Experience" text="I love what I do" />
      <div className={prefix}>
        <div className={`${prefix}-content`}>
          <Timeline data-delay={0} />
          <div className="details">
            <p className="date">February, 2021 - Present</p>
            <br />
            <h3 className="designation">Software Engineer</h3>
            <h4 className="company">Paytm Payments Bank</h4>
            <p className="location">Noida, India</p>
            <br />
            <p className="tasks">Tasks :</p>
            <ul>
              <li>
                Design and develop new features/requirements by translating
                given Wire-frames into Web Components that meets markup
                standards, cross-browser compatibility, usability principles and
                accessibility.
              </li>
              <li>
                Develop reusable and modular UI components utilizing Preact and
                Storybook, define accessibility and governance and rollout the
                components across the Paytm Web Components library.
              </li>
              <li>
                Enhanced overall web application performance by optimizing the
                critical rendering path, reducing page load time and improving
                performance metrics such as FCP, FMP and TTI etc from 82% to
                90%.
              </li>
              <li>
                Handling the interface layer &#40;Backend For Frontend&#41; for
                integrating/tailoring the distributed microservice architecture
                with the web-application and achieving server-side rendering.
              </li>
              <li>
                Improved web application security by composing middleware’s to
                prevent various attacks such as CSRF, XSS, CSP and Click-Jacking
                etc which diminshed the attacks from 7% to 4.2%.
              </li>
              <li>
                Collaborate with team to design, develop, test and refine
                expected deliverables that meet the objectives and quality
                standards across multiple releases.
              </li>
            </ul>
          </div>
        </div>
        <div className={`${prefix}-content`}>
          <Timeline isLast data-delay={400} />
          <div className="details">
            <p className="date">October, 2019 - January, 2021</p>
            <br />
            <h3 className="designation">Associate Software Engineer</h3>
            <h4 className="company">GlobalLogic</h4>
            <p className="location">Noida, India</p>
            <br />
            <p className="tasks">Tasks :</p>
            <ul>
              <li>
                Designed and developed the Web Application where user can
                compare and purchase insurance plans for their pets for a pet
                insurance company, PetPlan.
              </li>
              <li>
                Revamped the frontend of content management system application
                from JSP pages in Spring framework to React Web Components in
                MVC architecture for a content engagement platform provider,
                Naviga which increased the user engagement by 85%.
              </li>
              <li>
                Developed the coach and student web panel for an internal
                product, Career Path which helps the employ- ees to track their
                career progression and schedule meetings with career coaches.
              </li>
              <li>
                Assisted senior developers in performing code reviews and
                implementing improvement plans.
              </li>
              <li>
                Acclimated to new technologies and situations with the vision of
                providing best customer experience.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
