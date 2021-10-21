import React, { useEffect, useState } from "react";
import {
  WorkExperience,
  Education,
  Skills,
  Profile,
  Achievements,
} from "./Component";
import { debounce } from "lodash";
import { ReactComponent as UpIcon } from "./Assets/caret-up-fill.svg";
import Loader from "./Component/Loader/Loader";
import "./index.scss";

const headingStyle = [
  "color: #4682b4",
  "font-size: 3em",
  "font-style: italic",
].join("; ");

const flame = String.fromCodePoint(0x1f525);
const beer = "🍻";

const App = () => {
  const scrollToTop = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };

  const [clear, setClear] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    document.title = "Imanshu Rathore";
    console.clear();
    console.log("%cVoila!", headingStyle);
    console.log(
      `I assume you are an engineer ${flame} and know how to tweak with the DOM`
    );
    console.log(
      "Please go ahead and provide me with the feedbacks of what I could improve here"
    );
    console.log(`%cThanks %s`, "font-size: 2em; color: #4682b4", beer);
    setTimeout(() => setClear(true), 1000);
    const fn = debounce(function (e) {
      setWidth(window.innerWidth);
    }, 50);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  return clear ? (
    <div id="app">
      <Profile width={width} />
      <Skills width={width} />
      <WorkExperience width={width} />
      <Education width={width} />
      <Achievements width={width} />
      <div className="btt-btn">
        <button onClick={scrollToTop}>
          Back to top&ensp;
          <UpIcon />
        </button>
      </div>
    </div>
  ) : (
    <Loader />
  );
};

export default App;
