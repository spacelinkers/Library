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
  CardText,
  Table
} from "reactstrap";

const BANNER = "https://i.imgur.com/CaKdFMq.jpg";

class Footer extends Component {
  render() {
    return (
      <Fragment>
        <Row noGutters>
          <Col lg={3}>
            <Table borderless className="footer-text">
              <thead>
                <tr>
                  <h1 className="footer-text">Book-Ink</h1>
                </tr>
                <tr>
                  <a href="#" className="footer-text">
                    <i class="fa fa-twitter fa-2x" />
                    Twiter
                  </a>
                </tr>
                <tr>
                  <a href="#" className="footer-text">
                    <i class="fa fa-flickr fa-2x" /> Flicker
                  </a>
                </tr>

                <tr>
                  <a href="#" className="footer-text">
                    <i class="fa fa-linkedin fa-2x" /> Linkedin
                  </a>
                </tr>
                <tr>
                  <a>© All rights reserved by Hasan.</a>
                </tr>
              </thead>
            </Table>
          </Col>
          <Col lg={3}>
            <Table borderless className="footer-text">
              <thead>
                <tr>
                  <h5 className="footer-text">ABOUT US</h5>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <a href="#" className="footer-text">
                    About
                  </a>
                </tr>
                <tr>
                  <a href="#" className="footer-text">
                    Career
                  </a>
                </tr>
                <tr>
                  <a href="#" className="footer-text">
                    For the Press
                  </a>
                </tr>
                <tr>
                  <a href="#" className="footer-text">
                    Privacy Policy
                  </a>
                </tr>
                <tr>
                  <a href="#" className="footer-text">
                    Tearms of Service
                  </a>
                </tr>
                <tr>
                  <a href="#" className="footer-text">
                    Contact
                  </a>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col lg={3}>
            <Table borderless className="footer-text">
              <thead>
                <tr>
                  <h5 className="footer-text">AUTHORS</h5>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <a href="#" className="footer-text">
                    Partners Overview
                  </a>
                </tr>
                <tr>
                  <a href="#" className="footer-text">
                    Partner Dashboard
                  </a>
                </tr>
                <tr>
                  <a href="#" className="footer-text">
                    Claim an Author Profile
                  </a>
                </tr>
                <tr>
                  <a href="#" className="footer-text">
                    Partner FAQ
                  </a>
                </tr>
              </tbody>
            </Table>
          </Col>
          <Col lg={3}>
            <Table borderless className="footer-text">
              <thead>
                <tr>
                  <h5 className="footer-text">READERS</h5>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <a href="#" className="footer-text">
                    What is BookBub?
                  </a>
                </tr>
                <tr>
                  <a href="#" className="footer-text">
                    In the News
                  </a>
                </tr>
                <tr>
                  <a href="#" className="footer-text">
                    Free Ebooks
                  </a>
                </tr>
                <tr>
                  <a href="#" className="footer-text">
                    Invite Your Friends
                  </a>
                </tr>
                <tr>
                  <a href="#" className="footer-text">
                    Help
                  </a>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default Footer;
