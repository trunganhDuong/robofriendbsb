import React, {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import {robots} from '../robots.js';
import Scroll from '../components/Scroll';
import './App.css';
var httpClient = require('../HttpClient');

class App extends Component {
	constructor(){
		super();
		this.state = {
			robots: [],
			searchField: ''
		};
	}

	onSearchFieldChange = (searchField) => {
		this.setState({
			searchField: searchField,
			robots: robots.filter(function(item){
				return item.name.toLowerCase().includes(searchField.toLowerCase())
			})
		});
	}

	updateData = (data) => {
		this.setState({
			robots: data
		});
	}

	componentDidMount(){
		httpClient.makeGetRequest({
			host: 'jsonplaceholder.typicode.com/',
			path: 'users',
			method: 'GET'
		}, this.updateData);
	}

	render(){
		if(this.state.robots.length <=0){
			return <h1>Loading</h1>;
		}

		return (
			<div className='tc'>
				<h1 className="f2">RoboFriends</h1>
				<SearchBox onSearchFieldChange= {this.onSearchFieldChange}/>
				<Scroll>
					<CardList robots={this.state.robots}/>
				</Scroll>
			</div>
		);
	}
	
};

export default App;