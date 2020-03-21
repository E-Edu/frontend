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
				<Route path={['/login', '/register', '/']} exact component={Landing} />
				<Route path='/task' component={Task} />
				<Route path='/dashboard' component={Dashboard} />
				<Route path='/imprint' component={Imprint} />
				<Route path='/privacy' component={Privacy} />
				<Route path='/credits' component={Credits} />
			</Router>
		);
	}
}

export default App;
