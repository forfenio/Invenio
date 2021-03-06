import React, { useEffect } from 'react';

function Profile (props) {

    useEffect(() => {
        console.log(props);
    })

    return (
        <div className="profile">
            <div className="profile-header">
                <span>
                    <img src={require("../pen-solid.svg")} alt={"new-post"} />
                </span>
                <span>
                    <img src={require("../cog-solid.svg")} alt={"settings"} />
                </span>
            </div>
            <img src={"https://s3-media4.fl.yelpcdn.com/bphoto/d5jrXTgjiCKDTLS5sqWJgw/o.jpg"} alt="avatar" />
            <p>{props.userName}</p>
            <div>

            </div>
            <div className="posts">
                {
                    props.postImgs.map((img, index) => <img src={img} alt="post" key={index}/>)
                }
            </div>
        </div>
    );
}

export default Profile;