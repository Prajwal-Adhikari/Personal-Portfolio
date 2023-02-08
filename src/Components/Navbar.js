import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";
function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    const location = useLocation();

    useEffect(()=>{
        setExpandNavbar(false);
    },[location])
    return (
        <div className='navbar' id={expandNavbar ? "open" : "close"}>
            {/*toggle button for small viewport */}
            <div className='toggleButton'>
                <button onClick={()=>{
                    setExpandNavbar((prev) => !prev);
                }}>
                <ReorderIcon/>
                 </button>
            </div>

            {/* links*/}
            <div className='links'>
                <Link to="/">Home</Link>
                <Link to="/experiences">Experiences</Link>
                <Link to="/projects">Projects</Link>
            </div>


        </div>
    )
}

export default Navbar