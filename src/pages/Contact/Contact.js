import React from "react";
import { Container, Row, Col, Form, Button, Jumbotron } from "react-bootstrap";
import Socialmedia from "../../components/Footer/Socialmedia";

const Contact = () => {
	const myStyle = {
		marginTop: "8%",
		marginBottom: "10%"
	}

	const buttonSubmit = {
		padding: "10px 0",
	}

	const JumbotronContact = {
		background: "#F8F9FA",
		marginTop: "4rem",
		padding: "0 15rem",
		border: "1px solid #c4c4c4",
		boxShadow: "2px 2px 2px -1px",
		borderRadius: "5rem"
	}

	return (
		<div>
			<Container>
				<Jumbotron style={JumbotronContact}>
					<Row style={myStyle}>
						<Col>
							<h2 className="contact-2 mb-4 pb-3 text-center">Contact Me</h2>
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
									block
									target="blank"
									value="contact"
									className="mt-4"
									style={buttonSubmit}
								>
									Send
									<i class="fas fa-arrow-right ml-3"></i>
								</Button>
								<h4 className="text-center mt-3	">OR</h4>
								<Button
									variant="danger"
									block
									target="blank"
									style={buttonSubmit}
									href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=evancharles1609@gmail.com&su=yoursubject&body=my-text&ui=2&tf=1&pli=1"
								>
									Send me Message via Gmail
									<i class="fas fa-envelope ml-3"></i>
								</Button>
							</Form>
						</Col>


					</Row>
				</Jumbotron>
			</Container>
			<Socialmedia />
		</div>
	);
}
export default Contact;
