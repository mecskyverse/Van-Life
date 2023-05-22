import React from 'react'
import { NavLink, useOutletContext } from 'react-router-dom'
function HostVansDetail() {
    const currentVan = useOutletContext();
    // console.log(currentVan);
    return (
        <>
            <p><b>Name:</b> {currentVan.name}</p>
            <p><b>Category:</b> {currentVan.type}</p>
            <p><b>Description:</b> {currentVan.description}</p>
            <p><b>Visibility:</b> public</p>

        </>
    )
}

export default HostVansDetail