import React from "react";
import Typist from "react-typist";
import { Media, Container } from "reactstrap";

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
        <Media object src="https://media.licdn.com/dms/image/C4E03AQGx11xZzZa9qg/profile-displayphoto-shrink_200_200/0?e=1561593600&v=beta&t=VG0e0mJldVxYqNPr2CiuqF_iG6axjgzwaoOmADG0U-k" alt="headshot" className="headshot"/>
      </Media>
    </Media>
  </Container>
);

export default Header;
