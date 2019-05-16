import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './home'
import Roster from './Roster'
import Work from './Work'
import { Route, Router } from 'react-router-dom'
import WorkStudent from './WorkStuent';
import Detial from './detail';

function App(props) {
	console.log(props)
	return (
		<>
			{/* <Route exact path='/' component={Home} />
			<Route exact path='/roster' component={Roster} />
			<Route exact path='/work' component={Work} /> */}
			<Route exact path='/' component={WorkStudent} />
			<Route exact path='/detail' component={Detial} />
		</>
	);
}

export default App;
