import React from 'react';
import './ProfileCertificate.scss';
import { Award, Download } from 'react-feather';
import { WithT as i18n } from 'i18next';

class ProfileCertificate extends React.Component {
    render() {
        return (
            <div className="profile-certifikate">
                <div className="certificates-row">
                    <div className="titel-certificate">
                        <Award className="badge-image" />
                        <p className="badge-title">{this.props.Title}</p>
                    </div>
                    <div className="date-certificate">
                        <p className="date">{`${i18n.t('profile.date')} ${this.props.Datum}`}</p>
                    </div>
                </div>
                <Download className="download-image" />
            </div>
        );
    }
}

export default ProfileCertificate;
