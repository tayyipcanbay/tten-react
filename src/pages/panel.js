import React,{useState,useEffect} from "react";
import "../styles/panel.css";

const Panel = () => {
    const [mail, setMail] = useState("");
    const [token, setToken] = useState("");
    const [userId, setUserId] = useState("");
    const [isLogin, setIsLogin] = useState(false);

    const deleteLocalStorage = () => {
        localStorage.removeItem("mail");
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
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
            window.location.href = "/";
        }
    }, [mail, token, userId]);

    return (
        <div className="panel-body">
            Panel
        </div>
    )
}

export default Panel;
