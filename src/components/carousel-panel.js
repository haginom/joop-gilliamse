import * as React from "react";
import "../styles/layout.scss";
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
    <div id={id} className={`${backgroundColour} padding-extra-large carousel`}>
      <div className="mw-80 mx-auto h-100">
        <Row className="reasons-panel-heading">
          <h1 className="fredoka ms-lg-5 text-white ">{title}</h1>
        </Row>
        <Row className="my-2 mb-5 align-items-center reasons-panel-container">
          <Col xs={12} md={5} className="reasons-panel-image">
            {image}
            {photo && (
              <div className="photoBg">
                <GatsbyImage
                  alt=""
                  style={{
                    maxWidth: "475px",
                    maxHeight: "450px",
                    borderRadius: "46% 54% 51% 49%/46% 48% 52% 54%",
                    boxShadow: "19px 22px 8px 6px rgba(0,0,0,0.1)",
                  }}
                  imgStyle={{ width: "100%", height: "100%" }}
                  image={photo}
                />
              </div>
            )}
          </Col>
          <Col className="reasons-panel-text" xs={12} md={5} lg={{ offset: 1 }}>
            <h2 className=" text-start text-white fw-normal">{reason}</h2>

            <p className="reason text-white text-start">{text}</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
