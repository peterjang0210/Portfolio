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
      <Row>
        <Col md={{ size: 8 }}>
          <p>
            Hi! My name is Peter Jang. I currently live in the metro-Atlanta
            area.
          </p>
          <p>
            I first learned about the joys of programming in my AP Computer
            Science class during my sophomore year in high school where I
            learned the fundamentals of Java. In my opinion, there is no better
            feeling than when a program is successfully deployed without any
            bugs (or additional "features").
          </p>
          <p>
            Currently, I am on a gap year after graduating as the valedictorian
            at North Gwinnett High School last May. During this gap year, I am
            taking a full-stack web development coding bootcamp. I hope to use
            the skills I have learned through this bootcamp to find an
            internship opportunity during my first year of college at Georgia
            Tech.
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
                      <ListGroupItem className="skillListItem">HTML</ListGroupItem>
                      <ListGroupItem className="skillListItem">CSS</ListGroupItem>
                      <ListGroupItem className="skillListItem">Bootstrap</ListGroupItem>
                    </ListGroup>
                  </Col>
                  <Col md={{ size: 6 }}>
                    <ListGroup flush>
                      <ListGroupItem className="skillListItem">Javascript</ListGroupItem>
                      <ListGroupItem className="skillListItem">jQuery</ListGroupItem>
                      <ListGroupItem className="skillListItem">React</ListGroupItem>
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
                  View Backend
                </Button>
              </CardHeader>
              <CardBody>
              <Row>
                  <Col md={{ size: 6 }}>
                    <ListGroup flush>
                      <ListGroupItem className="skillListItem">Node.js</ListGroupItem>
                      <ListGroupItem className="skillListItem">Express</ListGroupItem>
                      <ListGroupItem className="skillListItem">MySQL</ListGroupItem>
                    </ListGroup>
                  </Col>
                  <Col md={{ size: 6 }}>
                    <ListGroup flush>
                      <ListGroupItem className="skillListItem">MongoDB</ListGroupItem>
                      <ListGroupItem className="skillListItem">Sequelize</ListGroupItem>
                      <ListGroupItem className="skillListItem">Mongoose</ListGroupItem>
                    </ListGroup>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MainAbout;
