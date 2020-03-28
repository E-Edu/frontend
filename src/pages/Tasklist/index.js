import React from 'react';
import './index.scss';
import UsersIcon from "../../components/icons/user.icon.js";
import UserIcon from '../../components/icons/users.icon.js';
import Award from "../../components/icons/award.icon";
import Search from "../../components/icons/search.icon"
import colorData from "../../lib/Colors";
import {Link} from "react-router-dom";

class Task extends React.Component {
    render() {
        const color = colorData.difficultyColor[this.props.schwere];
        let bgColor = [color.bg, color.border];
        return <div className="Task">
            <div className="Task_Head">
                <span>{this.props.name}</span>
                <div className='Task_Head_Elements'>
                    <div className='Task_element'>
                        <span>{this.props.Anzahl_Fragen}</span>
                        <span>Fragen</span>
                    </div>
                    <div className='Task_element'>
                        <Award className="ico" stroke="#3A506B"/>
                        <span>{this.props.richtige_Fragen}</span>
                    </div>
                    <span style={{
                        display: "flex", alignItems: "center", marginRight: 20, color: "#1C2541",
                        right: 0, justifyContent: "flex-end", backgroundColor: bgColor,
                        borderWidth: 1, borderStyle: "solid", borderColor: bgColor[1], borderRadius: 10,
                        padding: "0.0rem 0.33333334rem"
                    }}>{this.props.schwere}</span>
                </div>
            </div>
            <div className="Task_Bottom">
                <span>{this.props.Beschreibung}</span>
            </div>
        </div>
    }
}

class Tasklist extends React.Component {

    constructor(props) {
        super(props);
    }

    state = {
        search: "",
        tasks: [],
    };

    OnChangeSearch = () => {
        this.setState({
            Search: document.getElementById("site-search").value
        });
        //Übergabe an Backend
    };

    loadFakeData() {
        this.state.tasks.push(
            {
                description: "A short description what to do in this task",
                difficulty: "easy",
            },
            {
                description: "A short description what to do in this task",
                difficulty: "medium",
            },
            {
                description: "A short description what to do in this task",
                difficulty: "hard",
            }
        );

        this.setState(this.state);
    }

    componentDidMount() {
        this.loadFakeData();
    }

    renderTasks() {
        console.log("render tasks", this.state)
        console.log("tasks", this.state.tasks.length)
        for (let task of this.state.tasks) {
            console.error(task)
        }
        return this.state.tasks.map((value, index) => {
            console.log("task: ",value)
            return  <Link key={index} to='/task/subject' style={{ textDecoration: 'none', color: "inherit" }}>
                        <Task
                            name={"Aufgabe " + (index + 1)}
                            Anzahl_Fragen="12"
                            richtige_Fragen="10"
                            schwere={value.difficulty}
                            Beschreibung={value.description}/>
                    </Link>
        });
    }

    render() {

        return <div>
            <div className="Tasklist" id="main">
                <div className='resultContentHeader'>
                    <div className='resultLeft'>
                        <span className='resultSubject'>
                            Task
                        </span>
                    </div>

                    <div className="Middle">
                        <div className='resultCenter'>

                            <div className='resultSubject'>
                                <UsersIcon className="ico" stroke="#3A506B"/>
                                <span className="points">213</span><span className="points">Punkte</span>
                            </div>

                        </div>
                        <div className='resultCenter' id="second">

                            <div className='resultSubject'>
                                <UserIcon className="ico" stroke="#3A506B"/>

                                <span className="points">21.323</span><span className="points">Punkte</span>
                            </div>

                        </div>
                    </div>
                    <div className='resultRight'>
                        <span className='resultSubject'>
                            <div id='input-search'>
                                <Search height="30" width="30"/>
                                <input onChange={this.OnChangeSearch} type="text" id="site-search" name="Search"
                                       aria-label="Search"
                                       placeholder="Suche"/>
                            </div>
                        </span>
                    </div>

                </div>

                <div id="Task-Content-List">
                    {this.renderTasks()}
                </div>
            </div>
        </div>;

    }
}

export default Tasklist;
