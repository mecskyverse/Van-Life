import React, { useState, useEffect } from 'react'
import { NavLink, Outlet, useParams, Link } from 'react-router-dom'
function HostVanDetailLayout() {
    const [currentVan, setCurrentVan] = useState([]);
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
            setCurrentVan(json.vans[0]);
        }
        fetchData()
    }, [])

    return (
        <>

            <Link
                to=".."
                relative="path"
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={currentVan.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${currentVan.type}`}
                        >
                            {currentVan.type}
                        </i>
                        <h3>{currentVan.name}</h3>
                        <h4>${currentVan.price}/day</h4>
                    </div>
                </div>
                <div className="host-van-detail-nav">
                    <NavLink style={({ isActive }) => isActive ? activeStyle : null} end to='.'>Details</NavLink>
                    <NavLink style={({ isActive }) => isActive ? activeStyle : null} to='pricing'>Pricing</NavLink>
                    <NavLink style={({ isActive }) => isActive ? activeStyle : null} to='photos'>Photos</NavLink>
                </div>

                <Outlet context={currentVan} />
            </div>



        </>
    )
}

export default HostVanDetailLayout