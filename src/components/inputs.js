import React, { createRef, useState } from "react";  
import "../styles/inputs.css";

const Inputs = (props) => {
    const fileRef = createRef();
    const textRef = createRef();
    const submitRef = createRef();

    const [file, setFile] = useState("");
    const [text, setText] = useState("");


    return(
        <div className="input">
            <input ref={fileRef} type="file" id="file"/>
            <input ref={textRef} type="text" placeholder="Type a message" />
            <input ref={submitRef} type ="submit" value="Ask Me!" />
        </div>
    )
}
export default Inputs;