import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
function Navbar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Souvik React</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                        <NavLink to="/">Home</NavLink>
                        </li>&nbsp;&nbsp;
                        <li class="nav-item">
                        <NavLink to="lists">Alllists</NavLink>
                        </li>


                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar