import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import AboutPage from "./components/About/AboutPage";
import PortfolioPage from "./components/Portfolio/PortfolioPage";
import "./App.css"

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component={HomePage}/>
        <Route path="/about" exact component={AboutPage}/>
        <Route path="/portfolio" exact component={PortfolioPage}/>
      </Router>
    );
  }
}

export default App;
