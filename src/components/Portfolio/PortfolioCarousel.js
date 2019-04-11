import React from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container
} from "reactstrap";

const items = [
  {
    src:
      "https://media.giphy.com/media/IzRV6cXW7M0TwNantE/giphy.gif",
    altText: "Muugle",
    title: "Muugle",
    description: "Muugle was the first project that I worked on during the coding bootcamp at Georgia Tech. It is a front end application that takes advantage of the Spotify API and two other APIs to provide the user with a one stop shop for listening to music, curating playlists, and viewing song information/lyrics. It was built using Bootstrap as the framework and jQuery the library of choice for DOM manipulation. The application also uses cookies to store recently played songs locally.",
    challenge: "The biggest challenge while working on this application was that it was my first time working on a project of this magnitude in groups. Working on my own components without having a direct understanding of how those components would interact with the components built by the other team members was a great challenge to work through and resolve.",
    githubLink: "https://github.com/peterjang0210/Muugle",
    deployedLink: "https://peterjang0210.github.io/Muugle/"
  },
  {
    src:
      "https://media.giphy.com/media/hqlVVrDykJLh0ZCJeN/giphy.gif",
    altText: "Bootcamp Connect",
    title: "Bootcamp Connect",
    description: "This is a full-stack MERN (MongoDB, Express.js, React, Node) application designed to be a platform for bootcamp graduates to post helpful resources post graduation. This was the first relatively large scale full-stack application that I created as part of a team. The backend is entirely written in javascript using Express.js and Node to handle server side functions while using Mongoose as the object document mapper to act as middleware between the server and the database.",
    challenge: "Bootcamp Connect was built using React as the framework of choice on the front end. However, we had learned the fundamentals of React only days before the start of this project, and as a result, there is a significant amount of code that could be refactored to be efficient. Using an unfamiliar framework under a strict time constraint was a signficant challenge that would not have been easy to solve without a team. I definitely grew as a developer from this experience and learned to struggle through documentation and experimentation.",
    githubLink: "https://github.com/peterjang0210/bootcamp-connect",
    deployedLink: "https://bootcamp-connect.herokuapp.com"
  },
  {
    src:
      "https://media.giphy.com/media/U6MOTCkUpOSpdnJjcL/giphy.gif",
    altText: "FrontDor",
    title: "FrontDor",
    description: "FrontDor is a real-time chat application built for small businesses to use for communciation between team members and with customers through sms. This application is also a MERN stack application that was built using feathers.js. A unique feature of this application is that it takes advantage of sockets for faster real-time transfer of information compared to the standard HTTP requests. ",
    challenge: "The biggest challnge with building this app was that feathers.js was a completely unfamiliar framework that I had to learn independently from scratch. The use of sockets was also a topic that I was not familiar with but was fundamental for the entirety of the project. This was compounded by the fact that my other team members were not familiar with the technology either. This entire project was a wake up call on how much room I had to grow as a developer. Reading through pages and pages of documentation and examples on stack overflow to understand how a component functioned was a humbling experience, but one that I truly appreciated by the end.",
    githubLink: "https://github.com/timothywadecook/team-chat",
    deployedLink: "https://frontdor.herokuapp.com/"
  }
];

class PortfolioCarousel extends React.Component {
  state = {
    activeIndex: 0,
    projectTitle: "",
    projectDescription: "",
    projectChallenge: "",
    githubLink: "",
    deployedLink: ""
  };
  onExiting = () => {
    this.animating = true;
  };

  onExited = () => {
    this.animating = false;
  };

  next = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  };

  previous = () => {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  };

  componentDidMount() {
    this.setState({
      projectTitle: items[0].title,
      projectDescription: items[0].description,
      githubLink: items[0].githubLink,
      deployedLink: items[0].deployedLink,
      projectChallenge: items[0].challenge
    });
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.activeIndex !== prevState.activeIndex) {
      const index = this.state.activeIndex;
      this.setState({
        projectTitle: items[index].title,
        projectDescription: items[index].description,
        githubLink: items[index].githubLink,
        deployedLink: items[index].deployedLink,
        projectChallenge: items[index].challenge
      });
    }
  };

  goToIndex = newIndex => {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  };

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item, i) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          value={i}
        >
          <img
            src={item.src}
            alt={item.altText}
            className="carouselImage"
            onClick={this.toggle}
          />
          <CarouselCaption captionHeader={item.caption} captionText={""}/>
        </CarouselItem>
      );
    });

    return (
      <Container>
        <header>
          <h2 className="projectHeader">Featured Projects</h2>
          <hr/>
        </header>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
          interval={20000}
          ride="carousel"
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
        <hr/>
        <div>
          <h3 className="projectTitle">{this.state.projectTitle}</h3>
          <p>{this.state.projectDescription}</p>
          <p>{this.state.projectChallenge}</p>
          <a href={this.state.githubLink} className="projectLinks">Github <i className="fab fa-github" /></a>{" | "}
          <a href={this.state.deployedLink} className="projectLinks">Deployed <i className="fas fa-mobile"></i></a>
        </div>
      </Container>
    );
  }
}

export default PortfolioCarousel;
