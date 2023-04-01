import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logog from '../assets/logog.png';
import Host from './Host/Dashboard'
function Navbar() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616",
        fontSize: '22px'
    }
    return (

        <nav className='nav'>
            <Link to="/"> <img style={{ height: '24px', width: '172px', marginLeft: '2rem' }} src={Logog} alt="logo" /> </Link>
            <div className='items'>

                <NavLink style={({ isActive }) => isActive ? activeStyle : null}
                    to='/host'>Host</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyle : null} to="/vans">Vans</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyle : null} to="/about">About</NavLink>
            </div>
        </nav >
    )
}

export default Navbar