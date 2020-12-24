import React from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container
} from "reactstrap";
import fieldServiceApp from "../../images/FieldServiceApp.mp4";
import announcementBoard from "../../images/AnnouncementBoard.mp4";

const items = [
  {
    src: fieldServiceApp,
    altText: "Alba 2.0",
    title: "Field Service App",
    description: "This app is currently being rolled out slowly. It was developed to make up for some of the limitations by the alba program used for field service. During the pandemic, we found that as more records were added to each address in Alba, it became more difficult to maintain a clean record history. This app attmpted to make up for some of those shortcomings. Records for each address can be sorted by category (door-to-door, letter, phone) and are displayed in a table that is easy to view. Another feature that was added was a search feature for phone numbers. The function uses regular expressions to search the records for matching phone numbers and informs the user whether the phone number is a duplicate or not. The text and UI elements for the application have also been enlarged for ease of use by the older friends. For the admin, a mass import of addresses, users, and records from an excel file have been added.",
    challenge: "The repository for this project is currently set to private and as such cannot be viewed without requesting access.",
    githubLink: "https://github.com/peterjang0210/Field-Service-App",
    deployedLink: "https://suwanee-field-service.herokuapp.com/"
  },
  {
    src: announcementBoard,
    altText: "Congregation Announcement Board",
    title: "Congregation Announcement Board",
    description: "This app was developed duirng the pandemic to serve as an online announcement board since the kingdom hall could not be accesssed by many of the friends. The app contains tabs for meetings, field service, upcoming events, and other announcements. Zoom links for meetings and field service are included as well as meeting assignments and branch announcments. This application was initially developed with a feature that allowed the friends to sign up for comments during the meetings, but that feature was disabled after it was decided to use the raise hand feature in zoom instead.",
    challenge: "The repository for this project is currently set to private and as such cannot be viewed without requesting access.",
    githubLink: "https://github.com/peterjang0210/meetingComments",
    deployedLink: "http://suwaneejw.herokuapp.com/sk/announcements"
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
          <video
            src={item.src}
            alt={item.altText}
            className="carouselImage"
            autoPlay
            loop
            playsInline
          >
            <source src={item.src} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
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
          interval={60000}
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
          <a href={this.state.deployedLink} className="projectLinks deployedLink">Live <i className="fas fa-mobile"></i></a>
        </div>
      </Container>
    );
  }
}

export default PortfolioCarousel;
