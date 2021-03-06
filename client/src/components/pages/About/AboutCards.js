import React from 'react';
import { Card, CardGroup, Col, Row } from 'react-bootstrap';
import './style.css';

import cards from './data';

function SelfieCardTwo() {
	return (
		<Card className='bg-dark text-white'>
			<img src='/assets/Playing-guitar.jpg' className='card-img-top' alt='Playing Guitar' style={{display:'inline-block'}} />
			<Card.Body>
				<Card.Text className='mutalics text-center'>
					I've been playing guitar since I was 7 years old.
				</Card.Text>
			</Card.Body>
		</Card>
	);
}

function InfoCard(props) {
	const data = props.data;
	return (
		<Card className='bg-dark text-white'>
			<Card.Header className='mutalics'>{data.header}</Card.Header>

			<Card.Body>
				<Card.Title className='mono text-center'>{data.title}</Card.Title>
				{data.text.map((text, i) => {
					return (
						<Card.Text key={i}>
							{text}
						</Card.Text>
					)
				})}
			</Card.Body>
		</Card>
	);
}

function AboutCards() {
	return (
		<Row>
			<Col lg={9}>
				<CardGroup>
					{cards.map((card, i) => {
						return (
							<InfoCard key={i} data={card} />
						)
					})}
				</CardGroup>
			</Col>

			<Col sm={3}>
				<SelfieCardTwo />
			</Col>
		</Row>
	);
}

export default AboutCards;