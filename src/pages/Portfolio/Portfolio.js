import React from "react";
import {
	Container,
	Row,
	Col,
	Card,
	CardDeck,
	Button,
	Jumbotron,
} from "react-bootstrap";

import Socialmedia from "../../components/Footer/Socialmedia";
import pfoto from "../../img/6.png";
import reactweb from "./../../img/portfolio/reactweb.png";

import "./Portfolio.css";

const Portfolio = () => {
	return (
		<div className="mb-4">
			<Container>
				<div className="portfolio m-5 pt-3 text-center">
					<h1>Portfolio</h1>
				</div>

				<Row className="mb-5">
					<Col>
						<div id="portfolio">
							<>
								<Jumbotron className="portfolioCard ml-4">
									<Card.Img variant="top" src={reactweb} />
									<Card.Body>
										<Card.Title>Card title</Card.Title>
										<Card.Text>
											This is a wider card with supporting text below as a
											natural lead-in to additional content. This content is a
											little bit longer.
										</Card.Text>
										<a
											href="https://vannch.com"
											className="btn btn-primary"
											block
										>
											Visit Website
											<i class="fas fa-arrow-circle-right ml-2"></i>
										</a>
									</Card.Body>
								</Jumbotron>
								<Card className="portfolioCard ml-4">
									<Card.Img variant="top" src={pfoto} />
									<Card.Body>
										<Card.Title>Card title</Card.Title>
										<Card.Text>
											This is a wider card with supporting text below as a
											natural lead-in to additional content. This content is a
											little bit longer.
										</Card.Text>
										<Button block>
											Visit Website
											<i class="fas fa-arrow-circle-right ml-2"></i>
										</Button>
									</Card.Body>
								</Card>
								<Card className="portfolioCard ml-4">
									<Card.Img variant="top" src={pfoto} />
									<Card.Body>
										<Card.Title>Card title</Card.Title>
										<Card.Text>
											This is a wider card with supporting text below as a
											natural lead-in to additional content. This content is a
											little bit longer.
										</Card.Text>
										<Button block>
											Visit Website
											<i class="fas fa-arrow-circle-right ml-2"></i>
										</Button>
									</Card.Body>
								</Card>
							</>
						</div>
					</Col>
				</Row>

				<Row className="pb-4">
					<Col>
						<CardDeck>
							<Card className="portfolioCard ml-4">
								<Card.Img variant="top" src={pfoto} />
								<Card.Body>
									<Card.Title>Card title</Card.Title>
									<Card.Text>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</Card.Text>
									<Button block>
										Visit Website
										<i class="fas fa-arrow-circle-right ml-2"></i>
									</Button>
								</Card.Body>
							</Card>
							<Card className="portfolioCard ml-4">
								<Card.Img variant="top" src={pfoto} />
								<Card.Body>
									<Card.Title>Card title</Card.Title>
									<Card.Text>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</Card.Text>
									<Button block>
										Visit Website
										<i class="fas fa-arrow-circle-right ml-2"></i>
									</Button>
								</Card.Body>
							</Card>
							<Card className="portfolioCard ml-4">
								<Card.Img variant="top" src={pfoto} />
								<Card.Body>
									<Card.Title>Card title</Card.Title>
									<Card.Text>
										This is a wider card with supporting text below as a natural
										lead-in to additional content. This content is a little bit
										longer.
									</Card.Text>
									<Button block>
										Visit Website
										<i class="fas fa-arrow-circle-right ml-2"></i>
									</Button>
								</Card.Body>
							</Card>
						</CardDeck>
					</Col>
				</Row>
			</Container>
			<Socialmedia />
		</div>
	);
};
export default Portfolio;
