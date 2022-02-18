import React from "react";
import { IoMenu } from "react-icons/io5";

import './navbar.css'
const Navbar = () => {
    return (
        <header>
            <button className="button-navbar">
                <IoMenu/>
            </button>
            
            <nav>
                <p>hola soy el navbar</p>
            </nav>
            
        </header>
    )
}

export {Navbar}