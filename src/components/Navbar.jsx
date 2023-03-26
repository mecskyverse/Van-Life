import React from 'react'

function Navbar() {
    return (
        <nav className='nav'>
            <Link to="/"> <img style={{ height: '24px', width: '172px', marginLeft: '2rem' }} src={Logog} alt="logo" />  </Link>
            <div className='items'>
                <Link style={{ textDecoration: 'none', color: '#4D4D4D', fontSize: '22px' }} to="/">Home</Link>
                <Link style={{ textDecoration: 'none', color: '#4D4D4D', fontSize: '22px' }} to="/about">About</Link>
                <Link style={{ textDecoration: 'none', color: '#4D4D4D', fontSize: '22px' }} to="/vans">Vans</Link>
            </div>

        </nav>
    )
}

export default Navbar