import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Row, Col } from "react-bootstrap";
import Bird from "./bird";
import { LanguageContext } from "../context/LanguageProvider";
import { useContext } from "react";

export default function Cards({ data }) {
  const { getTranslation } = useContext(LanguageContext);

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
          <p className="cardText">{getTranslation("cards_one")}</p>
        </Col>
        <Col xs={6} s={4} md={2} className="card ">
          <GatsbyImage
            style={{
              margin: "1rem",
            }}
            objectFit="contain"
            image={data.placeholder.childImageSharp.gatsbyImageData}
          />
          <p className="cardText">{getTranslation("cards_two")}</p>
        </Col>
        <Col xs={6} s={4} md={2} className="card">
          <GatsbyImage
            style={{
              margin: "1rem",
            }}
            objectFit="contain"
            image={data.clock.childImageSharp.gatsbyImageData}
          />
          <p className="cardText">{getTranslation("cards_three")}</p>
        </Col>

        <Col xs={6} s={4} md={2} className="card">
          <GatsbyImage
            style={{
              margin: "1rem",
            }}
            objectFit="contain"
            image={data.boy.childImageSharp.gatsbyImageData}
          />
          <p className="cardText">{getTranslation("cards_four")}</p>
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
          <p className="cardText">{getTranslation("cards_five")}</p>
        </Col>
        <Col xs={6} s={4} md={2} className="card">
          <GatsbyImage
            style={{
              margin: "1rem",
            }}
            objectFit="contain"
            image={data.history.childImageSharp.gatsbyImageData}
          />
          <p className="cardText">{getTranslation("cards_six")}</p>
        </Col>
      </Row>
    </div>
  );
}
