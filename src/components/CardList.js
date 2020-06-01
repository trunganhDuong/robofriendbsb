import React from 'react';
import Card from './Card';

const CardList = ({robots})=>{
	const cardComponent = robots.map(user => {
		return <Card key={`user_${user.id}`} data={user}/>
	});

	return (
		<div>
			{cardComponent}
		</div>
	);
}

export default CardList;