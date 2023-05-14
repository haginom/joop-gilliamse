import * as React from "react";
import "../styles/layout.scss";
import Cover from "../components/cover";
import { GatsbyImage } from "gatsby-plugin-image";

export default function Community({ data }) {
  console.log(data);
  return (
    <Cover background={"bg-success"} data={data}>
      <div class="hero position-relative overflow-hidden">
        <h1>Why join us?</h1>
        <div class="row">
          <div class="col-md-6">
            <h2 class="text-start text-white display-4 fw-normal">
              Join an amazing community
            </h2>
            <p className="text-white text-start">
              Finding support and belonging in a warm and friendly network of
              like-minded parents can be a real lifesaver for parents of young
              children. Raising a child can be isolating and having community
              with people who have similar experiences can be very supportive.
            </p>
          </div>
          <div class="col-md-6">
            <div>
              <GatsbyImage
                image={data.community.childImageSharp.gatsbyImageData}
              />
            </div>
          </div>
        </div>
      </div>
    </Cover>
  );
}
