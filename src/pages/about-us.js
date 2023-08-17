import * as React from "react";
import { graphql } from "gatsby";
import Header from "../components/header";
import { GatsbyImage } from "gatsby-plugin-image";
import Accordion from "react-bootstrap/Accordion";
import { Container } from "react-bootstrap";
import { LanguageContext } from "../context/LanguageProvider";
import { useContext } from "react";
import beleidsplan from "../documents/Pedagogisch-beleidsplan-Joop-Gilliamse-maart-2023.pdf";
import ggdnader2022 from "../documents/Gemeente-2022.pdf";
import ggd2022 from "../documents/GGD-2022.pdf";
import ggd2021 from "../documents/inspectie-rapport-nader-onderzoek-03-06-2021.pdf";
import ggdnader2020 from "../documents/09102020.pdf";
import ggd2020 from "../documents/jaarlijksonderzoek2020.pdf";
import ggd2019 from "../documents/jaarlijks-rapport-2019.pdf";
import { Helmet } from "react-helmet";

export default function AboutUs({ data }) {
  const { getTranslation } = useContext(LanguageContext);

  return (
    <>
      <Helmet>
        <title>Joop Gilliamse | About</title>
      </Helmet>
      <Header />
      <div
        className="ourStory p-3 hero"
        backgroundColour="bg-success"
        data={data}
      >
        <Container className="mw-70">
          <div className="aboutUsWrapper">
            <h1 className="mt-4">{getTranslation("about_us_title")}</h1>
            <p className="mt-4 text-left">{getTranslation("our_story_one")}</p>
            <div className=" w-100 my-3 text-center">
              <GatsbyImage
                className="about-image"
                imgStyle={{ objectFit: "contain" }}
                alt=""
                image={data.oudeFoto.childImageSharp.gatsbyImageData}
              />
            </div>

            <p className="mt-4 text-left">{getTranslation("our_story_two")} </p>

            <p className="my-4 text-left">
              {getTranslation("our_story_three")}
            </p>
          </div>
        </Container>
      </div>

      <div
        className="faqs mw-60 mx-auto p-3 hero"
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
          <table>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Download</th>
              <th>View</th>
            </tr>
            <tr>
              <td>Pedagogisch beleidsplan</td>
              <td>Our pedagogisch beleidsplan maart last updated 2023</td>
              <td>
                <a
                  className="document"
                  target="_blank"
                  rel="noreferrer"
                  href={beleidsplan}
                  download
                >
                  Download
                </a>
              </td>
              <td>
                <a
                  className="document"
                  target="_blank"
                  rel="noreferrer"
                  href={beleidsplan}
                >
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>Nader onderzoek Gemeente 2022</td>
              <td>Report from after the inspection from the Gemeente 2022</td>
              <td>
                <a
                  className="document"
                  target="_blank"
                  rel="noreferrer"
                  href={ggdnader2022}
                  download
                >
                  Download
                </a>
              </td>
              <td>
                <a
                  className="document"
                  target="_blank"
                  rel="noreferrer"
                  href={ggdnader2022}
                >
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>Inspectie rapport 2022</td>
              <td>The inspection repoort from the Gemeente 2022</td>
              <td>
                <a
                  className="document"
                  target="_blank"
                  rel="noreferrer"
                  href={ggd2022}
                  download
                >
                  Download
                </a>
              </td>
              <td>
                <a
                  className="document"
                  target="_blank"
                  rel="noreferrer"
                  href={ggd2022}
                >
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td>Inspectie rapport 2021</td>
              <td>An inspection from the GGD was done on 03-06-2021</td>
              <td>
                <a
                  className="document"
                  target="_blank"
                  rel="noreferrer"
                  href={ggd2021}
                  download
                >
                  Download
                </a>
              </td>
              <td>
                <a
                  className="document"
                  rel="noreferrer"
                  target="_blank"
                  href={ggd2021}
                >
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td> Inspectie rapport </td>
              <td>An inspection from the GGD was done on 09-10-2020</td>
              <td>
                <a
                  className="document"
                  rel="noreferrer"
                  target="_blank"
                  href={ggd2020}
                  download
                >
                  Download
                </a>
              </td>
              <td>
                <a
                  className="document"
                  rel="noreferrer"
                  target="_blank"
                  href={ggd2020}
                >
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td> Inspectie rapport 2020 </td>
              <td>An follow up inspection from the GGD was done in 2020</td>
              <td>
                <a
                  className="document"
                  rel="noreferrer"
                  target="_blank"
                  href={ggd2020}
                  download
                >
                  Download
                </a>
              </td>
              <td>
                <a
                  className="document"
                  rel="noreferrer"
                  target="_blank"
                  href={ggdnader2020}
                >
                  View
                </a>
              </td>
            </tr>
            <tr>
              <td> Inspectie rapport 2019 </td>
              <td>An inspection from the GGD was done on 27-09-2019</td>
              <td>
                <a
                  className="document"
                  rel="noreferrer"
                  target="_blank"
                  href={ggd2019}
                  download
                >
                  Download
                </a>
              </td>
              <td>
                <a
                  className="document"
                  rel="noreferrer"
                  target="_blank"
                  href={ggd2019}
                >
                  View
                </a>
              </td>
            </tr>
          </table>
        </Container>
      </div>
    </>
  );
}

export const query = graphql`
  {
    oudeFoto: file(relativePath: { eq: "oude-JG-foto.jpg" }) {
      childImageSharp {
        gatsbyImageData(width: 500)
      }
    }
  }
`;
