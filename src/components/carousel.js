import * as React from "react";
import "../styles/layout.scss";
import { Carousel } from "react-bootstrap";
import CarouselPanel from "./carousel-panel";
import Giraffe from "./giraffe";
import Bird from "./bird";
import Apple from "./apple";

export default function ReasonsCarousel({ data }) {
  return (
    <Carousel interval="60000000">
      <Carousel.Item>
        <CarouselPanel
          backgroundColour={"bg-red"}
          title={"why join us?"}
          reason="an amazing community"
          text={
            "Find support and belonging in a warm and friendly network of like-minded parents. We spend time together regularly outside of creche hours creating a close and familiar team."
          }
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
          title={"why join us?"}
          reason="be super involved in your childs care"
          text={
            "You get to work alongside your child whilst contributing to their care and community. Being able to stay at your child’s setting all day gives you time to see your child and child’s friends whilst having a direct impact on what kind of care they recieve."
          }
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
          title={"why join us?"}
          reason="inspired by the Gordon method"
          text={
            "Active listening and effective communication are key to our educational approach. Mutual trust, openess and respect towards the children and each other are very important. You can read all about it in our pedgagogical plan"
          }
          photo={data.childcare.childImageSharp.gatsbyImageData}
        />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselPanel
          backgroundColour={"bg-primary"}
          title={"why join us?"}
          reason="healthy organic and vegetarain food"
          text={
            "A healthy meal is important and a varied and warm lunch is prepared lovingly by one of our sta-ouders everyday. We always use organic and vegetarian produce and use as little salt and sugas as possible. Fresh fruit is also on the menu daily."
          }
          image={<Apple />}
        />
      </Carousel.Item>
      <Carousel.Item>
        <CarouselPanel
          backgroundColour={"bg-success"}
          title={"why join us?"}
          reason="a wonderful space"
          text={
            "A beautiful outdoor area, a cozy sleeping room, and a well equipped playroom and kitchen make up our creche. It has a homely atmosphere. The furniture is geared to the children's world, so not at adult height - giving the children ample space to safely explore"
          }
          photo={data.binnen.childImageSharp.gatsbyImageData}
        />
      </Carousel.Item>
    </Carousel>
  );
}
