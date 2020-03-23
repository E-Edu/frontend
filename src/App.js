import "./css/main.scss";
import React, {Component} from "react";
import Landing from "./pages/Landing";
import Task from "./pages/Task";
import Dashboard from "./pages/Dashboard";
import './css/main.scss';
import Imprint from "./pages/Imprint";
import Privacy from "./pages/Privacy";
import Credits from "./pages/Credits";
import ReportsList from "./pages/Reports/List";
import Result from "./pages/Result";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Settings from "./pages/Settings";
import CorrectionReview from "./pages/CorrectionReview";
import AddTeacher from "./pages/AddTeacher";
import Tasklist from "./pages/Tasklist";
import Profile from "./pages/Profile";

class App extends Component {
    render() {
        return (
            <Router>
                <Route path={['/login', '/register', '/']} exact component={Landing}/>
                <Route path='/imprint' exact component={Imprint}/>
                <Route path='/privacy' exact component={Privacy}/>
                <Route path='/credits' exact component={Credits}/>
                <Route path='/dashboard' exact component={Dashboard}/>
                {/*Auswahl (Themen)*/}
                <Route path='/tasklist' exact component={Tasklist}/>
                <Route path='/task' exact component={Task}/>
                <Route path='/task/result' exact component={Result}/>
                {/*Task add*/}
                {/*Meine Aufgaben*/}
                <Route path='/correction/review' exact component={CorrectionReview}/>
                {/*Popup zum Korigieren*/}
                <Route path='/reports/list' exact component={ReportsList}/>
                {/*Popup zum anschauen*/}
                <Route path='/teacher/add' exact component={AddTeacher}/>
                <Route path='/settings' exact component={Settings}/>
                <Route path='/profile' exact component={Profile}/>
            </Router>
        );
    }
}

export default App;
