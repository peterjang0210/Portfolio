import React from "react";
import Typist from "react-typist";
import { Media, Container } from "reactstrap";
import headshot from "../../../src/headshot.JPG";

const Header = props => (
  <Container>
    <Media>
      <Media body>
        <Media heading><Typist
        avgTypingDelay={90}
        cursor={{ hideWhenDone: true, hideWhenDoneDelay: 0 }}
        startDelay={500}
      >
        Hi, I'm Peter. I'm a full-stack web developer.
      </Typist></Media>
      </Media>
      <Media right>
        <Media object src={headshot} alt="headshot" className="headshot"/>
      </Media>
    </Media>
  </Container>
);

export default Header;
