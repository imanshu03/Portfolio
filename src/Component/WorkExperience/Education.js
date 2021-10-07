import React from 'react';
import SectionHeader from '../SectionHeader';
import Timeline from '../Timeline/Timeline';
import './index.scss';

const prefix = 'work-edu-section';

const Education = () => {
    return (
        <div className="section">
            <SectionHeader heading="Education" text="I learnt alot in  my life" />
            <div className={prefix}>
                <div className={`${prefix}-content`}>
                    <Timeline />
                    <div className="details edu">
                        <p className="date">August, 2015 -  June, 2019</p>
                        <br />
                        <h3 className="designation">Bachelor of Technology &#40;Computer Science Engineering&#41;</h3>
                        <h4 className="company">Seth Jai Prakash Mukand Lal Institue of Engineering and Technology</h4>
                        <p className="location">Yamunanagar, India</p>
                        <p className="cgpa">Percentile - 74.4%</p>
                    </div>
                </div>
                <div className={`${prefix}-content`}>
                    <Timeline />
                    <div className="details edu">
                        <p className="date">March, 2013 -  April, 2014</p>
                        <br />
                        <h3 className="designation">Higher Secondary &#40;Science&#41;</h3>
                        <h4 className="company">Guru Nanak Khalsa Senior Secondary School</h4>
                        <p className="location">Chandigarh, India</p>
                        <p className="cgpa">Percentile - 81%</p>
                    </div>
                </div>
                <div className={`${prefix}-content`}>
                    <Timeline isLast />
                    <div className="details edu">
                        <p className="date">March, 2011 -  April, 2012</p>
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