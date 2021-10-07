import React from 'react';
import SectionHeader from '../SectionHeader';
import { ReactComponent as Award } from '../../Assets/award-fill.svg';
import './index.scss';

const prefix = 'achievements-section';

const Achievements = () => {
    return (
        <div className="section">
            <SectionHeader heading="Achievements" text="Award of a lifetime" />
            <div className={prefix}>
                <div className={`${prefix}-card`}>
                    <div className="card-top">
                        <Award />
                        <div className="heading">
                            <h3 className="heading">30Hacks Hackathon Runner Up</h3>
                            <span className="date">December, 2019</span>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <p className="description">Achieved second prize at company wide Hackathon organized by GlobalLogic. Built a Web-Application that predicts the best suitable institute for the students based upon his/her inputs using Machine Learning Model.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Achievements;