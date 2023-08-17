import Cover from "../components/cover";
import * as React from "react";
import Header from "../components/header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import { Helmet } from "react-helmet";

const Input = ({
  className,
  rows,
  element,
  label,
  value,
  onChange,
  ...props
}) => (
  <Form.Group>
    <Form.Label>{label}</Form.Label>
    {React.createElement(element, {
      className: `form-control ${className}`,
      rows: rows,
      value,
      onChange: (e) => onChange(e.target.value),
      ...props,
    })}
  </Form.Group>
);

export default function Contact() {
  const [parentFirstName, setParentFirstName] = React.useState("");
  const [parentLastName, setParentLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [childFirstName, setChildFirstName] = React.useState("");
  const [childLastName, setChildLastName] = React.useState("");
  const [childDob, setChildDob] = React.useState("");
  const [childEsd, setChildEsd] = React.useState("");
  const [about, setAbout] = React.useState("");

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch(`https://formsubmit.co/ajax/saki.reid@gmail.com`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },

      body: encode({
        "form-name": form.getAttribute("name"),
        parentFirstName,
        parentLastName,
        email,
        phone,
        childFirstName,
        childLastName,
        childDob,
        childEsd,
        about,
      }),
    })
      .then(() => {
        setParentFirstName("");
        setParentLastName("");
        setEmail("");
        setPhone("");
        setChildFirstName("");
        setChildLastName("");
        setChildDob("");
        setChildEsd("");
        setAbout("");
      })
      .then(() => alert("message sent"))
      .catch((err) => alert(err));
  };
  return (
    <>
      <Helmet>
        <title>Joop Gilliamse | Contact</title>
      </Helmet>
      <Header />
      <Cover backgroundColour={"bg-yellow"}>
        <h1 className="mx-5">Enquiries</h1>
        <Row>
          <Col sm={6}>
            <Form
              className="contactForm"
              data-netlify="true"
              onSubmit={handleSubmit}
              name="contact"
            >
              <input type="hidden" name="form-name" value="contact" />
              <fieldset id="contact" className="ba b--transparent pa0 ma0">
                <Row className="no-gutters">
                  <Col sm={12}>
                    <strong>Parent/Guardian</strong>
                  </Col>
                  <Col sm={12} md={6}>
                    <Input
                      element="input"
                      type="text"
                      name="parentFirstName"
                      value={parentFirstName}
                      onChange={setParentFirstName}
                      label="First Name"
                    />
                  </Col>
                  <Col sm={12} md={6}>
                    <Input
                      element="input"
                      type="text"
                      name="parentLastName"
                      value={parentLastName}
                      onChange={setParentLastName}
                      label="Last Name"
                    />
                  </Col>
                  <Col sm={12} md={6}>
                    <Input
                      element="input"
                      type="email"
                      name="email"
                      value={email}
                      onChange={setEmail}
                      label="Email"
                    />
                  </Col>
                  <Col sm={12} md={6}>
                    <Input
                      element="input"
                      type="number"
                      name="phone"
                      value={phone}
                      onChange={setPhone}
                      label="Phone Number"
                    />
                  </Col>
                </Row>
                <Row className="no-gutters mt-3">
                  <Col sm={12}>
                    <strong>Child</strong>
                  </Col>
                  <Col sm={12} md={6}>
                    <Input
                      element="input"
                      type="text"
                      name="childFirstName"
                      value={childFirstName}
                      onChange={setChildFirstName}
                      label="First Name"
                    />
                  </Col>
                  <Col sm={12} md={6}>
                    <Input
                      element="input"
                      type="text"
                      name="childLastName"
                      value={childLastName}
                      onChange={setChildLastName}
                      label="Last Name"
                    />
                  </Col>
                  <Col sm={12} md={6}>
                    <Input
                      element="input"
                      type="date"
                      name="dob"
                      value={childDob}
                      onChange={setChildDob}
                      label="Date of Birth"
                    />
                  </Col>
                  <Col sm={12} md={6}>
                    <Input
                      element="input"
                      type="date"
                      name="esd"
                      value={childEsd}
                      onChange={setChildEsd}
                      label="Expected Start Date"
                    />
                  </Col>
                  <Col sm={12}>
                    <Input
                      element="textarea"
                      rows={5}
                      name="about"
                      value={about}
                      onChange={setAbout}
                      label="A bit about yourself:"
                    />
                  </Col>
                </Row>
              </fieldset>
              <Button className="mt-4 p-2" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col sm={5} offset={1}>
            <iframe
              className="google-map"
              title="googleMaps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.9167045021672!2d4.906629511851809!3d52.37193034706544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6096350be1977%3A0x2bc116492c134c19!2sJoop%20Gilliamse%20Oudercreche!5e0!3m2!1sen!2snl!4v1686340926902!5m2!1sen!2snl"
              width="100%"
              height="80%"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </Col>
        </Row>
      </Cover>
    </>
  );
}
