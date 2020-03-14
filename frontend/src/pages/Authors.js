import React, { Component, Fragment } from "react";
import {
  withRouter,
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

import LowerHeader from "../components/LowerHeader.js";
import AuthorBook from "../components/AuthorBook.js";

import { Button, Container, Row, Col, Card } from "reactstrap";

class Authors extends Component {
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

  // routeChange() {
  //   let path = `/books`;
  //   this.props.history.push(path);
  //   this.routeChange = this.routeChange.bind(this);
  // }

  render() {
    var linkList = this.state.allBooksList.map(allBooks => (
      <Col>
        <Card
          style={{ marginLeft: 170, height: 400, width: 800 }}
          className="mb-3"
        >
          <div className="p-3">
            <Row noGutters>
              <Col xs="2" className="pl-3">
                <Link to={`authors/${allBooks.author.id}`}>
                  <img
                    className="rounded-circle"
                    src={allBooks.author.authorImage}
                    alt=""
                    width="80"
                    height="80"
                  />
                </Link>
              </Col>
              <Col xs="7">
                <h5>
                  <Link to={`authors/${allBooks.author.id}`}>
                    {allBooks.author.author}
                  </Link>
                </h5>
                <div className="author-design">Author</div>
              </Col>
              <Col xs="3">
                <div className="pt-2 text-center">
                  <Button className="mt-3 author-Follow-button">Follow</Button>
                </div>
              </Col>
            </Row>
            <hr />
            <Row noGutters>
              <AuthorBook pk={allBooks.author.id} />
            </Row>
            <hr />
          </div>
        </Card>
      </Col>
    ));

    const lowerHeaderString = "Authors";
    return (
      <Fragment>
        <main className="BsectionLowHeader">
          <Container className="px-0">
            <LowerHeader lowerHeaderString={lowerHeaderString} />
          </Container>
        </main>
        <main className="Bsection">
          <Container className="px-0">
            <Row noGutters>{linkList}</Row>
          </Container>
        </main>
        <main>
          <Container className="px-0">
            <Row noGutters>
              <Button
                outline
                color="success"
                size="lg"
                className="mb-3"
                style={{ position: "relative", left: 510 }}
              >
                Show More
              </Button>
            </Row>
          </Container>
        </main>
      </Fragment>
    );
  }
}

export default Authors;
