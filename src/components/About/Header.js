import React from "react";
import { Media, Container } from "reactstrap";

const Header = props => (
  <Container>
    <Media>
      <Media body>
        <Media heading>Hi there! Looking for me?</Media>
      </Media>
      <Media right>
        <Media object data-src="" alt="headshot" />
      </Media>
    </Media>
  </Container>
);

export default Header;
