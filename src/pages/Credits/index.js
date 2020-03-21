import React, {Component} from 'react';
import './index.scss';
import Header from "../../components/Header";
import Footer from "../../components/Footer";

class Credits extends Component {
    constructor(props) {
        super(props);
    }

    state = {};

    render() {
        return <div className='credits'>
            <Header side='Landing'/>
            <div className="content">
                <div className="picture">
                    <img src="assets/credits-heroimage.svg" alt="Hero image"/>
                </div>
                <div className="credits">
                    <div className="featuretext">
                        <h1 className="heading">E-Edu</h1>
                        <p className="communityproject">
                            Ein Community Projekt der<br/>
                            theMorpheus Community<br/>
                            Im Rahmen des <span>#WirVsVirusHackertron</span> 2020
                        </p>
                        <p className="teilnehmende">
                            An diesem Projekt haben 67 begeisterte<br/>
                            Entwickler*innen, Designer*innen,<br/>
                            Organisator*innen mitgewirkt.
                        </p>
                    </div>
                    <div className="mitwirkende">
                        <h2 className="subheading">Mitwirkende</h2>
                        <div className="morpheus">
                            <h3 className="idea">Projektidee und Leitung</h3>
                            <p className="name">TheMorpheus (Cedric)</p>
                        </div>
                        <div className="credits-container">
                            <div className="orga">
                                <h4 className="cerdits-heading">Organisation</h4>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                            </div>
                            <div className="backend">
                                <h4 className="cerdits-heading">Backend</h4>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                            </div>
                            <div className="frontend">
                                <h4 className="cerdits-heading">Frontend</h4>
                                <p className="credits-name">Lea Laufner (18)</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                                <p className="credits-name">Peter</p>
                            </div>
                            <div className="design">
                                <h4 className="cerdits-heading">Design/Layout</h4>
                                <p className="credits-name">Adrian Görisch (24)</p>
                                <p className="credits-name">Peter</p>
                            </div>
                            <div className="logo">
                                <h4 className="cerdits-heading">Logo</h4>
                                <p className="credits-name">Peter</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>;
    }
}

export default Credits;
