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
    description:
      "Front end web app that uses multiple APIs, including spotifyAPI to allow the user to play songs, create playlists, edit playlists, and view information about the song.",
    githubLink: "https://github.com/peterjang0210/Muugle",
    deployedLink: "https://peterjang0210.github.io/Muugle/"
  },
  {
    src:
      "https://media.giphy.com/media/hqlVVrDykJLh0ZCJeN/giphy.gif",
    altText: "Bootcamp Connect",
    title: "Bootcamp Connect",
    description: "Full-stack MERN Application that allows users to register/login, update their own profile information, view other users' profiles, and create posts",
    githubLink: "https://github.com/peterjang0210/bootcamp-connect",
    deployedLink: "https://bootcamp-connect.herokuapp.com"
  },
  {
    src:
      "https://media.giphy.com/media/U6MOTCkUpOSpdnJjcL/giphy.gif",
    altText: "FrontDor",
    title: "FrontDor",
    description: "Full-stack MERN Application that allows users to chat in real time. Users can register/login, join a team, add other users to their team via email, create new conversations, and communicate via sms with customers.",
    githubLink: "https://github.com/timothywadecook/team-chat",
    deployedLink: "https://frontdor.herokuapp.com/"
  }
];

class PortfolioCarousel extends React.Component {
  state = {
    activeIndex: 0,
    projectTitle: "",
    projectDescription: "",
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
      deployedLink: items[0].deployedLink
    });
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.activeIndex !== prevState.activeIndex) {
      const index = this.state.activeIndex;
      this.setState({
        projectTitle: items[index].title,
        projectDescription: items[index].description,
        githubLink: items[index].githubLink,
        deployedLink: items[index].deployedLink
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
          <CarouselCaption captionHeader={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Container>
        <header>
          <h2>Featured Projects</h2>
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
        <div>
          <h3>{this.state.projectTitle}</h3>
          <p>{this.state.projectDescription}</p>
          <a href={this.state.githubLink}>Github Repository</a>{" | "}
          <a href={this.state.deployedLink}>Deployed App</a>
        </div>
      </Container>
    );
  }
}

export default PortfolioCarousel;
