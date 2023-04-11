import React, { useEffect, useState } from 'react'
import { Link, useLoaderData, useSearchParams } from 'react-router-dom'
import { getVans } from '../../api'

export function loader() {
    return getVans()
}

function Vans() {


    const [searchParams, setSearchParams] = useSearchParams()

    const typeFilter = searchParams.get("type")
    const vans = useLoaderData();

    function handleFilterChange(key, value) {
        setSearchParams(prevParams => {
            if (value === null) {
                prevParams.delete(key);
            }
            else {
                prevParams.set(key, value);
            }
            return prevParams
        })
    }
    const dataItems = () => {
        const filterArray = typeFilter
            ? vans.filter(van => typeFilter === van.type) : vans
        return (

            <div className="head-container">
                <h1>Explore Our Van Options</h1>
                <div className="van-list-filter-buttons">
                    <button onClick={() => handleFilterChange("type", "simple")}
                        className={`van-type simple
                    ${typeFilter === "simple" ? " selected" : ""}`
                        }>
                        Simple
                    </button>
                    <button onClick={() => handleFilterChange("type", "luxury")}
                        className={`van-type luxury
                    ${typeFilter === "luxury" ? " selected" : ""}`
                        }>
                        Luxury
                    </button>
                    <button onClick={() => handleFilterChange("type", "rugged")}
                        className={`van-type rugged
                    ${typeFilter === "rugged" ? " selected" : ""}`
                        }>
                        Rugged
                    </button>
                    {
                        typeFilter ?
                            <button onClick={() => handleFilterChange("type", null)}
                                className="van-type clear-filters">
                                Clear Filters
                            </button> :
                            null
                    }
                </div>
                <div className="grid-container">
                    {filterArray.map(item => (
                        <div key={item.id} className="small-grid" >
                            <Link to={`/vans/${item.id}`}
                                state={{ search: `?${searchParams}`, type: typeFilter }}
                            >
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
            </div >

        )

    }
    return (
        <div>

            {dataItems()}
        </div>
    )
}

export default Vans