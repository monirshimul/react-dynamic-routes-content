import React from 'react'
import { Link } from 'react-router-dom';

function Nav() {
    return (
        <div>
            <nav>
                <h3>Dynamic Route</h3>
                <ul className='nav-links'>
                    <Link to='/home'><li>Home</li></Link>
                    <Link to="/about"><li>About</li> </Link>
                    <Link to="/contact"><li>Contact</li></Link>

                </ul>
            </nav>
        </div>
    )
}

export default Nav
