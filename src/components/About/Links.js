import React from "react";
import { Container, Row, Col } from "reactstrap";
import resume from "../../PeterJang_Resume.docx";

const Links = props => (
  <Container>
    <Row>
      <Col>
        <h3 className="linksHeader">Links</h3>
        <div>
          <a href="https://github.com/peterjang0210" className="linkItem">
            Github <i className="fab fa-github" />
          </a>
          <a href={resume} className="linkItem" download="peterjang_resume">
            Resume <i className="fas fa-file" />
          </a>
          <span className="contactMe">Contact Me: </span>
          <a href="tel:+12673467700" className="linkItem">
            <i className="fas fa-phone contact" />
          </a>
          |{" "}
          <a href="mailto:peter.jang@outlook.com" className="linkItem">
            <i className="fas fa-envelope contact" />
          </a>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Links;
