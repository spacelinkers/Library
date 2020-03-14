import React, { Fragment } from "react";

import {
  Button,
  UncontrolledAlert,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from "reactstrap";

const BANNER = "https://i.imgur.com/CaKdFMq.jpg";

const SideBlogCard = () => (
  <Fragment>
    <Card style={{ height: 386, width: 362 }} className="mb-3">
      <CardImg style={{ height: 193, width: 361 }} src={BANNER} alt="banner" />
      <CardBody>
        <CardTitle className="p pt-2 font-weight-bold">Glad Chinda</CardTitle>
        <CardText
          className="text-secondary mb-4"
          style={{ fontSize: "0.75rem" }}
        >
          Full-stack web developer learning new hacks one day at a time. Web
          technology enthusiast. Hacking stuffs @theflutterwave.
        </CardText>
        <hr />
      </CardBody>
    </Card>
  </Fragment>
);

export default SideBlogCard;
