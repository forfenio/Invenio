import React from 'react';

function Post (props) {

    //const commentsLength = props.comments.length();
    return (
        <div className="post">
            <img src={props.picture} alt="post-pic" />
            <div>
                <p>{props.userName}</p>
                <p>{props.description}</p>
                <span className="likes">{props.likes} </span>
                <span className="comments">{props.comments.length}</span>
            </div>
            
        </div>
    );
}

export default Post;