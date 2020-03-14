import React, { Component, Fragment } from "react";

import {
  withRouter,
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

import { Button, Container, Row, Col, Card } from "reactstrap";

class AuthorBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBooksList: []
    };
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    fetch(`http://127.0.0.1:8000/bookshelf/booksbyauthor/${this.props.pk}`)
      .then(books => books.json())
      .then(books => this.setState({ allBooksList: books }));
  }

  render() {
    return this.state.allBooksList.map(allBooks => (
      <Row noGutters>
        <Col className="pt-2 pb-2">
          <Card style={{ height: 164, width: 110 }} className="mb-3 ml-2">
            <Link to={`books/${allBooks.id}`}>
              <img src={allBooks.bookImage} alt="" width="110" height="164" />
            </Link>
          </Card>
        </Col>
      </Row>
    ));
  }
}

export default AuthorBook;
