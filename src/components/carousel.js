import * as React from "react";
import "../styles/layout.scss";
import CarouselPanel from "./carousel-panel";
import Giraffe from "./giraffe";
import Bird from "./bird";
import Apple from "./apple";
import { LanguageContext } from "../context/LanguageProvider";
import { useContext } from "react";
import Slider from "react-slick";

export default function ReasonsCarousel({ data }) {
  const { getTranslation } = useContext(LanguageContext);
  let settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <div class="arrow">
        <div className="arrow-top"></div>
        <div className="arrow-bottom"></div>
      </div>
    ),
    nextArrow: (
      <div className="arrow">
        <div className="arrow-top"></div>
        <div className="arrow-bottom"></div>
      </div>
    ),
  };
  return (
    <Slider {...settings}>
      <CarouselPanel
        backgroundColour={"bg-red"}
        title={getTranslation("reasons_title")}
        reason={getTranslation("reasons_one_title")}
        text={getTranslation("reasons_one_text")}
        image={
          <div className="animalBg">
            <Giraffe />
          </div>
        }
      />
      <CarouselPanel
        backgroundColour={"bg-yellow"}
        title={getTranslation("reasons_title")}
        reason={getTranslation("reasons_two_title")}
        text={getTranslation("reasons_two_text")}
        image={
          <div className="animalBg">
            <Bird color="cls-0" border="cls-01" />
          </div>
        }
      />

      <CarouselPanel
        backgroundColour={"bg-pink"}
        title={getTranslation("reasons_title")}
        reason={getTranslation("reasons_three_title")}
        text={getTranslation("reasons_three_text")}
        photo={data.childcare.childImageSharp.gatsbyImageData}
      />

      <CarouselPanel
        backgroundColour={"bg-primary"}
        title={getTranslation("reasons_title")}
        reason={getTranslation("reasons_four_title")}
        text={getTranslation("reasons_four_text")}
        image={<Apple />}
      />

      <CarouselPanel
        backgroundColour={"bg-success"}
        title={getTranslation("reasons_title")}
        reason={getTranslation("reasons_five_title")}
        text={getTranslation("reasons_five_text")}
        photo={data.binnen.childImageSharp.gatsbyImageData}
      />
    </Slider>
  );
}
