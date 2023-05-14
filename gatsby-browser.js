import "@popperjs/core/dist/umd/popper.min";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import React from "react";

import { LanguageProvider } from "./src/context/LanguageProvider";

export const wrapRootElement = ({ element }) => (
  <LanguageProvider>{element}</LanguageProvider>
);
