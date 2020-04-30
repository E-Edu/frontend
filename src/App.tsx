import './css/main.scss';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './pages/Landing/LandingPage';
import Dashboard from './pages/Dashboard/Dashboard';
import Imprint from './pages/Imprint/Imprint';
import Privacy from './pages/Privacy/Privacy';
import Credits from './pages/Credits/Credits';
import TaskEvaluation from './pages/Result/TaskEvaluation';
import Settings from './pages/Settings/Settings';
import TaskList from './pages/TaskList/TaskList';
import Lecture from './pages/Lecture/Lecture';
import PageLayout from './components/Template/page/PageLayout';
import AddTask from './pages/AddTask/AddTask';
import SubjectTask from './pages/SubjectTask/SubjectTask';

class App extends Component {
    render() {
        return (
            <Router>
                <PageLayout>
                    <Route path={['/login', '/register', '/']} exact component={LandingPage} />
                    <Route path="/imprint" exact component={Imprint} />
                    <Route path="/privacy" exact component={Privacy} />
                    <Route path="/credits" exact component={Credits} />
                    <Route path="/dashboard" exact component={Dashboard} />
                    <Route path="/task/list" exact component={TaskList} />
                    <Route path="/task/result" exact component={TaskEvaluation} />
                    <Route path="/task/lecture" exact component={Lecture} />
                    <Route path="/task/add" exact component={AddTask} />
                    <Route path="/task/subject" exact component={SubjectTask} />
                    <Route path="/settings" exact component={Settings} />
                </PageLayout>
            </Router>
        );
    }
}

export default App;
