import * as React from "react";
import "../styles/layout.scss";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";
import { LanguageContext } from "../context/LanguageProvider";
import { Nav, Navbar, Container, ButtonGroup, Button } from "react-bootstrap";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Bird from "./bird";

export default function Header({ landing }) {
  const location = useLocation();
  const { language, toggleLanguage } = useContext(LanguageContext);
  const { getTranslation } = useContext(LanguageContext);

  return (
    <header className="bg-red sticky-top header-links position-relative">
      {landing && (
        <div className="pokingHeaderBird">
          <Bird color="cls-1" border="cls-2" />
        </div>
      )}
      <Container>
        <Navbar
          className="justify-content-space-between mw-60 mx-auto"
          expand="lg"
        >
          <Navbar.Brand>Joop Gilliamse</Navbar.Brand>
          <Navbar.Toggle
            activeKey={location.pathname}
            aria-controls="basic-navbar-nav"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: "#fdfcf6" }} />
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-sm-start align-items-lg-center">
              <Nav.Link
                as={Link}
                to="/"
                eventKey="/"
                active={location.pathname === "/"}
              >
                {getTranslation("nav_home")}
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about-us"
                eventKey="/about-us"
                active={location.pathname === "/about-us/"}
              >
                {getTranslation("nav_about")}
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                eventKey="/contact"
                active={location.pathname === "/contact/"}
              >
                {getTranslation("nav_contact")}
              </Nav.Link>
              <ButtonGroup className="nav-link ms-lg-5">
                <Button
                  type="checkbox"
                  className={`${language === "en" && "active-checkbox"} `}
                  variant="outline-primary"
                  value="en"
                  checked={language === "en"}
                  onClick={(e) => toggleLanguage("en")}
                >
                  EN
                </Button>
                <div class="spacer"></div>
                <Button
                  type="checkbox"
                  className={`${language === "nl" && "active-checkbox"} `}
                  variant="outline-primary"
                  value="nl"
                  checked={language === "nl"}
                  onClick={(e) => toggleLanguage("nl")}
                >
                  NL
                </Button>
              </ButtonGroup>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>{" "}
    </header>
  );
}
