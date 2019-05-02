import React, { useEffect } from 'react';

function Profile (props) {

    useEffect(() => {
        console.log(props);
    })

    const goBack = () => {
        window.history.back();
    }

    return (
        <div className="profile">
            <div className="profile-header">
                <span onClick={goBack}>
                    <img src={require("../arrow-left.svg")} alt={"back-arrow"} />
                </span>
                <span>
                    <img src={require("../heart-regular.svg")} alt={"like"} />
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