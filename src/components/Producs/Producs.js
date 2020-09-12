import React, { Component } from "react";
import axios from "axios";
import logo from "../../logo.svg";
import { Container, Navbar } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import "./Producs.css";

class Producs extends Component {
  state = {
    books: [],
    isOpen: false,
  };

  componentDidMount() {
    axios
      .get(
        "https://my-json-server.typicode.com/Accel-learn-how-to-code/Express-Mongoose/books"
      )
      .then((res) => {
        const books = res.data;
        this.setState({ books });
      })
      .catch((error) => console.log(error));
  }

  setIsOpen() {
    this.setState({
      isOpen: true,
    });
  }

  render() {
    const { books } = this.state;
    return (
      <div>
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
        <Container>
          <Row>
            <CardGroup>
              {books.map((x, index) => 
                <Col xs={6} md={3}>
                  <Card>
                    <Card.Img variant="top" src='https://picsum.photos/200/300' height={200} width={300} />
                    <Card.Body>
                      <Card.Title>{x.title}</Card.Title>
                      <Card.Text>
                        {x.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              )}
            </CardGroup>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Producs;
