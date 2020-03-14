import React, { Component, Fragment } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";

import LowerHeader from "../components/LowerHeader.js";
import SideBlogCard from "../components/SideBlogCard.js";

class Blogs extends Component {
  render() {
    const lowerHeaderString = "Book-Ink Blog";
    return (
      <Fragment>
        <main className="BsectionLowHeader">
          <Container className="px-0">
            <LowerHeader lowerHeaderString={lowerHeaderString} />
          </Container>
        </main>
        <main className="Bsection">
          <Container className="px-0">
            <h5>Latest Blog Articles</h5>
            <Row noGutters>
              <Col
                xs={{ order: 2 }}
                md={{ size: 4, order: 1 }}
                tag="aside"
                className="pr-3 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0"
              >
                <a className="bloglink" href="#">
                  <SideBlogCard />
                </a>
              </Col>
              <Col
                xs={{ order: 2 }}
                md={{ size: 4, order: 1 }}
                tag="aside"
                className="pr-3 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0"
              >
                <a className="bloglink" href="#">
                  <SideBlogCard />
                </a>
              </Col>
              <Col
                xs={{ order: 2 }}
                md={{ size: 4, order: 1 }}
                tag="aside"
                className="pr-3 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0"
              >
                <a className="bloglink" href="#">
                  <SideBlogCard />
                </a>
              </Col>
            </Row>
            <Row noGutters>
              <Col
                xs={{ order: 2 }}
                md={{ size: 4, order: 1 }}
                tag="aside"
                className="pr-3 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0"
              >
                <a className="bloglink" href="#">
                  <SideBlogCard />
                </a>
              </Col>
              <Col
                xs={{ order: 2 }}
                md={{ size: 4, order: 1 }}
                tag="aside"
                className="pr-3 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0"
              >
                <a className="bloglink" href="#">
                  <SideBlogCard />
                </a>
              </Col>
              <Col
                xs={{ order: 2 }}
                md={{ size: 4, order: 1 }}
                tag="aside"
                className="pr-3 mb-5 pb-md-0 mb-md-0 mx-auto mx-md-0"
              >
                <a className="bloglink" href="#">
                  <SideBlogCard />
                </a>
              </Col>
            </Row>
          </Container>
        </main>
      </Fragment>
    );
  }
}

export default Blogs;
