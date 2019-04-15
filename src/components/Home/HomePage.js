import React from "react";
import Logo from "../../images/Logo.png"
import { Link } from "react-router-dom";

const HomePage = function (props) {
  return (
    <main className="scale-in-center">
        <Link to="/about" className="aboutLink">About</Link>
        <Link to="/portfolio" className="portfolioLink"><i className="fas fa-chevron-down"></i></Link>
        <a className="emailLink" href="mailto:peter.jang@outlook.com">Email</a>
      <img src={Logo} alt="logo" className="logo"/>
    </main>
  );
};

export default HomePage;
