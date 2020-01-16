import React from 'react';
import { Col, Jumbotron, Row } from 'react-bootstrap';
import './style.css';

import projects from './config';

function Featured() {
	let proj;
	for(let i=0; i<projects.length; i++) {
		if(projects[i].featured===true) proj=projects[i];
	}
	return (
		<Jumbotron className='text-dark position-relative' id='featured-jumbo'>

			<Row className='text-center'>
				<h3>Featured Project</h3>
				<hr className='my-4' />
			</Row>

			<Row className='clearfix'>
				<Col md={3} id='featured-col-left'>
					<img className='img-fluid img-thumbnail' id='featured-thumbnail' src={proj.thumbnail} />
				</Col>

				<Col md={9} className='position-relative' id='featured-info'>
					<h5 className='mt-0'>
						<a href={proj.github} target='_blank' id='featured-github-link'>
							<span className='font-italic' id='featured-name'>
								{proj.name}
							</span>
						</a>
					</h5>

					<p id='featured-desc'>
						{proj.desc}
					</p>

					<a href={proj.link} className='btn btn-primary' target='_blank' role='button' id='featured-link'>
						View it here!
					</a>
				</Col>
			</Row>

			<Row className='clearfix'>
				<div className='text-center mx-auto text-dark'>
					<strong>Technologies used: </strong>
					<ul className='list-group list-group-horizontal font-italic' id='featured-technologies'>
						{proj.tech.map(tech => {
							return (
								<li className='list-group-item bg-light'>{tech}</li>
							);
						})}
					</ul>
				</div>
			</Row>

		</Jumbotron>
	);
}

export default Featured;