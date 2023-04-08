import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
function HostVans() {
    const [hostVans, setHostVans] = useState([])
    useEffect(() => {
        async function fetchData() {
            const items = await fetch("/api/host/vans")
            const json = await items.json();
            setHostVans(json.vans);
            console.log(json.vans);
        }
        fetchData();
    }, [])
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