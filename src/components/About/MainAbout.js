import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem
} from "reactstrap";

const MainAbout = function(props) {
  const [displayFront, setDisplayFront] = useState(true);

  return (
    <Container>
      <hr/>
      <Row>
        <Col md={{ size: 8 }}>
          <p>
            Hi! My name is Peter Jang. I currently live in the metro-Atlanta
            area. I graduated from high school this past May as the
            valedictorian of my class. I am currently on a gap year and will
            enroll at Georgia Tech in the Fall with the major of Computer
            Science.
          </p>
          <p>
            As a full-stack web developer, I enjoy finding effective solutions
            to problems using code. With my background as valedictorian during
            high school and my passion for problem solving, I am confident in my
            ability to bring dedication and energy to any project. I’ve found
            that going through the entire process of designing and developing
            web applications to solve a common problem gives me great
            satisfaction and fulfillment.
          </p>
          <p>
            Being able to work effectively individually and as part of a team is
            a skill that I am proud to be capable of. I am always eager to learn
            new languages/frameworks/etc to find a more effective solution.
            During my coding bootcamp at Georgia Tech, I was able to learn the
            necessary tools for full-stack web development, including jQuery,
            React, Node, MySQL/Sequelize, MongoDB/Mongoose. I am looking to
            utilize these skills to continue growing as a developer through
            building practical applications as well as classroom experience.
          </p>
        </Col>
        <Col md={{ size: 4 }}>
          {displayFront ? (
            <Card>
              <CardHeader>
                <span className="cardHeadText">Skills</span>
                <Button
                  color="primary"
                  onClick={() => setDisplayFront(!displayFront)}
                  className="skillsBtn"
                >
                  View Backend
                </Button>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md={{ size: 6 }}>
                    <ListGroup flush>
                      <ListGroupItem className="skillListItem">
                        HTML
                      </ListGroupItem>
                      <ListGroupItem className="skillListItem">
                        CSS
                      </ListGroupItem>
                      <ListGroupItem className="skillListItem">
                        Bootstrap
                      </ListGroupItem>
                    </ListGroup>
                  </Col>
                  <Col md={{ size: 6 }}>
                    <ListGroup flush>
                      <ListGroupItem className="skillListItem">
                        Javascript
                      </ListGroupItem>
                      <ListGroupItem className="skillListItem">
                        jQuery
                      </ListGroupItem>
                      <ListGroupItem className="skillListItem">
                        React
                      </ListGroupItem>
                    </ListGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          ) : (
            <Card>
              <CardHeader>
                <span className="cardHeadText">Skills</span>
                <Button
                  color="primary"
                  onClick={() => setDisplayFront(!displayFront)}
                  className="skillsBtn"
                >
                  View Frontend
                </Button>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col md={{ size: 6 }}>
                    <ListGroup flush>
                      <ListGroupItem className="skillListItem">
                        Node.js
                      </ListGroupItem>
                      <ListGroupItem className="skillListItem">
                        Express.js
                      </ListGroupItem>
                      <ListGroupItem className="skillListItem">
                        MySQL
                      </ListGroupItem>
                    </ListGroup>
                  </Col>
                  <Col md={{ size: 6 }}>
                    <ListGroup flush>
                      <ListGroupItem className="skillListItem">
                        MongoDB
                      </ListGroupItem>
                      <ListGroupItem className="skillListItem">
                        Sequelize
                      </ListGroupItem>
                      <ListGroupItem className="skillListItem">
                        Mongoose
                      </ListGroupItem>
                    </ListGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          )}
        </Col>
      </Row>
      <hr/>
    </Container>
  );
};

export default MainAbout;
