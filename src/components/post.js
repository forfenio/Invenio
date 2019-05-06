import React, { useState } from 'react';
import ReactModal from 'react-modal';

function Post (props) {

    const [showModal, setShowModal] = useState(false);

    //const commentsLength = props.comments.length();

    const modalToggle = () => {
        setShowModal(!showModal);
    }

    const contentStyle = {
        position: 'relative',
        left: '7vw',
        right: '7vw',
        minHeight: '610px',
        margin: '0 auto',
        border: 'none',
        width: '50%',
        background: 'moccasin',
        overflow: 'auto',
        borderRadius: '4px',
        bottom: 'unset',
        outline: 'none',
        padding: '35px',
    }

    const arrowStyle = {
        height: '3rem',
        
        cursor: 'pointer'
    }

    const headingStyle = {
        margin: '0.9rem 0 0 1rem'
    }

    const modalHeaderStyle = {
        display: 'flex',
        margin: '0 0 1.5rem 0'
    }

    const postImageStyle = {
        minHeight: '200px',
        maxHeight: '600px',
        display: 'block',
        margin: '0 auto'
    }


    return (
        <div className="post">
            <img onClick={modalToggle} src={props.picture} alt="post-pic" />
            <div>
                <p>{props.userName}</p>
                <p>{props.description}</p>
                <span className="likes">{props.likes}</span>
                <span className="comments">{props.comments.length}</span>
            </div>
            <ReactModal
                isOpen={showModal}
                closeTimeoutMS={200}
                style={{content: contentStyle}}
                overlayClassName="ReactModal__Overlay"
            >
                <div style={modalHeaderStyle}>
                    <img onClick={modalToggle} style={arrowStyle} src={require("../arrow-left.svg")} alt={"back-arrow"} />
                    <h3 style={headingStyle}>{props.userName}</h3>
                </div>
                <div>
                    <img style={postImageStyle} src={props.picture} alt={props.description} />
                </div>
                
            </ReactModal>
        </div>
    );
}

export default Post;