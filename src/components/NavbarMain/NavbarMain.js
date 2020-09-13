import React, { Component } from "react";
import logo from "../../logo.svg";
import { Navbar } from "react-bootstrap";

function NarbarMain() {

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
          React Bootstrap
        </Navbar.Brand>
    </Navbar>
  );
}

export default NarbarMain;
