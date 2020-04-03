import './css/main.scss';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LandingPage from './pages/Landing/LandingPage';
import Task from './pages/Task/Task';
import Dashboard from './pages/Dashboard/Dashboard';
import Imprint from './pages/Imprint/Imprint';
import Privacy from './pages/Privacy/Privacy';
import Credits from './pages/Credits/Credits';
import ReportsList from './pages/Reports/List/ReportsList';
import TaskEvaluation from './pages/Result/TaskEvaluation';
import Settings from './pages/Settings/Settings';
import CorrectionReview from './pages/CorrectionReview/CorrectionReview';
import AddTeacher from './pages/AddTeacher/AddTeacher';
import TaskList from './pages/TaskList/TaskList';
import Profile from './pages/Profile/Profile';
import SubjectTask from './pages/SubjectTask/SubjectTask';
import Lecture from './pages/Lecture/Lecture';
import PageLayout from './components/Template/page/PageLayout';

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
                    {/* Auswahl (Themen) */}
                    <Route path="/task/list" exact component={TaskList} />
                    <Route path="/task" exact component={Task} />
                    <Route path="/task/result" exact component={TaskEvaluation} />
                    <Route path="/task/lecture" exact component={Lecture} />
                    {/* Task add */}
                    {/* solve subject-task */}
                    <Route path="/task/subject" exact component={SubjectTask} />
                    {/* Meine Aufgaben */}
                    <Route path="/correction/review" exact component={CorrectionReview} />
                    {/* Popup zum Korigieren */}
                    <Route path="/reports/list" exact component={ReportsList} />
                    {/* Popup zum anschauen */}
                    <Route path="/teacher/add" exact component={AddTeacher} />
                    <Route path="/settings" exact component={Settings} />
                    <Route path="/profile" exact component={Profile} />
                </PageLayout>
            </Router>
        );
    }
}

/*
App.propTypes = {
    children: React.PropTypes.boolean.active,
    children: React.PropTypes.children,
    children: React.PropTypes.color,
    children: React.PropTypes.Community_Points,
    children: React.PropTypes.Datum,
    children: React.PropTypes.description,

    children: React.PropTypes.difficulty,
    children: React.PropTypes.disable,
    children: React.PropTypes.dislikes,
    children: React.PropTypes.Download,
    children: React.PropTypes.fields,
    children: React.PropTypes.fields.map,
    children: React.PropTypes.file,
    children: React.PropTypes.fill,
    children: React.PropTypes.height,

    children: React.PropTypes.history,
    children: React.PropTypes.history.push,
    children: React.PropTypes.index,
    children: React.PropTypes.liked,
    children: React.PropTypes.likes,
    children: React.PropTypes.location,

    children: React.PropTypes.location.pathname,
    children: React.PropTypes.mainTitle,
    children: React.PropTypes.maxWidth,
    children: React.PropTypes.messages,
    children: React.PropTypes.module,
    children: React.PropTypes.name,
    children: React.PropTypes.onChange,

    children: React.PropTypes.Points,
    children: React.PropTypes.questions,
    children: React.PropTypes.rightQuestions,
    children: React.PropTypes.secondaryTitle,
    children: React.PropTypes.shadow,
    children: React.PropTypes.side,
    children: React.PropTypes.spacer,
    children: React.PropTypes.stroke,
    children: React.PropTypes.strokewidth,
    children: React.PropTypes.styletype,
    children: React.PropTypes.subject,
    children: React.PropTypes.teacher,
    children: React.PropTypes.type,
    children: React.PropTypes.Underline,
    children: React.PropTypes.url,
    children: React.PropTypes.visible,
    children: React.PropTypes.Weekendtask,
    children: React.PropTypes.width,
    children: React.PropTypes.url,
};
*/

export default App;
