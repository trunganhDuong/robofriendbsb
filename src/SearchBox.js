import React from 'react';

const SearchBox = (props) => {
	const onSearchFieldChange = (e) => {
		props.onSearchFieldChange(e.target.value);
	};

	return (
		<input 
			className='pa2 ma4 input-reset ba bg-transparent hover-bg-black hover-white w-30' 
			type='search' 
			placeholder='Search robots' 
			onChange={onSearchFieldChange}
		/>
	);
};

export default SearchBox;	
