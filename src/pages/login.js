import React ,{useState, useEffect} from "react";
import "../styles/login.css";

const reqURL = "http://192.168.1.174:3131/login";

const Login = () => {
    const mailRef = React.createRef();
    const tokenRef = React.createRef();
    const [mail, setMail] = useState("");
    const [token, setToken] = useState("");
    const [userId, setUserId] = useState("");
    const [isLogin, setIsLogin] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setMail(mailRef.current.value);
        setToken(tokenRef.current.value);
    }
    const createLocalStorage = (mail,token,userId) => {
        localStorage.setItem("mail", mail);
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
    }
    const deleteLocalStorage = () => {
        localStorage.removeItem("mail");
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
    }


    useEffect(() => {
        if (mail !== "" && token !== "") {
            const data = {
                mail: mail,
                token: token
            }
            fetch(reqURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                if (res.status === 200) {
                    setIsLogin(true);
                    setUserId(res.userId);
                    createLocalStorage(mail, token, userId);
                    console.log("Login successful");
                    window.location.href = "/ask";
                } else {
                    setIsLogin(false);
                    deleteLocalStorage();
                    console.log("Login failed");
                }
            })
            .catch(err => {
                console.log(err);
            })
        }
    }, [mail, token, userId])

    if (isLogin) {
        return (
            <div className="login">
                <h1>Logged in successfully</h1>
            </div>
        )
    } 
    else {
        return (
            <div className="login-body">
            <div>
                <h1>Login Page</h1>
                <form>
                    <label>
                        Mail address:
                        <input ref={mailRef} type="mail" name="mail" />
                    </label>
                    <label>
                        Token:
                        <input ref={tokenRef} type="password" name="token" />
                    </label>
                    <input onClick={handleSubmit} type="submit" value="Submit" />
                </form>
            </div>
        </div>
        )

    }
}

export default Login;