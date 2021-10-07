import React from 'react';
import profileImg from '../../Assets/profile.jpg';
import './index.scss';
import { ReactComponent as MailIcon } from '../../Assets/envelope-fill.svg';
import { ReactComponent as MobileIcon } from '../../Assets/telephone-fill.svg';
import { ReactComponent as LocationIcon } from '../../Assets/geo-alt-fill.svg';
import { ReactComponent as LinkedinIcon } from '../../Assets/linkedin.svg';
import { ReactComponent as DownloadIcon } from '../../Assets/file-earmark-arrow-down.svg';
import SectionHeader from '../SectionHeader';

const Profile = () => {

    const handleDownloadClick = () => {
        const a = document.createElement('a');
        a.href = `https://drive.google.com/uc?id=11rcKwVOYSRMLk8Hz1wmp2TVn3OfGOOqg&export=download`;
        a.download = 'Imanshu Rathore.pdf';
        document.body.append(a);
        a.click();
        document.body.removeChild(a);
    }

    return (
        <div className="section full-fit">
            <SectionHeader image={profileImg} alt="profile" />
            <div className="profile">
                <div className="profile-top">
                    <h3 className="greeting">Hi, I am</h3>
                    <br />
                    <h1 className="first-name">Imanshu</h1>
                    <h1 className="last-name">Rathore</h1>
                    <h3 className="designation">Frontend Engineer</h3>
                    <br />
                    <p className="about">
                        I am a Bachelors in Computer Science Engineering. I have more than 2 years of experience in developing beautiful user interfaces and it started when I was in High School and developed the first one on Microsoft Word! I want my designs to be pixel perfect and I develop them really fast. I believe in developing progressive and reactive web apps using the latest technologies.
                        <br /><br />
                        A JavaScript developer keenly interested in the modern JavaScript landscape which spreads across various technologies such as React.js, Node.js, Express.js and much more.
                        <br /><br />
                        I believe a perfect blend of software design is one, where the goals and needs are accounted for in an elegant, efficient and robust design of the software.
                        <br /><br />
                        If I am not online then there is a high chance that I am engaged with my snooker cue or leading my player for a Winner Winner Chicken Dinner!
                        <br /><br />
                        Little scrolling will help you know me more!
                    </p>
                    <br /><br />
                    <button className="dw-resume" onClick={handleDownloadClick}>
                        Download Resume&ensp;<DownloadIcon />
                    </button>
                </div>
                <div className="profile-bottom">
                    <div className="details-item">
                        <MailIcon className="details-icons" />
                        <a href="mailto:imanshurathore@gmail.com" className="value">imanshurathore@gmail.com</a>
                    </div>
                    <div className="details-item">
                        <MobileIcon className="details-icons" />
                        <span className="value">+91-7837770661</span>
                    </div>
                    <div className="details-item">
                        <LocationIcon className="details-icons" />
                        <span className="value">Chandigarh, India</span>
                    </div>
                    <div className="details-item">
                        <LinkedinIcon className="details-icons" />
                        <a href="https://www.linkedin.com/in/imanshurathore/" className="value">linkedin.com/in/imanshurathore/</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;