import React from 'react';
import './Home.style.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Home() {
	return (
		<div className="home_div">
			<div className="home_div_1">
				<div className="image_div"></div>
				<h1>DineshNikhil059</h1>
				<h3>
					🔥 Data alchemist, 🚀 web maestro | ⚡️ Harnessing the power of data,
					crafting web experiences that dazzle
				</h3>
				{/* <p>
					Hi! 👋 I'm a Data Engineer at NTT DATA, weaving data into
					awe-inspiring creations for extraordinary individuals! 💫 Embracing
					the art of creative coding on the web platform to bring ideas to life.
					Passionate about delivering innovative solutions to intricate
					challenges. 🚀 Crafting numerous (not just a few!) projects on the
					dynamic MERN Stack. Let's build the future together!
				</p> */}
				<div className="home_action_div">
					<a>
						<FontAwesomeIcon icon={faLocationDot} className="home_icons" />{' '}
						Bangalore
					</a>
					<a>
						<FontAwesomeIcon icon={faEnvelope} className="home_icons" />{' '}
						dineshkumarpokkula@gmail.com
					</a>
				</div>
			</div>
		</div>
	);
}

export default Home;
