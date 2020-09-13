import React from "react";
import logo from "../../logo.svg";
import { Navbar, Nav } from "react-bootstrap";
// import {
//   BrowserRouter as Switch,
//   Route,
//   Link,
//   useRouteMatch,
// } from "react-router-dom";
// import Products from "../Producs/Producs";
// import Books from "../Books/Books";
// import AboutMe from "../AboutMe/AboutMe";

function NarbarMain() {
  //let match = useRouteMatch();
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
        Bookstore
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/books">Books</Nav.Link>
        <Nav.Link href="/info">About Me</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NarbarMain;
