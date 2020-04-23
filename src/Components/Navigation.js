import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

function Navigation(){
    return (
        <div className="navi">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Navigation;