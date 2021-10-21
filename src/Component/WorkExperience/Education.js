import React, { useEffect, useRef } from "react";
import observeTarget from "../AnimateChild";
import SectionHeader from "../SectionHeader";
import Timeline from "../Timeline/Timeline";
import "./index.scss";

const prefix = "work-edu-section";

const Education = () => {

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      observeTarget(ref.current, (target) => {
        target.className += ' from-left';
        const timelines = [...ref.current.getElementsByClassName('timeline')];
        timelines.forEach((target) => {
          observeTarget(target, (target) => {
            const delay = target.getAttribute('data-delay');
            setTimeout(() => {
              target.className += ' show-line';
            }, Number(delay));
          }, 1, ref.current);
        });
      }, 0.5);
    }
  }, [ref]);

  return (
    <div className="section" ref={ref}>
      <SectionHeader heading="Education" text="I have a decent knowledge" />
      <div className={prefix}>
        <div className={`${prefix}-content`}>
          <Timeline data-delay={0} />
          <div className="details edu">
            <p className="date">August, 2015 - June, 2019</p>
            <br />
            <h3 className="designation">
              Bachelor of Technology &#40;Computer Science Engineering&#41;
            </h3>
            <h4 className="company">
              Seth Jai Prakash Mukand Lal Institue of Engineering and Technology
            </h4>
            <p className="location">Yamunanagar, India</p>
            <p className="cgpa">Percentile - 74.4%</p>
          </div>
        </div>
        <div className={`${prefix}-content`}>
          <Timeline data-delay={600} />
          <div className="details edu">
            <p className="date">March, 2013 - April, 2014</p>
            <br />
            <h3 className="designation">Higher Secondary &#40;Science&#41;</h3>
            <h4 className="company">
              Guru Nanak Khalsa Senior Secondary School
            </h4>
            <p className="location">Chandigarh, India</p>
            <p className="cgpa">Percentile - 81%</p>
          </div>
        </div>
        <div className={`${prefix}-content`}>
          <Timeline isLast data-delay={1200} />
          <div className="details edu">
            <p className="date">March, 2011 - April, 2012</p>
            <br />
            <h3 className="designation">Matriculation</h3>
            <h4 className="company">Bhavan Vidyalaya</h4>
            <p className="location">Panchkula, India</p>
            <p className="cgpa">CGPA - 9.4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
