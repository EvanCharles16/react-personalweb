import React, { Component } from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import me from "../../img/editt.png";

import "./Home.css";

class Content extends Component {
	render() {
		return (
			<div className="background-content">
				<Container>
					<Row className="text-center">
						<Col>
							<img src={me} alt="me" className="me" />
							<div className="mt-4 text-white justify-content-center">
								<h1 className="nameText">I am Evan Charles</h1>
								<h4 className="statusText">Frontend Developer</h4>
							</div>
						</Col>
					</Row>

					<Nav className="justify-content-center mt-3">
						<Nav.Item>
							<Nav.Link
								href="https://www.facebook.com/evan.charles.988711/"
								target="blank"
							>
								<i className="fab fa-facebook "></i>
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link href="https://github.com/EvanCharles16" target="blank">
								<i className="fab fa-github "></i>
							</Nav.Link>
						</Nav.Item>

						<Nav.Item>
							<Nav.Link href="https://wa.me/0895627436758" target="blank">
								<i className="fab fa-whatsapp "></i>
							</Nav.Link>
						</Nav.Item>
						<Nav.Item>
							<Nav.Link
								href="https://www.linkedin.com/in/evan-charles-6385971a7/"
								target="blank"
							>
								<i className="fab fa-linkedin "></i>
							</Nav.Link>
						</Nav.Item>
					</Nav>

					<div className="text-center mt-4">
						<Link to="/contact" className="text-light ">
							<Button
								className="text-center homeButton"
								variant="primary mt-3"
								size="lg"
							>
								Hire Me
							</Button>
						</Link>
						<Link
							to="/assets/CV.pdf"
							target="blank"
							download
							className="text-light pl-4 "
						>
							<Button variant="primary mt-3" className="homeButton" size="lg">
								Get CV
							</Button>
						</Link>
					</div>
				</Container>
			</div>
		);
	}
}
export default Content;
