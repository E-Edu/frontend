import React, { Component } from 'react';
import './ReportsList.scss';
import Report from '../Report';

class ReportsList extends Component {
    render() {
        return (
            <div>
                <div id="main">
                    <h1 className="text-dark report-text-content">Reports</h1>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Report
                            subject="Mathe | Grundrechnen | Plus"
                            messages="20"
                            teacher="Herr Lehrer Mustermann"
                            likes="3"
                            dislikes="178"
                            difficulty="easy"
                        />
                        <Report
                            subject="Englisch | Grammatik | Komma"
                            messages="100"
                            teacher="Herr Lehrer Mustermann"
                            likes="20"
                            dislikes="1"
                            difficulty="hard"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default ReportsList;
