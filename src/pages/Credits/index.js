import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from '../../components/Login';
import Register from '../../components/Register';
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import './index.scss';
class Credits extends Component {
    constructor(props) {
        super(props);
    }
    state = {};

    render() {
        return <div className='credits'>
            <Header side='Landing'></Header>
            <div className='Main'>
                <div className='popup'>
                    <Route path='/login' component={Login} />
                    <Route path='/register' component={Register} />
                </div>
            </div>

            <div id='content-credits'>
                <div id='image-credits'>
                    <img id='credits-img' src="undraw_team_page_pgpr.svg" alt="undraw_team_page_pgpr" />
                </div>
                <div id='text-credits'>
                    <h2>E-Edu</h2>
                    <h3>
                        Ein Community Projekt der<br /> theMorpheus Community <br />Im Rahmen des <span>#WirVsVirusHackertron</span> 2020
                    </h3>
                    <p>
                        An diesem Projekt haben 67 begeisterte  <br />Entwickler*innen, Designer*innen,  <br />Organisator*innen mitgewirkt.
                    </p>
                    <p className='mitwirkende'>
                        Mitwirkende
                    </p>
                    <p className='leitung'>
                        Projektidee und Leitung <br />
                        <span>
                            TheMorpheus (Cedric)
                        </span>

                    </p>
                    <div id='list'>
                        <div id='Orga'>
                            <div className='titel-list'>
                                <p>Organisation</p>
                            </div>
                            <div>
                                Hans Peter (13)
                            </div>
                        </div>
                        <div id='backend'>
                            <div className='titel-list'>
                                <p>Backend</p>
                            </div>
                            <div>
                                Hans Peter (13)
                            </div>
                            <div>
                                Hans Peter (13)
                            </div>
                            <div>
                                Hans Peter (13)
                            </div>
                        </div>
                        <div id='frontend'>
                            <div className='titel-list'>
                                <p>Frontend</p>
                            </div>
                            <div>
                                Hans Peter (13)
                            </div>
                        </div>
                        <div id='des'>
                            <div className='titel-list'>
                                <p>Design/Layout</p>
                            </div>
                            <div>
                                Hans Peter (13)
                            </div>
                        </div>
                        <div id='logo'>
                            <div className='titel-list'>
                                <p>Logo</p>
                            </div>
                            <div>
                                Hans Peter (13)
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer></Footer>
        </div >;
    }
}

export default Credits;
