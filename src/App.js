import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Task from './pages/Task';
import Dashboard from './pages/Dashboard';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<Header></Header>
				<Route path='/' component={Landing} />
				<Route path='/login' component={Login} />
				<Route path='/register' component={Register} />
				<Route path='/task' component={Task} />
				<Route path='/dashboard' component={Dashboard} />
				<Footer></Footer>
			</Router>
		);
	}
}

export default App;
