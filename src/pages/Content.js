import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import foto from "../img/4.png";

class Content extends Component {
  render() {
    return (
      <div className="mt-5 pt-5 pb-5">
        <Container>
          <Row>
            <Col>
              <div
                id="content"
                className="pt-5 mt-5"
                style={{ textAlign: "justify" }}
              >
                <h2>Hello ---------</h2>
                <h1>I am Evan Charles</h1>
                <h4>Fullstack Developer</h4>

                <Link to="/contact" className="text-light pl-4">
                  <Button variant="primary mr-3 mt-3">Hire Me</Button>
                </Link>
                <Link to="/contact" className="text-light pl-4">
                  <Button variant="outline-primary mt-3">Get CV</Button>
                </Link>
              </div>
            </Col>
            <Col>
              <img src={foto} alt="foto" style={{ width: "100%" }} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Content;
