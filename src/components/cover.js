import * as React from "react";
import "../styles/layout.scss";
import { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Cover({
  id,
  children,
  backgroundColour,
  addClass,
  header,
  scrollTo,
  goToSectionRef,
  showArrow,
}) {
  const headlineRef = useRef();
  const sectionRef = useRef();
  useEffect(() => {
    gsap.fromTo(
      headlineRef.current,
      {
        autoAlpha: 0,
        y: -20,
      },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          scroller: ".container",
          trigger: headlineRef.current,
          start: "top 60%",
          end: "bottom 0%",
          toggleActions: "play none restart reverse",
        },
      }
    );
    return () => {};
  }, []);
  return (
    <Container
      ref={sectionRef}
      fluid
      id={id}
      className={`hero padding-large w-100 h-100 d-flex flex-column text-center  ${backgroundColour} ${addClass} ${
        header && `waves`
      }`}
    >
      {children}
      {showArrow && <button onClick={() => scrollTo(goToSectionRef)}></button>}
    </Container>
  );
}
