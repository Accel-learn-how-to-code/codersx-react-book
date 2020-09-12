import React, { Component } from "react";
import PropTypes from 'prop-types';
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";

class Cards extends Component {

  render() {
    const { book } = this.props;
    return (
        <Col xs={6} md={3} key={this.props.index}>
          <Card>
            <Card.Img variant="top" src='https://picsum.photos/200/300' height={200} width={300} />
            <Card.Body>
              <Card.Title>{book.title}</Card.Title>
              <Card.Text>
                {book.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    );
  }
};

Cards.popTypes = {
  key: PropTypes.number,
  book: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string
  })
};

export default Cards;
