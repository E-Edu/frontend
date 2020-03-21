import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Task from './pages/Task';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<Route path={['/login', '/register', '/']} component={Landing} />
				<Route path='/task' component={Task} />
				<Route path='/dashboard' component={Dashboard} />
			</Router>
		);
	}
}

export default App;
