import React from "react";
import { Media, Container } from "reactstrap";

const Header = props => (
  <Container>
    <Media>
      <Media body>
        <Media heading>Hi there! Looking for me?</Media>
      </Media>
      <Media right>
        <Media object src="https://media.licdn.com/dms/image/C4E03AQHAQr96HBXR9g/profile-displayphoto-shrink_100_100/0?e=1560384000&v=beta&t=9gs0l8RtZAybnQMNdBEEiQxFKd82sV-2_STNQaIP1ns" alt="headshot" className="headshot"/>
      </Media>
    </Media>
  </Container>
);

export default Header;
