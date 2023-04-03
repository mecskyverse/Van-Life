import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import '../../index.css'
function HostLayout() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <div>
            <nav className="host-nav">
                <NavLink style={({ isActive }) => isActive ? activeStyle : null} end to='/host'>Dashboard</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyle : null} to='/host/income'>Income</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyle : null} to='/host/vans'>Vans</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyle : null} to='/host/reviews'>Reviews</NavLink>
            </nav>
            <Outlet />
        </div >
    )
}

export default HostLayout