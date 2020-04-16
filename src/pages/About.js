import React, { Component } from "react";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";
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

          <hr />

          <Row className="mb-4">
            <Col>
              <div id="portfolio">
                <div className="services text-center mb-5 mt-4">
                  <h1>Services</h1>
                </div>
                <CardDeck className="text-center">
                  <Card>
                    <Card.Img variant="top" />
                    <i class="fa fa-book fa-4x"></i>
                    <Card.Body>
                      <Card.Title>Documentation</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" />
                    <i class="fa fa-mobile fa-5x"></i>
                    <Card.Body>
                      <Card.Title>Mobile Develop</Card.Title>
                      <Card.Text>
                        This card has supporting text below as a natural lead-in
                        to additional content.{" "}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" />
                    <i class="fa fa-desktop fa-4x"></i>
                    <Card.Body>
                      <Card.Title>Web Develop</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This card has
                        even longer content than the first to show that equal
                        height action.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardDeck>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default About;
