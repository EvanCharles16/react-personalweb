import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Socialmedia.css";

class Socialmedia extends Component {
  render() {
    return (
      <div className="bg-light p-3 mt-4 icon">
        <Container>
          <Row className="ml-5 mt-3 pl-5">
            <Col>
              <a href="https://www.facebook.com/" target="blank">
                <i class="fa fa-facebook fa-3x"></i>
              </a>
            </Col>
            <Col>
              <a href="https://www.twitter.com/" target="blank">
                <i class="fa fa-twitter fa-3x"></i>
              </a>
            </Col>
            <Col>
              <a href="https://www.whatsapp.com/" target="blank">
                <i class="fa fa-whatsapp fa-3x"></i>
              </a>
            </Col>
            <Col>
              <a href="https://www.linkedin.com/" target="blank">
                <i class="fa fa-linkedin fa-3x"></i>
              </a>
            </Col>
          </Row>
        </Container>

        <h3 className="text-center pt-5">Designed By Me - EvanCharles 2020</h3>
      </div>
    );
  }
}
export default Socialmedia;
