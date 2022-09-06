import React from "react";
import icon from "../image/icon.png"
function Header (){
    return(
        <header>
            <img className="app-logo" src={icon}/>
            <p className="app-tittle">my travel journal.</p>
        </header>
    );
}
export default Header;