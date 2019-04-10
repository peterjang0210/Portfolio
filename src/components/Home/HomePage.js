import React from "react";
import Typist from "react-typist";
import { Link } from "react-router-dom";

const HomePage = function(props) {
  return (
    <main>
        <Link to="/about" className="aboutLink">About</Link>
        <Link to="/portfolio" className="portfolioLink"><i className="fas fa-chevron-down"></i></Link>
        <a className="emailLink" href="mailto:peter.jang@outlook.com">Email</a>
      <Typist
        avgTypingDelay={90}
        cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
        startDelay={500}
      >
        Hi, I'm Peter. I'm a full-stack web developer.
      </Typist>
    </main>
  );
};

export default HomePage;
