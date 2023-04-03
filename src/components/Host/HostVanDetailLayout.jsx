import React, { useState, useEffect } from 'react'
import { NavLink, Outlet, useParams } from 'react-router-dom'
function HostVanDetailLayout() {
    const [vanDetail, setVanDetail] = useState([]);
    const params = useParams();
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    useEffect(() => {
        async function fetchData() {
            const items = await fetch(`/api/host/vans/${params.id}`)
            const json = await items.json();
            setVanDetail(json.vans);
            console.log(json.vans);
        }
        fetchData()
    }, [])

    return (
        <>
            <div>

            </div>
            <div className="host-van-detail-nav">
                <NavLink style={({ isActive }) => isActive ? activeStyle : null} end to='/host/vans/:id'>Details</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyle : null} to='/host/vans/:id'>Pricing</NavLink>
                <NavLink style={({ isActive }) => isActive ? activeStyle : null} to='/host/vans/:id'>Photos</NavLink>
            </div>
            <Outlet />
        </>
    )
}

export default HostVanDetailLayout