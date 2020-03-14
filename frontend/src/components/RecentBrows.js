import React, { Component, Fragment } from "react";

import {
  Button,
  UncontrolledAlert,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from "reactstrap";

import {
  withRouter,
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

class RecentBrows extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksList: []
    };
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    fetch("http://127.0.0.1:8000/bookshelf/books/")
      .then(books => books.json())
      .then(books => this.setState({ booksList: books }));
  }

  render() {
    return (
      <Fragment>
        <Row noGutters>
          {this.state.booksList.map(function(booksList, index) {
            return (
              <Col>
                <Card style={{ height: 187, width: 125 }} className="mb-3">
                  <Link to={`books/${booksList.id}`}>
                    <img
                      src={booksList.bookImage}
                      alt=""
                      width="125"
                      height="187"
                    />
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Fragment>
    );
  }
}

export default RecentBrows;
