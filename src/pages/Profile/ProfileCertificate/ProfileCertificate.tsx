import React from 'react';
import './ProfileCertificate.scss';
import { Award, Download } from 'react-feather';
import { t } from '../../../i18n/i18n';

interface ProfileCertificateProps {
    title: string;
    date: string;
}

class ProfileCertificate extends React.Component<ProfileCertificateProps> {
    render() {
        return (
            <div className="profile-certifikate">
                <div className="certificates-row">
                    <div className="titel-certificate">
                        <Award className="badge-image" />
                        <p className="badge-title">{this.props.title}</p>
                    </div>
                    <div className="date-certificate">
                        <p className="date">{`${t.t('component.profileCertificate.date', 'Reached at')} ${
                            this.props.date
                        }`}</p>
                    </div>
                </div>
                <Download className="download-image" />
            </div>
        );
    }
}

export default ProfileCertificate;
