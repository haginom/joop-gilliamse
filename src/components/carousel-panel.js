import * as React from "react";
import "../styles/layout.scss";
import Cover from "./cover";
import { Row, Col, Container } from "react-bootstrap";
import { GatsbyImage } from "gatsby-plugin-image";

export default function CarouselPanel({
  id,
  backgroundColour,
  title,
  reason,
  text,
  image,
  photo,
}) {
  return (
    <Cover id={id} backgroundColour={backgroundColour}>
      <Container className="mw-70">
        <Row className="mb-4">
          <h1 className="fredoka ms-lg-5 text-white mt-2">{title}</h1>
        </Row>
        <Row className="my-2 mb-5 align-items-center justify-content-center">
          <Col xs={12} md={5}>
            {image}
            {photo && (
              <GatsbyImage
                style={{
                  borderRadius: "46% 54% 51% 49%/46% 48% 52% 54%",
                  width: "325px",
                  height: "325px",
                  boxShadow: "19px 22px 8px 6px rgba(0,0,0,0.1)",
                }}
                imgStyle={{}}
                image={photo}
              />
            )}
          </Col>
          <Col className="my-5 mb-5" xs={10} md={5} lg={{ offset: 1 }}>
            <h2 className=" text-start text-white display-4 fw-normal">
              {reason}
            </h2>

            <p className="reason text-white text-start">{text}</p>
          </Col>
        </Row>
      </Container>
    </Cover>
  );
}
