import React from "react";
import NavbarMain from '../NavbarMain/NavbarMain';
import { Container } from "react-bootstrap";

function AboutMe(){
  return (
    <div>
      <NavbarMain/>
      <Container>
        <h1>Accel</h1>
        <p>Chẳng biết code chậm hay nhanh nữa</p>
      </Container>
    </div>
  );
};

export default AboutMe;
