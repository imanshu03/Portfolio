import React, { useEffect, useState } from 'react';
import {
  WorkExperience,
  Education,
  Achievements,
  Profile,
  Skills
} from './Component';
import { ReactComponent as UpIcon } from './Assets/caret-up-fill.svg';
import './index.scss';
import Loader from './Component/Loader/Loader';

const headingStyle = [
  'color: #4682b4',
  'font-size: 3em',
  'font-style: italic'
].join('; ');

const flame = String.fromCodePoint(0x1F525);
const beer = '🍻';

const App = () => {

  const scrollToTop = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };

  const [clear, setClear] = useState(false);

  useEffect(() => {
    document.title = 'Imanshu Rathore';
    console.clear();
    console.log('%cVoila!', headingStyle);
    console.log(`I assume you are an engineer ${flame} and know how to tweak with the DOM`);
    console.log('Please go ahead and provide me with the feedbacks of what I could improve here');
    console.log(`%cThanks %s`, 'font-size: 2em; color: #4682b4', beer);
    setTimeout(() => setClear(true), 1000);
  });

  return clear ? (
    <div className="app">
      <Profile />
      <Skills />
      <WorkExperience />
      <Education />
      <Achievements />
      <div className="btt-btn">
        <button onClick={scrollToTop}>Back to top&ensp;<UpIcon /></button>
      </div>
    </div>
  ) : < Loader />;
}

export default App;
