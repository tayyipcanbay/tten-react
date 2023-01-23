import React, { useEffect,useState } from "react";
import "../styles/chat.css";
import Message from "./message";

let welcomeMessage = [{
    from: false,
    message: "Welcome to Ask Me!"
}]

let tempChat= [
    {
        from: true,
        message: "Hello"
    },
    {
        from: false,
        message: "Hi"
    },
    {
        from: true,
        message: "How are you?"
    },
    {
        from: false,
        message: "I'm fine, thanks"
    },
    {
        from: true,
        message: "What about you?"
    },
    {
        from: false,
        message: "I'm fine too"
    },
    {
        from: true,
        message: "Nice to hear that"
    },
    {
        from: false,
        message: "Yeah"
    },

]

const Chat = () => {
    const [messages, setMessages] = useState(welcomeMessage);

    const renderMessages = () => {
        return messages.map((message, index) => {
            return (
                <Message key={index} from={message.from} message={message.message} />
            )
        })
    }

    return (
        <div className="chat">
            <div className="messages">
                {renderMessages()}
            </div>
        </div>

    )
}
export default Chat;