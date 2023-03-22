import Footer from './components/Footer'
import Vans from './components/Vans'
import About from './components/About'
import Home from './components/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Logog from './assets/logog.png';
import "../server"
function App() {

  return (
    <>
      <BrowserRouter>
        <nav className='nav'>
          <Link to="/"> <img style={{ height: '24px', width: '172px', marginLeft: '2rem' }} src={Logog} alt="logo" />  </Link>
          <div className='items'>
            <Link style={{ textDecoration: 'none', color: '#4D4D4D', fontSize: '22px' }} to="/">Home</Link>
            <Link style={{ textDecoration: 'none', color: '#4D4D4D', fontSize: '22px' }} to="/about">About</Link>
            <Link style={{ textDecoration: 'none', color: '#4D4D4D', fontSize: '22px' }} to="/vans">Vans</Link>
          </div>

        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
