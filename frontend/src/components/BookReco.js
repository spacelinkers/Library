import React, { Component } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Row,
  Col,
  Card,
  Container
} from "reactstrap";
import {
  withRouter,
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from "react-router-dom";

class BookReco extends Component {
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
      <Card style={{ width: 1348, height: 480, background: "#043045" }}>
        <Container className="px-0 pt-4">
          <Row noGutters>
            <Col>
              <div>
                <h5 className="footer-text">View all Recomendation</h5>
              </div>
            </Col>
            <Col>
              <i className="left-arrow" />
              <i className="right-arrow" />
            </Col>
          </Row>
          <Row noGutters className="pt-2">
            {this.state.booksList.map(function(booksList, index) {
              return (
                <Col>
                  <Card
                    style={{ height: 260, width: 173, background: "#043045" }}
                    className="mb-3"
                  >
                    <Link to={`books/${booksList.id}`}>
                      <img
                        src={booksList.bookImage}
                        alt=""
                        height="260"
                        width="173"
                      />
                    </Link>
                  </Card>
                  <a href="#" className="footer-text">
                    Link
                  </a>
                  <br />
                  <a href="#" className="footer-text">
                    Link
                  </a>
                </Col>
              );
            })}
          </Row>
          <div className="pt-4">
            <Link to={`books/`}>See All Books</Link>
          </div>
        </Container>
      </Card>
    );
  }
}

export default BookReco;
