import React, { Component } from 'react';
import './index.scss';
import {ReactComponent as User} from '../../assets/icons/user.svg';
import {ReactComponent as Users} from '../../assets/icons/users.svg';
import {ReactComponent as Award} from '../../assets/icons/award.svg';
import {ReactComponent as Search} from '../../assets/icons/search.svg';
import {ReactComponent as Circle} from '../../assets/icons/circle.svg';
import SideBar from"../../components/Sidebar";
import Header from "../../components/Header";
import Axios from 'axios';
import AppolloClient, { from } from 'apollo-boost';
import { gql } from "apollo-boost";


class ChooseTaskPackage extends Component{ //bei GraphQL Queries und Mutations lernen
    constructor(props){
        const client = new AppolloClient({
            uri: 'https://48p1r2roz4.sse.codesandbox.io',
         /* TaskUri: 'https://task.e-edu.the-morpheus.de/',
            UserUri: 'https://user.e-edu.the-morpheus.de/',
            TestUri1: 'https://api.e-edu.the-morpheus.de/playground',
            TestUri2: 'https://api.e-edu.the-morpheus.de/graphql'
            */
        });
        try{
        client.query({
            query: gql`
              {
                rates(currency: "USD") {
                  currency
                }
              }
            `
          })
          .then(result => console.log(result));
        }catch{
            alert("Error");
        }
        super(props);
        this.state = {
            tasks: [],
            teachers: [],
            subject: "Fach",
            SinglePoints: 236,
            CommunityPoints: 2387
        
        };
        this.taskClicked = this.taskClicked.bind()
     
    }
    _handleKeyDown = (e)=>{

    }
    componentDidMount(){
        this.ticker = setInterval(() => this.ticker,5000);
        Axios.get(`http://localhost:3000`).then (res=>{
        const UserPoints = res.data.UserPoints;
        const CommunityPoints = res.data.CommunityPoints;
        const subject = res.data.subject;
        const tasks  = res.data.tasks;
        const teachers = res.data.teachers;
    })
    }
   
    componentWillUnmount(){
        clearInterval(this.ticker);
    }
    tick(){
        this.setState({});
    }
    taskClicked(){
       window.open('/task',"_self");
    }
    handleSearchInput = (e)=>{

    }
    render(){
        var subject = "Fach";
        var CommunityPoints = this.CommunityPoints+" Punkte";
        var SinglePoints = this.UserPoints + " Punkte";
        return(
        <div>  
            <Header className="Header" side="Dashboard"></Header>
            <SideBar id='SideBar' side="SideBar"></SideBar>  
              <header>
                 <text className='module'>{subject}</text>
                    <div id='PointsDiv'>
                        <User className="SingleUserPoints"></User>
                        <text className="SingleUserPointsTV">{SinglePoints}</text>
                        <Users className="GroupUserPoints"></Users>
                        <text className='GroupPointsTV'>{CommunityPoints}</text>
                    </div>
                    <div >
                        <Search id='SearchBoxIcon'>Search</Search>
                             <form onSubmit={this.handleSubmit}>
                                <div>
                                    <label className="SearchText">
                                        <Search id='SearchBoxIcon'></Search>
                                        <input type="text" value={this.state.value} onChange={this.handleSearchInput} onKeyDown={this._handleKeyDown} /> 
                                    </label>
                                </div>
                            </form>
                         </div>
                    </header>
                  <List/>
            </div>
            );
        }
        handleSearchInput(){
           
        }
}
class DisplayUI extends Component{ //Aufgabenpacket
    constructor(props){
        super(props);
        this.state={};
    }
    taskClicked(){
        window.open('/task',"_self");
     }

    render(){
        var teacher = "Lehrer";
        var TaskOneHead = "Aufgabenpaket 1";
        var TaskTwoHead = "Aufgabenpaket 2";
        var TaskThreeHead = "Aufgabenpaket 3";
        var TestText = " Kurzer Beschreibungstext eine Aufgabe, die für Grundschüler gedacht ist. Das ergibt keinen Sinn, da die den  Text eh nicht lesen werden. Naja mir egal… Ältere Schüler*innen schon.";
        var TaskOneText = TestText;
        var TaskTwoText = TestText;
        var TaskThreeText = TestText;
        var TaskOneQuestions = "734 Fragen";
        var TaskTwoQuestions = "2563 Fragen";
        var TaskThreeQuestions = "3786 Fragen";
        var TaskOneCorrect = "234 Richtig";
        var TaskTwoCorrect = "346 Richtig";
        var TaskThreeCorrect = "347 Richtig";
        var TaskOneDifficulty = "leicht";
        var TaskTwoDifficulty= "mittel";
        var TaskThreeDifficulty = "schwer";
        return(
            <div10>
                <div9 className="teacherDiv">
                    <Circle className='ProfileImage'></Circle>
                    <text className='teacher'>{teacher}</text>
                </div9>
                <div3 className='Task1'>
                    <text className='Task1Head' onClick={this.taskClicked}>{TaskOneHead}</text>
                    <text className='Questions1'>{TaskOneQuestions}</text>
                    <Award id='Award1'>Award</Award>
                    <text className='Correct1'>{TaskOneCorrect}</text>
                    <text className='easyInfo' >{TaskOneDifficulty}</text>
                    <text className='Task1Text' onClick={this.taskClicked}>{TaskOneText}</text>
                </div3>
                <div4 className='Task2'>
                    <text className='Task2Head' onClick={this.taskClicked}>{TaskTwoHead}</text>
                    <text className='Questions2'>{TaskTwoQuestions}</text>
                    <Award id='Award2'>Award</Award>
                    <text className='Correct2'>{TaskTwoCorrect}</text>
                    <text className='middleInfo'>{TaskTwoDifficulty}</text>    
                    <text className='Task2Text' onClick={this.taskClicked}>{TaskTwoText}</text>
                </div4>
                <div5 className='Task3'>
                    <text className='Task3Head' onClick={this.taskClicked}>{TaskThreeHead}</text>
                    <text className='Questions3'>{TaskThreeQuestions}</text>
                    <Award id='Award3'>Award</Award>
                    <text className='Correct3'>{TaskThreeCorrect}</text>
                    <text className='hardInfo'>{TaskThreeDifficulty}</text>             
                    <text className='Task3Text' onClick={this.taskClicked}>{TaskThreeText}</text>
                </div5>
            </div10>
        );
    }            
}
class List extends React.Component{ //baut eine Liste mit den verfügbaren Aufgabepacketen
    createTable(){
        let table = [];
        for (let i = 0;i<10;i++){
            table.push(<tr><td><DisplayUI key={i}/></td></tr>); //fügt Aufgabenpacket in Liste ein
        }
        return table;
    }
    render(){ //rendert Liste
        return (
            <table>
                {this.createTable()}
            </table>
        );
    }
}
export default ChooseTaskPackage;