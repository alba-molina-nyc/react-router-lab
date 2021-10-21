import React from "react";
import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <div className="nav">
             <Link to="/stocks">
                <div>STOCKS</div>
            </Link>
            <Link to="/">
                <div>HOME</div>
            </Link> 
        </div>
    );
};
export default Nav;