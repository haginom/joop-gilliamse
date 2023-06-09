import * as React from "react";
import { graphql } from "gatsby";
import Header from "../components/header";
import { GatsbyImage } from "gatsby-plugin-image";
import Accordion from "react-bootstrap/Accordion";
import { Container } from "react-bootstrap";
import { LanguageContext } from "../context/LanguageProvider";
import { useContext } from "react";

export default function AboutUs({ data }) {
  const { getTranslation } = useContext(LanguageContext);

  return (
    <>
      <Header />
      <div className="ourStory p-3" backgroundColour="bg-success" data={data}>
        <Container className="mw-60">
          <div className="aboutUsWrapper">
            <h1 className="mt-4">{getTranslation("about_us_title")}</h1>
            <p className="mt-4 text-left">{getTranslation("our_story_one")}</p>
            <GatsbyImage
              className="mx-auto"
              image={data.oudeFoto.childImageSharp.gatsbyImageData}
            />

            <p className="mt-4 text-left">{getTranslation("our_story_two")} </p>

            <p className="my-4 text-left">
              {getTranslation("our_story_three")}
            </p>
          </div>
        </Container>
      </div>

      <div
        className="faqs mw-60 mx-auto p-3"
        backgroundColour="bg-primary"
        data={data}
      >
        <Container>
          <h1 className="mt-4">{getTranslation("faqs")}</h1>

          <Accordion className="my-5" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>{getTranslation("faqs_one")}</Accordion.Header>
              <Accordion.Body>{getTranslation("faqs_one_a")} </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>{getTranslation("faqs_two")}</Accordion.Header>
              <Accordion.Body>{getTranslation("faqs_two_a")}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                {getTranslation("faqs_three")}
              </Accordion.Header>
              <Accordion.Body>{getTranslation("faqs_three_a")}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>{getTranslation("faqs_four")}</Accordion.Header>
              <Accordion.Body>{getTranslation("faqs_four_a")}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>{getTranslation("faqs_five")}</Accordion.Header>
              <Accordion.Body>{getTranslation("faqs_five_a")}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>{getTranslation("faqs_six")}</Accordion.Header>
              <Accordion.Body>{getTranslation("faqs_six_a")}</Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                {getTranslation("faqs_seven")}
              </Accordion.Header>
              <Accordion.Body>{getTranslation("faqs_seven_a")} </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
      <div className="aboutUsSection p-3" data={data}>
        {" "}
        <Container className="mw-60">
          {" "}
          <h1 className="mt-4">Reports</h1>
          <p>See here the latest reports from the GGD:</p>
        </Container>
      </div>
    </>
  );
}

export const query = graphql`
  {
    oudeFoto: file(relativePath: { eq: "oude-JG-foto.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 400)
      }
    }
  }
`;
