import React, { Component, Fragment } from "react";
import HTMLEllipsis from "react-lines-ellipsis/lib/html";
import {
  withRouter,
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";
import { Button, Container, Col, Row, Card } from "reactstrap";

class BooksList extends Component {
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
    fetch("http://127.0.0.1:8000/bookshelf/all/")
      .then(books => books.json())
      .then(books => this.setState({ allBooksList: books }));
  }
  render() {
    return (
      <Fragment>
        <div className="mr-4 pb-4">
          {this.state.allBooksList.map(function(allBooksList, index) {
            var text = allBooksList.bookSummary;
            return (
              <Row noGutters>
                <Col lg={3}>
                  <Card
                    style={{ height: 283, width: 176.6667 }}
                    className="mb-3"
                  >
                    <Link to={`books/${allBooksList.id}`}>
                      <img
                        src={allBooksList.bookImage}
                        alt=""
                        height="283"
                        width="176.6667"
                      />
                    </Link>
                  </Card>
                </Col>
                <Col lg={9}>
                  <div>
                    <Link to={`books/${allBooksList.id}`}>
                      <h4>{allBooksList.title}</h4>
                    </Link>
                    <Link to={`authors/${allBooksList.author.id}`}>
                      <h6 class="text-secondary">
                        by {allBooksList.author.author}
                      </h6>
                    </Link>
                    <HTMLEllipsis
                      unsafeHTML={text}
                      maxLine="3"
                      ellipsis="..."
                      trimRight
                      basedOn="letters"
                    />
                    <p>
                      <Link to={`books/${allBooksList.id}`}>Show more</Link>
                    </p>
                    <Button className="mt-3 author-Follow-button">Like</Button>
                    <p>Catagory: Action</p>
                    <br />
                  </div>
                </Col>
              </Row>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

export default BooksList;
