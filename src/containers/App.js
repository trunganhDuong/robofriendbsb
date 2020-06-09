import React, {useState, useEffect} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {robots} from '../robots.js';
import Scroll from '../components/Scroll';
import './App.css';
var httpClient = require('../HttpClient');

const App = () => {
	const [robots, setRobots] = useState([]);
	const [searchField, setSearchField] = useState('');

	const onSearchFieldChange = (searchField) => {
		setSearchField(searchField);
		setRobots(robots.filter(function(item){
				return item.name.toLowerCase().includes(searchField.toLowerCase())
			}));
	}

	const updateData = (data) => {
		setRobots(data);
	}

	useEffect(()=> {
		httpClient.makeGetRequest({
			host: 'jsonplaceholder.typicode.com/',
			path: 'users',
			method: 'GET'
		}, updateData);
	});

	return robots.length <=0 ?
			<h1>Loading</h1>:
			(
			<div className='tc'>
				<h1 className="f2">RoboFriends</h1>
				<SearchBox onSearchFieldChange= {onSearchFieldChange}/>
				<Scroll>
					<CardList robots={robots}/>
				</Scroll>
			</div>
		);
};

export default App;