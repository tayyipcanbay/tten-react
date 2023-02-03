import React, { createRef, useState } from "react";  
import "../styles/inputs.css";

const Inputs = (props) => {
    const fileRef = createRef();
    const textRef = createRef();
    const submitRef = createRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const file = fileRef.current.value;
        const text = textRef.current.value;
        props.getInputs(file, text);

    }

    return(
        <div className="input">
            <label id="custom-file-upload">
                <input ref={fileRef} type="file" id="file"/>
                <span>Upload a file</span>
            </label>
            <input ref={textRef} type="text" placeholder="Type a message" />
            <input onClick={handleSubmit} ref={submitRef} type ="submit" value="Ask" />
        </div>
    )
}
export default Inputs;