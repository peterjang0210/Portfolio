import React from "react";
import { Container, Row, Col } from "reactstrap";

const Links = props => (
  <Container>
    <Row>
      <Col>
        <h3>Links</h3>
        <div>
          <a href="https://github.com/peterjang0210" className="linkItem">
            Github <i className="fab fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/peter-yoon-jang/"
            className="linkItem"
          >
            LinkedIn <i className="fab fa-linkedin" />
          </a>
          <a href="./images/56384733.jpg" className="linkItem">
            Resume <i className="fas fa-file" />
          </a>
          <span>Contact Me: </span>
          <a href="tel:+12673467700">
            <i className="fas fa-phone contact" />
          </a>
          |
          <a href="mailto:peter.jang@outlook.com">
            <i className="fas fa-envelope contact" />
          </a>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Links;
