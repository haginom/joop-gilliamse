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
import { LanguageContext } from "../context/LanguageProvider";
import { useContext, useRef } from "react";
import { Helmet } from "react-helmet";
import PageContainer from "../components/pages";
import Footer from "../components/footer";

export default function Home({ data }) {
  const { getTranslation } = useContext(LanguageContext);

  const page1 = useRef();
  const page2 = useRef();
  const page3 = useRef();
  function scrollTo(section) {
    section.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }

  return (
    <>
      <Helmet>
        <title>Joop Gilliamse | Home</title>
      </Helmet>

      <div className="index-page-container">
        <div ref={page1}>
          <PageContainer
            goToSectionRef={page2}
            scrollTo={scrollTo}
            showArrow={true}
          >
            <Header data={data} landing />
            <Cover backgroundColour="bg-light" addClass=" " data={data}>
              <div className="hero-container position-relative">
                <div className="home-header-container">
                  <Row className="home-header-text mw-70 mx-auto mx-4">
                    <Col
                      lg={6}
                      className="align-self-center home-header-text-only"
                    >
                      <h1>{getTranslation("home_title")}</h1>

                      <h3>{getTranslation("home_subtitle")}</h3>
                    </Col>
                    <Col
                      lg={6}
                      className="my-4 align-self-center home-header-video-only"
                    >
                      <Video source={promoVideo} />
                    </Col>
                  </Row>
                  <Row className="card-container-wrapper">
                    <Cards data={data} />
                  </Row>
                </div>
              </div>
            </Cover>
          </PageContainer>
        </div>

        <div ref={page2}>
          <PageContainer
            goToSectionRef={page3}
            scrollTo={scrollTo}
            showArrow={true}
          >
            <div
              className={`hero-carousel overflow-hidden position-relative page second-page`}
            >
              <ReasonsCarousel data={data} />
            </div>
          </PageContainer>
        </div>

        <div ref={page3}>
          <PageContainer
            goToSectionRef={page1}
            scrollTo={scrollTo}
            showArrow={false}
          >
            <Cover
              header
              addClass="justify-content-center page third-page"
              background={"bg-light"}
              className="waves"
              backgroundColour="box"
            >
              <Container className="info-page aspect-ratio-inside">
                <div className="mt-5 pt-5 mb-2">
                  <Row xs={12}>
                    <h1 className="display-2 text-center">Joop Gilliamse</h1>
                  </Row>
                  <Row xs={12}>
                    <h2>
                      {getTranslation("cta_title")}{" "}
                      <Link to="contact"> {getTranslation("cta_action")}</Link>
                    </h2>
                  </Row>
                </div>
                <Row xs={12} className="mb-2">
                  <p>
                    Prins Hendrikkade 165E · 1011 TB Amsterdam · +31 (0) 20 548
                    499 86 · aanmelden@joopgilliamse.nl
                  </p>
                </Row>
              </Container>
            </Cover>
          </PageContainer>
        </div>
      </div>
      <Footer />
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
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
    childcare: file(relativePath: { eq: "childcare-square.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
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
    binnen: file(relativePath: { eq: "binnen-square.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
