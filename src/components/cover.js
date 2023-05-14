import * as React from "react";
import "../styles/layout.scss";
import Header from "./header";

export default function Cover({
  id,
  children,
  backgroundColour,
  addClass,
  header,
  data,
}) {
  return (
    <section
      id={id}
      className={`overflow-hidden position-relative d-flex flex-column px-4 py-5 text-center ${backgroundColour} ${addClass} ${
        header && `waves`
      }`}
    >
      {children}
    </section>
  );
}
