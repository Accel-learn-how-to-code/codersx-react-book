import React, { Component } from "react";
import axios from "axios";
import { Container, Pagination, CardGroup, Row } from "react-bootstrap";
import Cards from "../Cards/Cards";
import NavbarMain from "../NavbarMain/NavbarMain";
//import ReactPaginate from "react-paginate";

class Producs extends Component {
  state = {
    books: [],
    curentPage: 2,
    itemPerPage: 4,
  };

  changePage(newPage) {
    this.setState({
      curentPage: newPage
    });
  }

  componentDidMount() {
    axios
      .get(
        "https://my-json-server.typicode.com/Accel-learn-how-to-code/Express-Mongoose/books"
      )
      .then((res) => {
        const books = res.data;
        this.setState({
          books,
        });
      })
      .catch((error) => console.log(error));
  }

  render() {
    const { books, curentPage, itemPerPage } = this.state;
    const countPage = Math.ceil(books.length / itemPerPage);
    let begin = (curentPage - 1) * itemPerPage;
    let end = curentPage * itemPerPage;
    const showBooks = books.slice(begin, end);

    //count page
    let items = [];
    for (let number = 1; number <= countPage; number++) {
      items.push(
        <Pagination.Item
          key={number}
          active={number === curentPage}
          onClick={() => this.changePage(number)}
        >
          {number}
        </Pagination.Item>
      );
    }

    return (
      <div>
        <NavbarMain />
        <Container>
          <Row className="mt-3">
            <CardGroup>
              {showBooks.map((x, index) => (
                <Cards key={index} book={x} />
              ))}
            </CardGroup>
          </Row>
          <Pagination>{items}</Pagination>
        </Container>
      </div>
    );
  }
}

export default Producs;
