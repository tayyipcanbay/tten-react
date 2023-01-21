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
            <div>
                Logged in with: {mail}
            </div>
            <div>
                Token: {token}
            </div>
            <div>
                Logout
                <button onClick={props.deleteLocalStorage} type="submit">
                    Logout
                </button>
            </div>
        </div>
    )
         
}
export default Panel;