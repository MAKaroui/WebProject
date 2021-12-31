import React from "react";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <div className="dt dt--fixed w-100 border-box pa3 ph5-ns bb b--black-10">
            <Link to="/">Home</Link>
            <Link to="/CreateTask">Add Task</Link>
        </div>
    )
}

export default Navbar