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
            <input ref={fileRef} type="file" id="file"/>
            <input ref={textRef} type="text" placeholder="Type a message" />
            <input onClick={handleSubmit} ref={submitRef} type ="submit" value="Ask Me!" />
        </div>
    )
}
export default Inputs;