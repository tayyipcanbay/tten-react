import React,{useState,useEffect} from "react";
import "../styles/ask.css";
import Panel from "../components/panel";
import Search from "../components/search";

const Ask = () => {
    const [mail, setMail] = useState("");
    const [token, setToken] = useState("");
    const [userId, setUserId] = useState("");
    const [isLogin, setIsLogin] = useState(false);

    const deleteLocalStorage = () => {
        localStorage.removeItem("mail");
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        window.location.href = "/";
    }

    useEffect(() => {
        setMail(localStorage.getItem("mail"));
        setToken(localStorage.getItem("token"));
        setUserId(localStorage.getItem("userId"));
        if (mail !== null && token !== null && userId !== null) {
            setIsLogin(true);
        } else {
            setIsLogin(false);
            deleteLocalStorage();
        }
    }, [mail, token, userId]);

    return (
        <div className="ask-body">
            <Panel deleteLocalStorage={deleteLocalStorage}/>
            <Search/>
        </div>
    )
}

export default Ask;
