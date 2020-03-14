import React, { Component, Fragment } from "react";
import axios from "axios";
import { Container, Row, Col, Table } from "reactstrap";

import LowerHeader from "../components/LowerHeader.js";
import BooksList from "../components/BooksList.js";

class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allcatagoreis: []
    };
  }

  componentDidMount() {
    this.getCatagoties();
  }

  getCatagoties() {
    fetch("http://127.0.0.1:8000/bookshelf/catagory/")
      .then(catagory => catagory.json())
      .then(catagory => this.setState({ allcatagoreis: catagory }));
  }

  render() {
    const lowerHeaderString = "Books";
    return (
      <Fragment>
        <main className="BsectionLowHeader">
          <Container className="px-0">
            <LowerHeader lowerHeaderString={lowerHeaderString} />
          </Container>
        </main>

        <main className="Bsection">
          <Container className="px-0">
            <Row noGutters>
              <Col lg={9}>
                <h5>List of All Books</h5>
                <hr />
                <BooksList />
              </Col>
              <Col lg={3} className="pl-5">
                <Table borderless>
                  <thead>
                    <tr>
                      <h5>Catagoreis</h5>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.allcatagoreis.map(function(
                      allcatagoreis,
                      index
                    ) {
                      return (
                        <tr>
                          <a href="#">{allcatagoreis.catagory_name}</a>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </main>
      </Fragment>
    );
  }
}

export default Books;

// Advice and How-To
// African American Interest
// American Historical Romance

// Chick Lit

// Christian Fiction
// Christian Nonfiction
// Contemporary Romance
// Cooking
// Cozy Mysteries
// Crime Fiction
// Dark Romance & Erotica
// Erotic Romance

// General Nonfiction
// Historical Fiction
// Historical Mysteries
// Historical Romance

// Humor
// LGBT
// Literary Fiction
// Middle Grade
// New Adult Romance
// Paranormal Romance
// Parenting
// Politics and Current Events
// Psychological Thrillers

// Romantic Suspense

// Supernatural Suspense
// Teen and Young Adult

// Time Travel Romance
// True Crime
