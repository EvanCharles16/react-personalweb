import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Socialmedia extends Component {
  render() {
    return (
      <div className="bg-light p-3 mt-4">
        <Container>
          <Row className="m-5">
            <Col>
              <a href="#">
                <i class="fa fa-facebook fa-3x"></i>
              </a>
            </Col>
            <Col>
              <a href="#">
                <i class="fa fa-twitter fa-3x"></i>
              </a>
            </Col>
            <Col>
              <a href="#">
                <i class="fa fa-instagram fa-3x"></i>
              </a>
            </Col>
            <Col>
              <a href="#">
                <i class="fa fa-linkedin fa-3x"></i>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Socialmedia;
