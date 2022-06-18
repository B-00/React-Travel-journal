import React from "react";

export default function Navbar() {
    return (
        <nav>
            <img className="nav-img" src={require('../images/globe.PNG')} alt="globe"></img>
            <p className="title">my travel journal.</p>
        </nav>
    );
}