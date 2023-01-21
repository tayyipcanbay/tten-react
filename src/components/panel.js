import React, { useEffect, useState } from "react";

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
        <div>
            <div>
                Logged in with: {mail}
            </div>
            <div>
                Token: {token}
            </div>
            <div>
                Logout
                <button type="submit">
                    Logout
                </button>
            </div>
        </div>
    )
         
}
export default Panel;