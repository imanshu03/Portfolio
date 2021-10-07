import React from 'react';
import SectionHeader from '../SectionHeader';
import './index.scss';

const Skills = () => {

    const techSkills = ['React.js', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SCSS', 'Redux.js', 'Node.js', 'Express.js', 'Adobe Photoshop', 'WebPack', 'Jest/Enzyme', 'System Design'];
    const softSkills = ['Fluent Communicator', 'Active Listening', 'Collaborative', 'Multitasking', 'Time Management', 'Persuasive', 'Rapport Building', 'Ability to Work Under Pressure', 'Problem Solving', 'Brainstorming'];

    return (
        <div className="section quater-fit">
            <SectionHeader heading='Skills' text='What I can bring to table' />
            <div className="skills-section-content">
                <div className="skills">
                    <h1>Technical</h1>
                    <div className="skills-set">
                        {
                            techSkills.map((e) => <span key={e} className="skill">{e}</span>)
                        }
                    </div>
                </div>
                <div className="skills">
                    <h1>Soft</h1>
                    <div className="skills-set">
                        {
                            softSkills.map((e) => <span key={e} className="skill">{e}</span>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;