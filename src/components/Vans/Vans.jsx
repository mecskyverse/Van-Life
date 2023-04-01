import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
function Vans() {
    const [vans, setVans] = useState([])
    useEffect(() => {
        async function fetchData() {
            const items = await fetch("/api/vans")
            const json = await items.json();
            setVans(json.vans);
        }
        fetchData();
    }, [])

    const dataItems = () => {

        return (

            <div className="head-container">
                <h1>Explore Our Van Options</h1>
                <div className="grid-container">
                    {vans.map(item => (
                        <div key={item.id} className="small-grid" >
                            <Link to={`/vans/${item.id}`}>
                                <div><img className="grid-img" src={`${item.imageUrl}`} alt="van photo" /></div>
                                <div className="grid-text">
                                    <span key={item.id} className="grid-title">{item.name} </span>
                                    <span>$60/day</span>
                                </div>
                                <i className={`van-type ${item.type} selected`}>{item.type}</i>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

        )

    }
    return (
        <div>

            {dataItems()}
        </div>
    )
}

export default Vans