import React from "react";
import Header from "./Header";
import Links from "./Links";
import MainAbout from "./MainAbout";
import { Link } from "react-router-dom";

const AboutPage = function(props) {
  return (
      <main>
          <Link to="/" className="closeBtn"><i className="fas fa-times"></i></Link>
          <Header />
          <MainAbout />
          <Links />
      </main>
  )
};

export default AboutPage;
