import React, { Component, Fragment } from "react";
import { Button, Container, Row, Col, Card, Table } from "reactstrap";

class BooksOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookNo: []
    };
  }

  componentDidMount() {
    this.getBook();
  }

  getBook() {
    fetch(
      `http://127.0.0.1:8000/bookshelf/all/${this.props.match.params.bookId}`
    )
      .then(book => book.json())
      .then(book => this.setState({ bookNo: book }));
  }

  render() {
    var text = this.state.bookNo.bookSummary;
    return (
      <Fragment>
        <main className="Bsection">
          <Container className="px-0">
            <Row noGutters>
              <Col lg={3}>
                <Card style={{ height: 410, width: 260 }} className="mb-3">
                  <img
                    src={this.state.bookNo.bookImage}
                    alt=""
                    height="410"
                    width="260"
                  />
                </Card>
              </Col>
              <Col lg={6}>
                <div>
                  <h3>{this.state.bookNo.title}</h3>
                  <hr />
                  <p dangerouslySetInnerHTML={{ __html: text }} />
                  <hr />
                  <p>Catagory: Action</p>
                </div>
              </Col>
              <Col lg={3} className="pl-5">
                <Card style={{ height: 340, width: 260 }} className="mb-3" />
              </Col>
            </Row>
          </Container>
        </main>
      </Fragment>
    );
  }
}

export default BooksOne;
