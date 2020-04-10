import React from 'react';
import './LandingPage.scss';
import { Route } from 'react-router-dom';
import Modal from 'react-animated-modal';
import { gql } from 'apollo-boost';
import Login from '../../components/Login/Login';
import Register from '../../components/Register/Register';
import Query from '../../lib/api/Query';
import { t } from '../../i18n/i18n';

interface LandingPageProps {

}

interface LandingPageState {
    showModal: boolean;

}


class LandingPage extends React.Component<LandingPageProps, LandingPageState> {
    constructor(props) {
        super(props);
        this.state = { showModal: false };
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
            `,
        );
    }

    render() {
        return (
            <div className="landing">
                <div className="main">
                    <Modal
                        visible={this.state.showModal}
                        closemodal={() => {
                            this.setState({ showModal: false });
                        }}
                        type="fadeIn">
                        {/* TODO Route zurück auf /login /register */}
                        <Route exact path="/dashboard" component={Login}/>
                        <Route exact path="/dashboard" component={Register}/>
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
                                        'E-Edu is a learning platform created as part of the hackathon #WirVsVirus by the team <span>"The Morpheus Tutorials"</span>.<br>E-Edu offers a learning platform for students who can work on tasks created by teachers.',
                                    ),
                                }}
                            />
                        </div>
                        <img className="hero-image" src="assets/landing-person.svg" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}

export default LandingPage;
