import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Collapse } from "react-bootstrap";

import Socialmedia from "../../components/Footer/Socialmedia";
import reactweb from "./../../img/portfolio/reactweb.png";
import designx from "./../../img/portfolio/designx.png";
import hybeast from "./../../img/portfolio/hybeast.png";

import "./Portfolio.css";

const Portfolio = () => {
	const [open1, setOpen1] = useState(false);
	const [open2, setOpen2] = useState(false);
	const [open3, setOpen3] = useState(false);
	const [open4, setOpen4] = useState(false);
	const [open5, setOpen5] = useState(false);
	const [open6, setOpen6] = useState(false);

	return (
		<div className="mb-4">
			<Container>
				<div className="portfolio m-5 pt-3 text-center">
					<h1>Portfolio</h1>
				</div>

				<div id="portfolio">
					<Row>
						<Col md={4} sm={12}>
							<Card className="portfolioCard mx-auto">
								<Card.Img variant="top" src={designx} />

								<Card.Body>
									<Button
										onClick={() => setOpen2(!open2)}
										aria-controls="example-collapse-text"
										aria-expanded={open2}
										block
									>
										Click for Details
										<i class="fas fa-caret-down ml-2 detailButton"></i>
									</Button>

									<Collapse in={open2}>
										<div id="example-collapse-text">
											<Card.Body>
												<Card.Title>DesignX #1</Card.Title>
												<Card.Text>A Simple Responsive Web</Card.Text>

												<Card.Title>Technologies</Card.Title>
												<Card.Text>Pure HTML CSS</Card.Text>
												<a
													href="https://designx.netlify.app"
													target="_blank"
													className="btn btn-primary btn-block"
												>
													Visit Website
													<i class="fas fa-arrow-circle-right ml-2"></i>
												</a>
											</Card.Body>
										</div>
									</Collapse>
								</Card.Body>
							</Card>
						</Col>

						<Col md={4} sm={12}>
							<Card className="portfolioCard mx-auto">
								<Card.Img variant="top" src={hybeast} />

								<Card.Body>
									<Button
										onClick={() => setOpen3(!open3)}
										aria-controls="example-collapse-text"
										aria-expanded={open3}
										block
									>
										Click for Details
										<i class="fas fa-caret-down ml-2 detailButton"></i>
									</Button>

									<Collapse in={open3}>
										<div id="example-collapse-text">
											<Card.Body>
												<Card.Title>Hybeast #2</Card.Title>
												<Card.Text>A Simple Responsive Web</Card.Text>

												<Card.Title>Technologies</Card.Title>
												<Card.Text>HTML CSS, SASS, Bootstrap</Card.Text>
												<a
													href="https://hybeastz.netlify.app"
													target="_blank"
													className="btn btn-primary btn-block"
												>
													Visit Website
													<i class="fas fa-arrow-circle-right ml-2"></i>
												</a>
											</Card.Body>
										</div>
									</Collapse>
								</Card.Body>
							</Card>
						</Col>

						<Col md={4} sm={12}>
							<Card className="portfolioCard mx-auto">
								<Card.Img variant="top" src={reactweb} />

								<Card.Body>
									<Button
										onClick={() => setOpen1(!open1)}
										aria-controls="example-collapse-text"
										aria-expanded={open1}
										block
									>
										Click for Details
										<i class="fas fa-caret-down ml-2 detailButton"></i>
									</Button>

									<Collapse in={open1}>
										<div id="example-collapse-text">
											<Card.Body>
												<Card.Title>Personal Website</Card.Title>
												<Card.Text>A Simple Personal Web</Card.Text>

												<Card.Title>Technologies</Card.Title>
												<Card.Text>
													ReactJS, Bootstrap, React Bootstrap
												</Card.Text>
												<a
													href="https://vannch.com"
													target="_blank"
													className="btn btn-primary btn-block"
												>
													Visit Website
													<i class="fas fa-arrow-circle-right ml-2"></i>
												</a>
											</Card.Body>
										</div>
									</Collapse>
								</Card.Body>
							</Card>
						</Col>
					</Row>

					{/* <Row>
						<Col md={4} sm={12}>
							<Card className="portfolioCard mx-auto">
								<Card.Img variant="top" src={designx} />

								<Card.Body>
									<Button
										onClick={() => setOpen4(!open)}
										aria-controls="example-collapse-text"
										aria-expanded={open4}
										block
									>
										Click for Details
										<i class="fas fa-caret-down ml-2 detailButton"></i>
									</Button>

									<Collapse in={open4}>
										<div id="example-collapse-text">
											<Card.Body>
												<Card.Title>DesignX #1</Card.Title>
												<Card.Text>A Simple Responsive Web</Card.Text>

												<Card.Title>Technologies</Card.Title>
												<Card.Text>Pure HTML CSS</Card.Text>
												<a
													href="https://designx.netlify.app"
													target="_blank"
													className="btn btn-primary btn-block"
												>
													Visit Website
													<i class="fas fa-arrow-circle-right ml-2"></i>
												</a>
											</Card.Body>
										</div>
									</Collapse>
								</Card.Body>
							</Card>
						</Col>

						<Col md={4} sm={12}>
							<Card className="portfolioCard mx-auto">
								<Card.Img variant="top" src={hybeast} />

								<Card.Body>
									<Button
										onClick={() => setOpen5(!open5)}
										aria-controls="example-collapse-text"
										aria-expanded={open5}
										block
									>
										Click for Details
										<i class="fas fa-caret-down ml-2 detailButton"></i>
									</Button>

									<Collapse in={open5}>
										<div id="example-collapse-text">
											<Card.Body>
												<Card.Title>Hybeast #2</Card.Title>
												<Card.Text>A Simple Responsive Web</Card.Text>

												<Card.Title>Technologies</Card.Title>
												<Card.Text>HTML CSS, SASS, Bootstrap</Card.Text>
												<a
													href="https://hybeastz.netlify.app"
													target="_blank"
													className="btn btn-primary btn-block"
												>
													Visit Website
													<i class="fas fa-arrow-circle-right ml-2"></i>
												</a>
											</Card.Body>
										</div>
									</Collapse>
								</Card.Body>
							</Card>
						</Col>

						<Col md={4} sm={12}>
							<Card className="portfolioCard mx-auto">
								<Card.Img variant="top" src={reactweb} />

								<Card.Body>
									<Button
										onClick={() => setOpen6(!open6)}
										aria-controls="example-collapse-text"
										aria-expanded={open6}
										block
									>
										Click for Details
										<i class="fas fa-caret-down ml-2 detailButton"></i>
									</Button>

									<Collapse in={open6}>
										<div id="example-collapse-text">
											<Card.Body>
												<Card.Title>Personal Website</Card.Title>
												<Card.Text>A Simple Personal Web</Card.Text>

												<Card.Title>Technologies</Card.Title>
												<Card.Text>
													ReactJS, Bootstrap, React Bootstrap
												</Card.Text>
												<a
													href="https://vannch.com"
													target="_blank"
													className="btn btn-primary btn-block"
												>
													Visit Website
													<i class="fas fa-arrow-circle-right ml-2"></i>
												</a>
											</Card.Body>
										</div>
									</Collapse>
								</Card.Body>
							</Card>
						</Col>
					</Row> */}
				</div>
			</Container>
			<Socialmedia />
		</div>
	);
};
export default Portfolio;
