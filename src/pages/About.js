import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import foto2 from "../img/3.png";

class About extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <div id="about">
                <img src={foto2} alt="foto" style={{ width: "100%" }} />
              </div>
            </Col>
            <Col>
              <h1 className="mt-5 mb-4">About Me</h1>
              <h3 className="ml-4 pt-5 text-left">My name is Evan Charles</h3>
              <h3>
                <h3 className="ml-4 pt-3 text-left">
                  I'm graduated from Maitreyawira High School.
                </h3>
                <h3 className="ml-4 pt-3 text-left">
                  Now I'm majoring Information System at University
                  International Batam.
                </h3>
              </h3>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default About;
