import React, { useEffect, useState } from 'react'
import { useParams, useLocation, Link } from 'react-router-dom'
function VanDetail() {
    const params = useParams();
    console.log(params);
    const [van, setVan] = useState(null)
    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans))

    }, [params.id])
    const location = useLocation();
    console.log(location)
    //optional chaining new feature in js
    const search = location.state?.search || "";
    const type = location.state?.type || "all";
    return (
        <>
            <Link
                to={`..${search}`}
                relative="path"
                className="back-button"
            >&larr; <span>Back to {type} vans</span></Link>
            <div className="van-detail-container">
                {van ? (
                    <div className="van-detail">
                        <img src={van.imageUrl} />
                        <i className={`van-type ${van.type} selected`}>{van.type}</i>
                        <h2>{van.name}</h2>
                        <p className="van-price"><span>${van.price}</span>/day</p>
                        <p>{van.description}</p>
                        <button className="link-button">Rent this van</button>
                    </div>
                ) : <h2>Loading...</h2>}
            </div>
        </>

    )

}

export default VanDetail