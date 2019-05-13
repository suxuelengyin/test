import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home'
import Roster from './Roster'
import Work from './Work'
import { Route, Router } from 'react-router-dom'
import { Switch } from 'react-router'
import WorkStudent from './WorkStuent';
import Detial from './detial';

function App(props) {
	console.log(props)
	return (
		<>
			<span>ss</span>
			{/* <Route exact path='/' component={Home} />
			<Route exact path='/roster' component={Roster} />
			<Route exact path='/work' component={Work} />
			<Route exact path='/workStudent' component={WorkStudent} />
			<Route exact path='/detial' component={Detial} /> */}
		</>
	);
}

export default App;
