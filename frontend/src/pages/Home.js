import React, { Component, Fragment } from "react";
import axios from "axios";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import Post from "../components/Post.js";

import SideCard from "../components/SideCard.js";
import BookReco from "../components/BookReco.js";
import LowerHeader from "../components/LowerHeader.js";
import CategoriesChoice from "../components/CategoriesChoice.js";
import SideBlogCard from "../components/SideBlogCard.js";
import SideMultiBlogCard from "../components/SideMultiBlogCard.js";
import WriterReco from "../components/WriterReco.js";
import NewRelease from "../components/NewRelease.js";
import RecentBrows from "../components/RecentBrows.js";

class Home extends Component {
  render() {
    const lowerHeaderString = "News for You";
    return (
      <Fragment>
        <main className="BsectionLowHeader">
          <Container className="px-0">
            <LowerHeader lowerHeaderString={lowerHeaderString} />
          </Container>
        </main>

        <main className="Book-rec">
          <BookReco />
        </main>

        <main className="Bsection">
          <Container className="px-0">
            <CategoriesChoice />
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
                <Row noGutters>
                  <SideMultiBlogCard />
                </Row>
                <Row noGutters>
                  <SideMultiBlogCard />
                </Row>
                <Row noGutters>
                  <SideMultiBlogCard />
                </Row>
              </Col>
            </Row>
            <a href="/blog">View All Articles</a>
          </Container>
        </main>

        <main className="Bsection">
          <Container className="px-0">
            <h5>Recommenders You May Like</h5>
            <WriterReco />
            <a href="/authors">View All</a>
          </Container>
        </main>

        <main className="Bsection">
          <Container className="px-0">
            <h5>Editors' Picks: New Releases in Your Categories</h5>
            <NewRelease />
            <Link to={`books/`}>View All New Releases</Link>
          </Container>
        </main>
        <main className="BsectionFooterUp">
          <Container className="px-0">
            <h5 className="footer-text">Recently Browsed</h5>
            <RecentBrows />
          </Container>
        </main>

        <footer />
      </Fragment>
    );
  }
}

export default Home;
