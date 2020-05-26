import React, { Component } from "react";
import { Container, Row, Col, ListGroup, Form, Button } from "react-bootstrap";
import Socialmedia from "../../components/Footer/Socialmedia";
import Cv from "../../img/CV.png";

class Contact extends Component {
	render() {
		return (
			<div>
				<Container>
					<div className="mt-4 mb-4" id="getCV">
						<img src={Cv} alt="CV" style={{ width: "100%" }} />
					</div>
					<Row>
						<Col className="bordered border-right">
							<Row>
								<Col sm={12}>
									<h2 className="contact-1 pt-4 mb-4">Quick Id</h2>
								</Col>
								<Col>
									<div id="contact">
										<ListGroup variant="flush">
											<ListGroup.Item>Phone</ListGroup.Item>
											<ListGroup.Item>Email</ListGroup.Item>
											<ListGroup.Item>Website</ListGroup.Item>
											<ListGroup.Item>Address</ListGroup.Item>
										</ListGroup>
									</div>
								</Col>

								<Col>
									<ListGroup variant="flush">
										<ListGroup.Item>+628 956 274 36758</ListGroup.Item>
										<ListGroup.Item>ec@vannch.com</ListGroup.Item>
										<ListGroup.Item>vannch.com</ListGroup.Item>
										<ListGroup.Item>Ruang Kreasi</ListGroup.Item>
									</ListGroup>
								</Col>
							</Row>
						</Col>

						<Col>
							<h2 className="contact-2 m-4">Contact Me</h2>
							<Form action="mailto: ec@vannch.com" name="contact" method="post">
								<input type="hidden" name="form-name" value="contact" />
								<Form.Group>
									<Form.Control type="text" placeholder="Your Name" required />
								</Form.Group>

								<Form.Group>
									<Form.Control
										type="email"
										placeholder="Your Email"
										required
									/>
								</Form.Group>

								<Form.Group>
									<Form.Control
										as="textarea"
										rows="4"
										type="email"
										placeholder="Your Message"
										required
									/>
								</Form.Group>

								<Button
									variant="primary"
									type="submit"
									target="blank"
									value="contact"
									// href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=evan.chrls@yahoo.com&su=yoursubject&body=my-text&ui=2&tf=1&pli=1"
								>
									Send
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>
				<Socialmedia />
			</div>
		);
	}
}
export default Contact;
