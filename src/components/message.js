import React from "react";
import "../styles/message.css"

const Message = ({from, message}) => {
    return (
        <div className={from ? "message me" : "message you"}>
            <div className="message-content">
                <p>{message}</p>
            </div>
        </div>
    )
}
export default Message;