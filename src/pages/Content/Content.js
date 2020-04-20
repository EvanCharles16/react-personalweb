import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import foto from "../../img/4.png";
// import bumi from "../../img/bumi.png";
import "./Content.css";

class Content extends Component {
  render() {
    return (
      <div className="background-content">
        <div className="container content pt-3 pb-5">
          <Container>
            <Row>
              <Col>
                <div
                  id="content"
                  className="pt-5 mt-5"
                  style={{ textAlign: "left" }}
                >
                  <h2>Hello ---------</h2>
                  <h1>I am Evan Charles</h1>
                  <h4>Fullstack Developer</h4>

                  <Link to="/about" className="text-light pl-4">
                    <Button variant="success mr-3 mt-3 mb-3">
                      Know more...
                    </Button>
                  </Link>
                  <br />

                  <Link to="/contact" className="text-light pl-4">
                    <Button variant="primary mr-3 mt-3">Hire Me</Button>
                  </Link>
                  <Link to="/contact" className="text-light pl-4">
                    <Button variant="primary mt-3">Get CV</Button>
                  </Link>
                </div>
              </Col>

              <Col>
                <img className="images mb-5 pb-5" src={foto} alt="foto" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
export default Content;
