import * as React from "react";
import { graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import Cover from "../components/cover";
import ReasonsCarousel from "../components/carousel";
import Header from "../components/header";
import Cards from "../components/cards";
import { Container, Row, Col } from "react-bootstrap";
import Video from "../components/video";
import promoVideo from "../video/Joop Gilliamse - Kleinste oudercreche van Nederland.mp4";
import { Link } from "gatsby";

export default function Home({ data }) {
  return (
    <>
      <Header data={data} landing />
      <Cover backgroundColour="bg-light" data={data}>
        <Row className="mw-70 mx-auto h-75 px-5 px-xs-3">
          <Col md={6} className="align-self-center p-4 pe-5">
            <h1>A Parent-led Creche in the Centre of Amsterdam</h1>

            <h3>Open since 1982.</h3>
          </Col>
          <Col md={6} className="my-3 align-self-center">
            <Video source={promoVideo} />
          </Col>
        </Row>

        <Cards data={data} />
      </Cover>
      <ReasonsCarousel data={data} />
      <Cover
        header
        addClass="header"
        background={"bg-light"}
        className="waves"
        backgroundColour="box"
      >
        <Container className="info-page">
          <div className="mt-5 pt-5 mb-2">
            <Row xs={12}>
              <h1 className="display-2">Joop Gilliamse</h1>
            </Row>
            <Row xs={12}>
              <h2>
                Want to visit? <Link to="contact">Contact us.</Link>
              </h2>
            </Row>
          </div>
          <Row xs={12} className="mb-2">
            <p>
              Prins Hendrikkade 165E · 1011 TB Amsterdam · +31 (0) 20 548 499 86
              · aanmelden@joopgilliamse.nl
            </p>
          </Row>
        </Container>
      </Cover>
    </>
  );
}

export const query = graphql`
  {
    logo: file(relativePath: { eq: "logo.png" }) {
      childImageSharp {
        gatsbyImageData(width: 160)
      }
    }
    community: file(relativePath: { eq: "community.png" }) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
    childcare: file(relativePath: { eq: "childcare.jpeg" }) {
      childImageSharp {
        gatsbyImageData(width: 450)
      }
    }
    clock: file(relativePath: { eq: "icon-clock.png" }) {
      childImageSharp {
        gatsbyImageData(width: 40)
      }
    }
    lightbulb: file(relativePath: { eq: "icon-lightbulb.png" }) {
      childImageSharp {
        gatsbyImageData(width: 40)
      }
    }
    placeholder: file(relativePath: { eq: "placeholder.png" }) {
      childImageSharp {
        gatsbyImageData(width: 40)
      }
    }
    boy: file(relativePath: { eq: "boy.png" }) {
      childImageSharp {
        gatsbyImageData(width: 40)
      }
    }
    money: file(relativePath: { eq: "money.png" }) {
      childImageSharp {
        gatsbyImageData(width: 40)
      }
    }
    history: file(relativePath: { eq: "history.png" }) {
      childImageSharp {
        gatsbyImageData(width: 40)
      }
    }
    binnen: file(relativePath: { eq: "binnen.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
  }
`;
