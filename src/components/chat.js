import React from "react";
import "../styles/chat.css"

const Chat = () => {
    return (
        <div className="chat">
            <div className="messages">
                <div className="message you">
                    <div className="message-content">
                        <p>Hi, how are you?</p>
                    </div>
                </div>
                <div className="message me">
                    <div className="message-content">
                        <p>Hi, I'm fine, and you?</p>
                    </div>
                </div>
                <div className="message you">
                    <div className="message-content">
                        <p>Hi, how are you?</p>
                    </div>
                </div>
                <div className="message me">
                    <div className="message-content">
                        <p>Hi, I'm fine, and you?</p>
                    </div>
                </div>
            </div>
            
        </div>

    )
}
export default Chat;