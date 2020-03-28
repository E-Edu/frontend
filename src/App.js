import "./css/main.scss";
import React, {Component} from "react";
import LandingPage from "./pages/Landing/LandingPage";
import Task from "./pages/Task/Task";
import Dashboard from "./pages/Dashboard/Dashboard";
import Imprint from "./pages/Imprint/Imprint";
import Privacy from "./pages/Privacy/Privacy";
import Credits from "./pages/Credits/Credits";
import ReportsList from "./pages/Reports/List/ReportsList";
import TaskEvaluation from "./pages/Result/TaskEvaluation";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Settings from "./pages/Settings/Settings";
import CorrectionReview from "./pages/CorrectionReview/CorrectionReview";
import AddTeacher from "./pages/AddTeacher/AddTeacher";
import TaskList from "./pages/TaskList/TaskList";
import Profile from "./pages/Profile/Profile";
import SubjectTask from "./pages/SubjectTask/SubjectTask";
import Lecture from "./pages/Lecture/Lecture";
import PageLayout from "./components/Template/page";

class App extends Component {
    render() {
        return (
            <Router>
                <PageLayout>

                    <Route
                        path={["/login", "/register", "/"]}
                        exact
                        component={LandingPage}
                    />
                    <Route path="/imprint" exact component={Imprint}/>
                    <Route path="/privacy" exact component={Privacy}/>
                    <Route path="/credits" exact component={Credits}/>
                    <Route path="/dashboard" exact component={Dashboard}/>
                    {/*Auswahl (Themen)*/}
                    <Route path='/task/list' exact component={TaskList}/>
                    <Route path='/task' exact component={Task}/>
                    <Route path='/task/result' exact component={TaskEvaluation}/>
                    <Route path='/task/lecture' exact component={Lecture}/>
                    {/*Task add*/}
                    {/*solve subject-task*/}
                    <Route path='/task/subject' exact component={SubjectTask}/>
                    {/*Meine Aufgaben*/}
                    <Route
                        path="/correction/review"
                        exact
                        component={CorrectionReview}
                    />
                    {/*Popup zum Korigieren*/}
                    <Route path="/reports/list" exact component={ReportsList}/>
                    {/*Popup zum anschauen*/}
                    <Route path="/teacher/add" exact component={AddTeacher}/>
                    <Route path="/settings" exact component={Settings}/>
                    <Route path="/profile" exact component={Profile}/>
                </PageLayout>
            </Router>
        );
    }
}

export default App;
