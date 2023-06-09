import * as React from "react";
import "../styles/layout.scss";
import { Carousel } from "react-bootstrap";
import CarouselPanel from "./carousel-panel";
import Giraffe from "./giraffe";
import Bird from "./bird";
import Apple from "./apple";
import { LanguageContext } from "../context/LanguageProvider";
import { useContext } from "react";

export default function ReasonsCarousel({ data }) {
  const { getTranslation } = useContext(LanguageContext);

  return (
    <Carousel interval="60000000">
      <Carousel.Item>
        <CarouselPanel
          backgroundColour={"bg-red"}
          title={getTranslation("reasons_title")}
          reason={getTranslation("reasons_one_title")}
          text={getTranslation("reasons_one_text")}
          image={
            <div class="animalBg">
              <Giraffe />
            </div>
          }
        />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselPanel
          backgroundColour={"bg-yellow"}
          title={getTranslation("reasons_title")}
          reason={getTranslation("reasons_two_title")}
          text={getTranslation("reasons_two_text")}
          image={
            <div class="animalBg">
              <Bird color="cls-0" border="cls-2" />
            </div>
          }
        />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselPanel
          backgroundColour={"bg-pink"}
          title={getTranslation("reasons_title")}
          reason={getTranslation("reasons_three_title")}
          text={getTranslation("reasons_three_text")}
          photo={data.childcare.childImageSharp.gatsbyImageData}
        />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselPanel
          backgroundColour={"bg-primary"}
          title={getTranslation("reasons_title")}
          reason={getTranslation("reasons_four_title")}
          text={getTranslation("reasons_four_text")}
          image={<Apple />}
        />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselPanel
          backgroundColour={"bg-success"}
          title={getTranslation("reasons_title")}
          reason={getTranslation("reasons_five_title")}
          text={getTranslation("reasons_five_text")}
          photo={data.binnen.childImageSharp.gatsbyImageData}
        />
      </Carousel.Item>
    </Carousel>
  );
}
