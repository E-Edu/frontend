import './css/main.scss';
import React, {Component} from 'react';
import Landing from './pages/Landing';
import Task from './pages/Task';
import Dashboard from './pages/Dashboard';
import Imprint from "./pages/Imprint";
import Privacy from "./pages/Privacy";
import Credits from "./pages/Credits";
import ReportsList from "./pages/Reports/List";
import Result from './pages/Result';
import Settings from "./pages/Settings";
import CorrectionReview from "./pages/CorrectionReview";
import AddTeacher from "./pages/AddTeacher";
import {BrowserRouter as Router, Route} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <Router>
                <Route path={['/login', '/register', '/']} exact component={Landing}/>
                <Route path='/task' component={Task}/>
                <Route path='/dashboard' component={Dashboard}/>
                <Route path='/imprint' component={Imprint}/>
                <Route path='/privacy' component={Privacy}/>
                <Route path='/credits' component={Credits}/>
                <Route path='/reports/list' component={ReportsList}/>
                <Route path='/correction/review' component={CorrectionReview}/>
                <Route path='/result' component={Result}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/teacher/add' component={AddTeacher}/>
            </Router>
        );
    }
}

export default App;
