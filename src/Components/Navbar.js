import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"
function Navbar() {
    return (
        <div>
            {/*toggle button for small viewport */}
            <div className="toggleButton">
                <button></button>
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