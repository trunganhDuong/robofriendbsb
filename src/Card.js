import React from 'react';

const Card = (props) => {
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="robots" src={`https://robohash.org/${props.data.id}?200x200`} />
			<div>
				<h2>{props.data.name}</h2>
				<p>{props.data.email}</p>
			</div>
		</div>
	);
}

export default Card;