import React from 'react';

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