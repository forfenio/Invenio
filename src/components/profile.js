import React from 'react';
import { connect } from 'react-redux';

function Profile (props) {
    return (
        <div>
            Profile
            <p>{props.userName}</p>
            <p>{props.password}</p>
        </div>
    );
}

export default Profile;