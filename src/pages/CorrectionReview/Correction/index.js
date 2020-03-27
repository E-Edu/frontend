import React, { Component } from "react";
import './index.scss';
import Header from '../../../components/Header';
import SideBar from '../../../components/Sidebar';
import {ReactComponent as  UserIcon}  from '../../../assets/icons/user.svg';
import {ReactComponent as CrossIcon} from '../../../assets/icons/x.svg';
import  {ReactComponent as CheckIcon} from '../../../assets/icons/check.svg';

class Correction extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    HandleCancelClick(){
        window.open('/dashboard',"_self");
    }
    SetAnswerAsWrong(){
        this.props.correctAnswer = false;
    }
    SetAnswerAsCorrect(){
        this.props.correctAnswer = true;
    }
    componentDidMount() {
        const top = document.getElementsByClassName('headerNavbar')[0].clientHeight;
        const left = document.getElementById('Menu').clientWidth;
        document.getElementById('Test').setAttribute("style", `margin-top:${top}px;margin-left:${left}px;`);
    }
    render(){
        var id = this.state.id;
        var UserName = "Benutzername";
        var TaskName = "Aufgabe: Plusrechnen für Einsteiger";
        const questions = ["Äpfel und Birnen","Kuchen Stücke","Blätter...","Alarm für Mathe 11","Abschlussfrage"];
        var correctAnswer = null;
        return( 
        <div id="Test">
            <Header className="Header" side="Dashboard"></Header>
            <SideBar></SideBar>
                <header>
                    <text className="Head">Korrektur</text>
                </header>
                <div>
                    <UserIcon  className="UserImage"/>
                    <text className="UserName">{UserName}</text>
                </div>
                <div>                        
                    <text className="Task">{TaskName}</text>
                </div>
                <div>
                    <text className="Questions">Fragen</text>
                </div>
                <LoadTask TaskID={id}
                upDate = {this.Update}/>
                <List/>   
        </div>
        );
    }
}
class LoadTaskList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: 0
        };
    }
  
    render(){
    var questions = ["Äpfel und Birnen","Kuchen Stücke","Blätter...","Alarm für Mathe 11","Abschlussfrage"];
    var id = this.props.id;
    const nonSelectColor = { color: 'black'};
    const selectColor = { color: '#5BC0BE'};
    if(id==LoadTask.TaskID){
        return(
            <div>
                <text className="QuestionOne" style={nonSelectColor}>{questions[id]} </text>
            </div>
        );
    }else{
        return(
            <div>
                <text className="QuestionOne" style={selectColor}>{questions[id]} </text>
            </div>
        );
    }
    }
}
class List extends React.Component{
    constructor(props){
        super(props);
        this.state=
        {
            questions: []
        }
    }
    createTable(){
        let table=[];
        for(let i = 0;i<5;i++){
            table.push(<tr><td><LoadTaskList id={i}/></td></tr>);
        }
        return table;
    }
    render(){
        return(
            <table>
                {this.createTable()}
            </table>
        );
    }
}
class LoadTask extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id: 0
        }
        this.nextClicked = this.nextClicked.bind(this);
    }
    render(){
        const questions = ["Äpfel und Birnen","Kuchen Stücke","Blätter...","Alarm für Mathe 11","Abschlussfrage"];
        const taskTexts = ["Frage eins Text", "Frage zwei Text", "Frage drei Text", "Frage vier Text","Frage fünf Text"];
        const Answers = ["1","1","1","1","1"];
        var correctAnswer = null;
        var id=  this.state.id;
        return(
            <div>
               <div>
            <text className="TaskTitle" changeTitle={this.changeTitle} title={this.state}>{questions[id]}</text>
        </div>
        <div>
        <text className="TaskContent">{taskTexts[id]}</text>
        </div>
        <div>
            <text className="Answer">Antwort: </text>
            <text className="AnswerByUser">{Answers[id]}</text>
        </div>
        <div>
            <line className="Divider"></line>
        </div>
        <div>
            <textarea className="answerComment">Anmerkung...</textarea>
        </div>
        <div>
            <button className="wrong" onClick={correctAnswer = false,this.SetAnswerAsWrong}>Falsch</button>
            <CrossIcon className="WrongIcon"onClick={correctAnswer = false,this.SetAnswerAsWrong}/>
            <button className="correct" onClick={correctAnswer = true,this.SetAnswerAsCorrect}>Richtig</button>
            <CheckIcon className="CorrectIcon" onClick={correctAnswer = true,this.SetAnswerAsCorrect}/>
        </div>
     <div>
        <button className="Cancel" onClick={this.HandleCancelClick}>Abbrechen</button>
        <button className="NextQuestion" onClick={this.nextClicked(id)}>Nächste Frage</button>
    </div>
    </div>
        );
    }
    nextClicked= (timesClicked)=>(event)=>{
        this.questions = ["Äpfel und Birnen","Kuchen Stücke","Blätter...","Alarm für Mathe 11","Abschlussfrage"];
        this.setState({id: this.state.id +1});
        if(this.state.id>=4){
            window.open('/correction/review',"_self");
        }
    }
    HandleCancelClick(){
        window.open('/dashboard',"_self");
    }
    SetAnswerAsWrong(){
        this.props.correctAnswer = false;
    }
    SetAnswerAsCorrect(){
        this.props.correctAnswer = true;
    }
   
}
export default Correction;