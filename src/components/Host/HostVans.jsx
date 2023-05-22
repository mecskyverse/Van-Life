import React, { useState, useEffect } from 'react'
import { NavLink, useLoaderData } from 'react-router-dom'
import { getHostVans } from '../../api.js'
import { requireAuth } from '../../utils.js';
export async function loader() {
    await requireAuth();
    return getHostVans();
}
function HostVans() {

    const hostVans = useLoaderData();
    const mapping = hostVans.map((hostVan) => {
        return (
            <NavLink style={{ textDecoration: "none" }} key={hostVan.id} to={hostVan.id} >
                <div className="host-vans-grid" >
                    <img src={hostVan.imageUrl} alt="van Image" style={{ width: "70px" }} />

                    <div>
                        <div style={{ fontSize: "1.2rem", color: "black" }}>{hostVan.name}</div>
                        <div>$60/day</div>
                    </div>
                </div>
            </NavLink >
        )
    })

    return (
        <div className="host-vans-container">
            <h1>Your Listed Vans</h1>

            {mapping}

        </div>
    )
}

export default HostVans