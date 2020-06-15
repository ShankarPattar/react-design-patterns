import React from "react";
import './style.css';

function NavBar(){
    return (
    <div >
    <ul>
        <li><a href="/styledcomponent">
    Styled Component
        </a></li>
        <li> <a  href="/purecomponent">
    Pure Component
        </a></li>  
        <li> <a href="/compound">
    Compound Component
        </a></li>
        <li><a href="/container">
    Container/Presentational
        </a></li>
        <li><a href="/contextcomp">
    Context Component
        </a></li>
        <li><a href="/errorboundary">
    Error Boundary
        </a></li>
    
        </ul>
    </div>);
}

export {NavBar}