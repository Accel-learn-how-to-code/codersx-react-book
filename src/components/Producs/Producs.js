import React, { Component } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import { CardGroup } from "react-bootstrap";
import { Row } from "react-bootstrap";
import Cards from "../Cards/Cards";
import NavbarMain from '../NavbarMain/NavbarMain';

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
        <NavbarMain/>
        <Container>
          <Row className="mt-3">
            <CardGroup>
              {books.map((x, index) => (
                <Cards key={index} book={x} />
              ))}
            </CardGroup>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Producs;
