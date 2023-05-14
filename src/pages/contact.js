import Cover from "../components/cover";
import * as React from "react";
import Header from "../components/header";
import Map from "../components/map";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";

export default function Contact() {
  return (
    <>
      <Header />
      <Cover backgroundColour={"bg-yellow"}>
        <h1 className="mx-5">Enquiries</h1>
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
          <Map />
        </Col>
      </Cover>
    </>
  );
}
