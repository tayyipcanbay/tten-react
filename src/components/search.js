import React, {useState, useEffect} from "react";
import "../styles/search.css";

const Search = () => {
    return (
        <div className="search-body">
            <div className="file-input-div">
                <input type="file" />
            </div>
            <div className="text-input-div">
            <input type={"text"} placeholder={"Ask me anything"}></input>
            </div>
            <input className="search-button" type={"submit"} value={"Search"}></input>
        </div>
    )
}
export default Search;