import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Row, Col } from "react-bootstrap";
import Bird from "./bird";

export default function Cards({ data }) {
  return (
    <div className="cardContainer mt-2 mw-70 mb-2">
      <div className="pokingCardBird">
        <Bird color="cls-b0" border="cls-b1" />
      </div>
      <Row className="cardList">
        <Col xs={6} s={4} md={2} className="card">
          <GatsbyImage
            style={{
              margin: "1rem",
            }}
            objectFit="contain"
            image={data.lightbulb.childImageSharp.gatsbyImageData}
          />
          <p className="cardText">Parent-led nursery</p>
        </Col>
        <Col xs={6} s={4} md={2} className="card ">
          <GatsbyImage
            style={{
              margin: "1rem",
            }}
            objectFit="contain"
            image={data.placeholder.childImageSharp.gatsbyImageData}
          />
          <p className="cardText">Prins Hendrikkade</p>
        </Col>
        <Col xs={6} s={4} md={2} className="card">
          <GatsbyImage
            style={{
              margin: "1rem",
            }}
            objectFit="contain"
            image={data.clock.childImageSharp.gatsbyImageData}
          />
          <p className="cardText">
            Open 9-4pm
            <br />4 days week
          </p>
        </Col>

        <Col xs={6} s={4} md={2} className="card">
          <GatsbyImage
            style={{
              margin: "1rem",
            }}
            objectFit="contain"
            image={data.boy.childImageSharp.gatsbyImageData}
          />
          <p className="cardText">8 Families</p>
          <p></p>
        </Col>
        <Col xs={6} s={4} md={2} className="card">
          <GatsbyImage
            style={{
              margin: "1rem",
            }}
            objectFit="contain"
            image={data.money.childImageSharp.gatsbyImageData}
          />
          <p className="cardText">180 Euros/month</p>
        </Col>
        <Col xs={6} s={4} md={2} className="card">
          <GatsbyImage
            style={{
              margin: "1rem",
            }}
            objectFit="contain"
            image={data.history.childImageSharp.gatsbyImageData}
          />
          <p className="cardText">Open since 1982</p>
        </Col>
      </Row>
    </div>
  );
}
