import React from "react";
import {Link} from "react-router-dom";
import PortfolioCarousel from "./PortfolioCarousel";

const PortfolioPage = function(props) {
  return (
    <main className="swing-in-top-bck">
        <Link to="/" className="backToHomeBtn"><i className="fas fa-chevron-up"></i></Link>
        <PortfolioCarousel />
    </main>
  );
};

export default PortfolioPage;
