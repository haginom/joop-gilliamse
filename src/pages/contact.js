import Cover from "../components/cover";
import * as React from "react";
import Header from "../components/header";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";

export default function Contact() {
  return (
    <>
      <Header />
      <Cover backgroundColour={"bg-yellow"}>
        <h1 className="mx-5">Enquiries</h1>
        <Row>
          <Col sm={6}>
            <Form className="contactForm mx-5 my-3">
              <Row className="no-gutters">
                <Col sm={12}>
                  <strong>Parent/Guardian</strong>
                </Col>
                <Col sm={12} md={6}>
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" />
                  </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                  <Form.Group>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="number" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="no-gutters mt-3">
                <Col sm={12}>
                  <strong>Child</strong>
                </Col>
                <Col sm={12} md={6}>
                  <Form.Group>
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" />
                  </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                  <Form.Group>
                    <Form.Label>Date of Birth</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </Col>
                <Col sm={12} md={6}>
                  <Form.Group>
                    <Form.Label>Expected Start Date:</Form.Label>
                    <Form.Control type="date" />
                  </Form.Group>
                </Col>
                <Col sm={12}>
                  <Form.Group>
                    <Form.Label>A bit about yourself:</Form.Label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="5"
                    ></textarea>
                  </Form.Group>
                </Col>
              </Row>
              <Button className="mt-4" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col sm={5}>
            <iframe
              title="googleMaps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.9167045021672!2d4.906629511851809!3d52.37193034706544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6096350be1977%3A0x2bc116492c134c19!2sJoop%20Gilliamse%20Oudercreche!5e0!3m2!1sen!2snl!4v1686340926902!5m2!1sen!2snl"
              width="100%"
              height="90%"
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
