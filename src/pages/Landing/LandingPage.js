import React, { Component } from 'react';
import './LandingPage.scss';
import { Redirect, Route } from 'react-router-dom';
import Modal from 'react-animated-modal';
import { gql } from 'apollo-boost';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import Query from '../../lib/api/Query.ts';
import { t } from '../../i18n/i18n';

class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = { showModal: false, redirect: false };
    }

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
            `
        );
    }

    render() {
        return (
            <div className="landing">
                <div className="main">
                    {(() => {
                        if (this.state.redirect) {
                            this.setState({ redirect: false });

                            return <Redirect exact to={this.state.redirect} />;
                        }
                        return null;
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
                        <Route exact path="/dashboard" component={Login} />
                        <Route exact path="/dashboard" component={Register} />
                    </Modal>

                    <div className="content">
                        <div className="text-content">
                            <h2
                                dangerouslySetInnerHTML={{
                                    __html: t.t('page.landing.title', 'Education for <span>You</span>'),
                                }}
                            />
                            <h4
                                dangerouslySetInnerHTML={{
                                    __html: t.t(
                                        'page.landing.description',
                                        'E-Edu is a learning platform created as part of the hackathon #WirVsVirus by the team <span>"The Morpheus Tutorials"</span>.<br>E-Edu offers a learning platform for students who can work on tasks created by teachers.'
                                    ),
                                }}
                            />
                        </div>
                        <img className="hero-image" src="assets/landing-person.svg" alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
