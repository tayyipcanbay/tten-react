import React, { useEffect, useState } from "react";
import "../styles/panel.css";

const Panel = (props) => {
    const [mail, setMail] = useState("");
    const [token, setToken] = useState("");
    const [userId, setUserId] = useState("");

    useEffect (() => {
        setMail(localStorage.getItem("mail"));
        setToken(localStorage.getItem("token"));
        setUserId(localStorage.getItem("userId"));
    }, [mail, token, userId]);
    
    return (
        <div className="panel-body">
            <div id="mail" className="panel-item">
                Logged in with: <br></br>{mail}
            </div>
            <div id="token" className="panel-item">
                Token: <br></br>{token}
            </div>
            <div id="logout" className="panel-item">
                <button onClick={props.deleteLocalStorage} type="submit">
                    Logout
                </button>
            </div>
        </div>
    )
         
}
export default Panel;