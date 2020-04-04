import React, { Component } from 'react';
import './LandingPage.scss';
import { Redirect, Route } from 'react-router-dom';
import Modal from 'react-animated-modal';
import { gql } from 'apollo-boost';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import Query from '../../lib/api/Query';
import { WithT as i18n } from 'i18next';

class LandingPage extends Component {
    state = { showModal: false, redirect: false };

    login() {
        Query.mutationGQL(
            gql`
                mutation {
                    authenticate(userAuth: { passwordHash: "Test", key: "Max" }) {
                        result
                    }
                    jwt {
                        token
                        status
                    }
                }
            `,
        );
    }

    render() {
        return (
            <div className="landing">
                <div className="main">
                    {(() => {
                        if (this.state.redirect) {
                            this.setState({ redirect: false });

                            return <Redirect exact to={this.state.redirect}/>;
                        }
                    })()}

                    {/* TODO Route zurück auf /login /register */}
                    <Route
                        exact
                        path={['/dashboard', '/dashboard']}
                        render={() => {
                            if (!this.state.showModal && !this.state.redirect) {
                                this.setState({ showModal: true });
                            }
                        }}
                    />

                    <Modal
                        visible={this.state.showModal}
                        closemodal={() => {
                            this.setState({ showModal: false, redirect: '/' });
                        }}
                        type="fadeIn">
                        {/* TODO Route zurück auf /login /register */}
                        <Route exact path="/dashboard" component={Login}/>
                        <Route exact path="/dashboard" component={Register}/>
                    </Modal>

                    <div className="content">
                        <div className="text-content">
                            <h2>{i18n.t('page.landing.title', 'Education for <span>You</span>')}</h2>
                            <h4>
                                {i18n.t(
                                    'page.landing.description',
                                    'E-Edu ist eine Lernplattform die im Rahmen des Hackathon #WirVsVirus vom Team  <span>"The Morpheus Tutorials"</span> erstellt wurde.<br>E-Edu bietet eine Lernplattform für Schüler die von Lehrern erstellte Aufgaben bearbeiten können.',
                                )}
                            </h4>
                        </div>
                        <img className="hero-image" src="assets/landing-person.svg" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
