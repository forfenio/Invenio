import React, { useState } from 'react';


function Post (props) {

    const [like, setLike] = useState(props.post.likedBy.includes(props.userProps.id));
    const [numberOfLikes, setNumberOfLikes] = useState(props.post.likes);

    const likeFunction = async () => {
        await fetch('http://localhost:3000/posts/'+props.post.id, {
            method: 'PATCH',
            headers: { 
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                likes: numberOfLikes + 1,
                likedBy: [...props.post.likedBy, props.userProps.id]
            })
        });

        setLike(!like);
        setNumberOfLikes(numberOfLikes+1);
    }

    const dislikeFunction = async () => {
        await fetch('http://localhost:3000/posts/'+props.post.id, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                likes: numberOfLikes - 1,
                likedBy: props.post.likedBy.filter((value) => value !== props.userProps.id)
            })
        });
        setLike(!like);
        setNumberOfLikes(numberOfLikes-1);
    }

    return (
        <div className="post">
            <img src={props.post.picture} alt="post-pic" />
            <div>
                <p>{props.post.userName}</p>
                <p>{props.post.description}</p>
                {like ? (
                    <span className="liked" onClick={dislikeFunction}>{numberOfLikes}</span>
                ) : (
                    <span className="likes" onClick={likeFunction}>{numberOfLikes}</span>
                )}
                
                <span className="comments">{props.post.comments.length}</span>
            </div>
            
        </div>
    );
}

export default Post