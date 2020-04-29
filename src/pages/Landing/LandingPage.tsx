import React from 'react';
import './LandingPage.scss';
import { Route } from 'react-router-dom';
import Modal from 'react-animated-modal';
import { gql } from 'apollo-boost';
import parse from 'html-react-parser';
import { observer } from 'mobx-react';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import Query from '../../lib/api/Query';
import { t } from '../../i18n/i18n';
import LandingPageStore from '../../store/landingPage.store';

// eslint-disable-next-line
const landingPageStore = new LandingPageStore();

@observer
class LandingPage extends React.Component {
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
                    <Route path={['/login', '/register']}>
                        <Modal
                            visible
                            closemodal={() => {
                                // TODO redirect to '/'
                            }}
                            type="fadeIn">
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/register" component={Register} />
                        </Modal>
                    </Route>
                    <div className="content">
                        <div className="text-content">
                            <h2>{parse(t.t('page.landing.title', 'Education for <span>You</span>'))}</h2>
                            <h4>
                                {parse(
                                    t.t(
                                        'page.landing.description',
                                        'E-Edu is a learning platform created as part of the hackathon #WirVsVirus by the team <span>"The Morpheus Tutorials"</span>.<br>E-Edu offers a learning platform for students who can work on tasks created by teachers.'
                                    )
                                )}
                            </h4>
                        </div>
                        <img className="hero-image" src="assets/landing-person.svg" alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
