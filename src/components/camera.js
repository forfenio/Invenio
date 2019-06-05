import React, { useState } from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

function CameraPage () {
    const [isCameraShown, setIsCameraShown] = useState(true);
    const [takenPhoto, setTakenPhoto] = useState("");

    const onTakePhoto = (dataUri) => {
        setTakenPhoto(dataUri);
        setIsCameraShown(!isCameraShown);
    }

    const closeImage = () => {
        setIsCameraShown(!isCameraShown);
        setTakenPhoto("");
    }


    if ( isCameraShown ) {
        return (
            <div className="react-html5-camera-photo camera">
                <Camera
                    onTakePhoto = { (dataUri) => { onTakePhoto(dataUri); } }
                />
            </div>
        );
    } else {
        return (
            <div className="react-html5-camera-photo camera">
                <span className="close-button" onClick={closeImage}></span>
                <img src={takenPhoto} alt="taken photo" />
            </div>
        );
    }
    
}

export default CameraPage;