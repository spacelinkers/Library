import React, { Fragment } from "react";

import {
  Button,
  UncontrolledAlert,
  Col,
  Row,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from "reactstrap";

const BANNER = "https://i.imgur.com/CaKdFMq.jpg";

const SideMultiBlogCard = () => (
  <Fragment>
    <Card style={{ height: 118, width: 362 }} className="mb-3">
      <Row noGutters>
        <Col lg={4} style={{ height: 118 }}>
          <CardImg
            style={{ height: 117, width: 120 }}
            src={BANNER}
            alt="banner"
          />
        </Col>
        <Col lg={8} style={{ height: 118 }}>
          <CardBody
            className="pt-2 pr-2 pb-2 pl-2"
            style={{ height: 117, width: 240 }}
          >
            <CardTitle className="p font-weight-bold">
              Python-Django tutorial with integrated React.
            </CardTitle>
          </CardBody>
        </Col>
      </Row>
    </Card>
  </Fragment>
);

export default SideMultiBlogCard;
