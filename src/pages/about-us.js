import * as React from "react";
import { graphql } from "gatsby";
import Header from "../components/header";
import { GatsbyImage } from "gatsby-plugin-image";
import Accordion from "react-bootstrap/Accordion";
import { Container } from "react-bootstrap";

export default function OurStory({ data }) {
  return (
    <>
      <Header />
      <div className="ourStory p-3" backgroundColour="bg-success" data={data}>
        <Container className="mw-60">
          <div className="aboutUsWrapper">
            <h1 className="mt-4">Our Story</h1>
            <p className="mt-4 text-left">
              The Joop Gilliamse parent participation crèche is the smallest
              parent participation crèche in the Netherlands and is named after
              the first boy who took part in this special form of childcare in
              1982.
            </p>
            <GatsbyImage
              className="mx-auto"
              image={data.oudeFoto.childImageSharp.gatsbyImageData}
            />

            <p className="mt-4 text-left">
              The association was set up for and by parents to allow their
              children to grow up, learn and live together in a crèche. to play.
            </p>

            <p className="my-4 text-left">
              The crèche is registered with the Chamber of Commerce and has a
              board consisting of a chairman, a treasurer and possibly a
              secretary, who are also participating parents at the crèche.
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
          <h1 className="mt-4">FAQs</h1>

          <Accordion className="my-5" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                Is there a minimum age to join?
              </Accordion.Header>
              <Accordion.Body>
                Joop Gilliamse is for children between 1 and 4 years old.
                Children joining the creche are expected to be able to walk.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                How much time should I expect to dedicate to the creche?
              </Accordion.Header>
              <Accordion.Body>
                Parents are expected to be available one day a week to care for
                the children. Eech parent has a fixed task in addition to weekly
                shift. Think of: treasurer, chairman, grocery shopping,
                management of registrations, maintenance of the garden etc. In
                addition, there are monthly meetings done usually online and
                sometimes in person. Occasionally there are "DIY days" and
                Parties.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Can I share my responsibilities at the creche with my partner?
              </Accordion.Header>
              <Accordion.Body>
                Yes. Both parents, where possible, are encouraged to partake in
                creche life, however it is not also necessary.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Can I apply for toeslag?</Accordion.Header>
              <Accordion.Body>
                U heeft ook recht op het aanvragen van kinderopvangtoeslag omdat
                de Joop Gilliamse een volledig erkende crèche is (GGD).
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>When is the creche open?</Accordion.Header>
              <Accordion.Body>
                The creche is open Monday, Tuesday, Thursday and Friday between
                9:00 - 16:00. The Joop Gilliamse uses the same vacation days as
                a primary school (in North Holland): Please note that the
                parental contribution will continue to be paid during the
                holidays (including the summer holidays).
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Are you inspected?</Accordion.Header>
              <Accordion.Body>
                De Joop Gilliamse oudercrèche is volledig erkend door de GGD en
                wordt frequent gekeurd door de brandweer. Alle ouders beschikken
                over een recent EHBO diploma en hebben allen een verklaring voor
                goed gedrag.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>
                Do I need to be able to communicate in Dutch?
              </Accordion.Header>
              <Accordion.Body>
                The communication with the children at the creche is in Dutch.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
      <div
        className="aboutUsSection p-3"
        data={data}
      >
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
