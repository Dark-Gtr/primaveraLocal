import React from "react";
import { LoginFB } from "../loginFB/LoginFB";
import { Navbar } from "../navbar/navbar";

function AppUI () {
    return (
        <>
            <Navbar/>
            <LoginFB/>
            
            <main></main>
            <footer></footer>
        </>
    )
}

export {AppUI}