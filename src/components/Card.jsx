import React from 'react';
import './Card.styles.css';

import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Card({ work }) {
	return (
		<div className="card">
			<h4>{work.name}</h4>
			<p>{work.about.substring(0, 100)}...</p>
			<div>
				<a href={work.github}>
					<button>
						<FontAwesomeIcon icon={faGithub} />
					</button>
				</a>
				<a href={work.site}>
					<button>
						<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
					</button>
				</a>
			</div>
		</div>
	);
}

export default Card;
