import React, { Component, Fragment } from "react";
import axios from "axios";
import {
  withRouter,
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from "react-router-dom";
import Books from "../pages/Books.js";

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

class WriterReco extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorsList: []
    };
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    fetch("http://127.0.0.1:8000/bookshelf/writerreco/")
      .then(books => books.json())
      .then(books => this.setState({ authorsList: books }));
  }

  render() {
    return (
      <Fragment>
        <Row noGutters>
          {this.state.authorsList.map(function(authorsList, index) {
            return (
              <Col>
                <Card style={{ height: 211, width: 270 }} className="mb-3">
                  <div className="p-3">
                    <Row noGutters>
                      <Col xs="3">
                        <div className="author-design">Author</div>
                      </Col>
                      <Col className="pl-3">
                        <Link to={`authors/${authorsList.id}`}>
                          <img
                            className="rounded-circle"
                            src={authorsList.authorImage}
                            alt=""
                            width="80"
                            height="80"
                          />
                        </Link>
                      </Col>
                    </Row>

                    <div className="pt-2 text-center">
                      <h5>{authorsList.author}</h5>
                      <Button className="mt-3 author-Follow-button">
                        Follow
                      </Button>
                    </div>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Fragment>
    );
  }
}

export default WriterReco;
