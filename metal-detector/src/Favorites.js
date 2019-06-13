import React, { useRef } from 'react';
import { Redirect } from 'react-router-dom';

function Favorites(props) {
	const verified = useRef(props.location.state.verified);
	if (verified.current) {
		return (
			<div id="welcomeMessage" class="middle">
				<h1>
					{`Welcome ${props.location.state.username}`}
				</h1>
			</div>
		)
	} else {
		return (
			<Redirect to="/login" />
		)
	}
}

export default Favorites;