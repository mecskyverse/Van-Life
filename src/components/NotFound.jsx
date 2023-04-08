import React from 'react'
import { Link } from 'react-router-dom'
function NotFound() {
    return (
        <div className='container-not-found'>
            <h1 className="head-not-found">Sorry! the page you were looking was not found</h1>
            <Link to="/"><button className='button-not-found'>Return To Home</button></Link>
        </div>
    )
}

export default NotFound