import React, { useEffect,useState } from "react";
import "../styles/chat.css";
import Message from "./message";

let welcomeMessage = [{
    from: false,
    message: "Welcome to TTEN!"
}]

const Chat = (props) => {
    const [messages, setMessages] = useState(props.messages);
    
    useEffect(()=>{
        setMessages(props.messages);
    },[props.messages])

    const renderMessages = () => {
        console.log("messages Chat.js",messages);
        return messages.map((message, index) => 
            <Message key={index} from={message.from} message={message.message}/>
        )
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