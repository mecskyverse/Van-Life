import React, { useState, useEffect } from 'react'
import { NavLink, Outlet, useParams, Link, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../api'
import { requireAuth } from '../../utils'
export async function loader({ params }) {
    await requireAuth()
    return getHostVans(params.id)
}
function HostVanDetailLayout() {
    const params = useParams();
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    const currentVan = useLoaderData();
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