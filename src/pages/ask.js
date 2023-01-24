import React,{useState,useEffect} from "react";
import "../styles/ask.css";
import Panel from "../components/panel";
import Chat from "../components/chat";
import Inputs from "../components/inputs";

const reqFileURL = "http://localhost:3131/ask-file";
const reqTextURL = "http://localhost:3131/ask-text";

const Ask = () => {
    const [mail, setMail] = useState("");
    const [token, setToken] = useState("");
    const [userId, setUserId] = useState("");
    const [isLogin, setIsLogin] = useState(false);

    const [fileInput, setFileInput] = useState("");
    const [textInput, setTextInput] = useState("");

    useEffect(()=>{
        console.log("file: ",fileInput);
        console.log("text: ",textInput);

    },[fileInput, textInput])

    

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
    }, [mail, token, userId, isLogin]);

    const deleteLocalStorage = () => {
        localStorage.removeItem("mail");
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        window.location.href = "/";
    }

    const getInputs = (file, text) => {
        setFileInput(file);
        setTextInput(text);
        ask(file, text)
    }

    const ask = (fileInput,textInput) => {
        let type=""
        let prompt = "";
        if(fileInput !== "" && textInput !== ""){
            console.log("Please just choose one of them");
            setFileInput("");
            setTextInput("");
        } else if (fileInput === "" && textInput === "") {
            console.log("Please choose one of them");
        } else if(fileInput !== "") {
            console.log("Query started with file");
            type = "file";
            prompt = fileInput;
        } else if(textInput !== "") {
            console.log("Query started with text");
            type = "text";
            prompt = textInput;
        }
        let query ={
            "user":{
                "id": userId,
                "mail": mail,
                "token": token
            },
            "type": type,
            "prompt": prompt,
        }
        console.log("query",query);
        let res= sendQuery(query);
        console.log("res",res);
    }

    const sendQuery = (query) => {
        fetch(query["type"]==="file"?reqFileURL:reqTextURL,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(query)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return data;
        })
    }
    return (
        <div className="ask-body">
            <Panel deleteLocalStorage={deleteLocalStorage}/>
            <Chat/>
            <Inputs getInputs={getInputs}/>
        </div>
    )
}

export default Ask;
