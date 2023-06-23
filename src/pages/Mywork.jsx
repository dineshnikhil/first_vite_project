import React from 'react';
import './Mywork.style.css';
import Card from '../components/Card';

const my_works = [
	{
		name: 'Color Picker',
		about:
			'Open source project dedicated to front end developers, fostering collaboration and feature contributions. Join to enhance and evolve the website together.',
		site: 'https://dineshnikhil.com/color_picker/',
		github: 'https://github.com/dineshnikhil/trainingPortfolio/tree/master',
	},
	{
		name: 'Training Profolio',
		about:
			'A fitness trainer s portfolio website allows customers to view their profile and book training sessions',
		site: 'https://dineshnikhil.com/trainingPortfolio/',
		github: 'https://github.com/dineshnikhil/trainingPortfolio/tree/master',
	},
	{
		name: 'Crypto Tracker',
		about:
			'Crypto tracker app displays real time crypto coin values and enables users to create their own portfolios',
		site: 'https://dineshnikhil.com/crypto/',
		github: 'https://github.com/dineshnikhil/crypto/tree/master',
	},
	{
		name: 'ApexLengend Clone',
		about:
			'This website is the clone of the existing ApexLengend website and I have added some new features to it.',
		site: 'https://dineshnikhil.com/trainingPortfolio/',
		github: 'https://github.com/dineshnikhil/color_picker',
	},
];

function Mywork() {
	return (
		<div className="mywork_div">
			<h3>My Works</h3>
			<div className="projects_div">
				{my_works.map((work) => {
					return <Card work={work} />;
				})}
			</div>
		</div>
	);
}

export default Mywork;
