import React, { Component, Fragment } from "react";
import { Button, Container, Row, Col, Card } from "reactstrap";

class AuthorOne extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authorDet: []
    };
  }

  componentDidMount() {
    this.getAuthor();
  }

  getAuthor() {
    fetch(
      `http://127.0.0.1:8000/bookshelf/allauthors/${
        this.props.match.params.authorId
      }`
    )
      .then(author => author.json())
      .then(author => this.setState({ authorDet: author }));
  }

  render() {
    var text = this.state.authorDet.authorSummary;
    return (
      <Fragment>
        <main className="BsectionLowHeader">
          <Container className="px-0">
            <Row noGutters>
              <Col xs="2">
                <img
                  src={this.state.authorDet.authorImage}
                  className="rounded-circle"
                  alt=""
                  width="180"
                  height="180"
                />
              </Col>
              <Col xs="6">
                <h2>{this.state.authorDet.author}</h2>
                <div className="author-design">Author</div>
              </Col>
              <Col xs="4">
                <div className="pt-2 text-center">
                  <Button
                    style={{ margin: 100, position: "absolute" }}
                    className="mt-3 author-Follow-button"
                  >
                    Follow
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </main>
        <main className="Bsection">
          <Container>
            <p>ABOUT THE AUTHOR</p>
            <p dangerouslySetInnerHTML={{ __html: text }} />
          </Container>
        </main>
      </Fragment>
    );
  }
}

export default AuthorOne;
