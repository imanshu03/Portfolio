import React, { useEffect, useRef } from "react";
import SectionHeader from "../SectionHeader";
import { ReactComponent as Award } from "../../Assets/award-fill.svg";
import { ReactComponent as Star } from '../../Assets/star.svg';
import "./index.scss";
import observeTarget from "../AnimateChild";

const prefix = "achievements-section";

const achievements = [
  {
    heading: '30Hacks Hackathon Runner Up',
    date: 'December, 2019',
    issuer: 'GlobalLogic',
    description: `Achieved second prize at company wide Hackathon. 
    Built a Web-Application that predicts the best
    suitable institute for the students based upon his/her inputs
    using Machine Learning Model.`,
    icon: <Award />
  },
  {
    heading: 'Rising Star',
    date: 'September, 2021',
    issuer: 'Paytm Payments Bank',
    description: 'Awarded for outstanding performance, rectifying the architectural issues of the product and improving the overall performance of the application.',
    icon: <Star />
  }
]

const Achievements = () => {

  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      observeTarget(ref.current, (target) => {
        target.className += ' from-left';
      }, 0.5);
    }
  }, [ref]);

  return (
    <div className="section" ref={ref}>
      <SectionHeader heading="Achievements" text="Awards I have achieved" />
      <div className={prefix}>
        {
          achievements.map((el) => (
            <div className={`${prefix}-card`}>
              <div className="card-top">
                {el.icon}
                <div className="heading">
                  <h3 className="heading">{el.heading}</h3>
                  <span className="date">{el.date} - {el.issuer}</span>
                </div>
              </div>
              <div className="card-bottom">
                <p className="description">
                  {el.description}
                </p>
              </div>
            </div>

          ))
        }
      </div>
    </div>
  );
};

export default Achievements;
