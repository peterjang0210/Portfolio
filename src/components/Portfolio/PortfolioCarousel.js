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
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Muugle",
    title: "Muugle",
    description:
      "Front end web app that uses multiple APIs, including spotifyAPI to allow the user to play songs, create playlists, edit playlists, and view information about the song.",
    githubLink: "https://github.com/peterjang0210/Muugle",
    deployedLink: "https://peterjang0210.github.io/Muugle/"
  },
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
    altText: "Bootcamp Connect",
    title: "Bootcamp Connect",
    description: "Full-stack MERN Application that allows users to register/login, update their own profile information, view other users' profiles, and create posts",
    githubLink: "https://github.com/peterjang0210/bootcamp-connect",
    deployedLink: "https://bootcamp-connect.herokuapp.com"
  },
  {
    src:
      "data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E",
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
