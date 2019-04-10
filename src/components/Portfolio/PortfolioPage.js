import React from "react";
import {Link} from "react-router-dom";
import Carousel from "./PortfolioCarousel";

const PortfolioPage = function(props) {
  return (
    <main>
        <Link to="/"><i className="fas fa-chevron-up"></i></Link>
        <Carousel />
    </main>
  );
};

export default PortfolioPage;
