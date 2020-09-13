import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";
import { Col } from "react-bootstrap";

function Cards(props) {
  const { book } = props;
  return (
    <Col key={props.index}>
      <Card>
        <Card.Img
          variant="top"
          src="https://picsum.photos/200/300"
          height={200}
          width={300}
        />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

Cards.popTypes = {
  key: PropTypes.number,
  book: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default Cards;
