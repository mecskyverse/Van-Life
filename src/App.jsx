import Footer from './components/Footer'
import Vans from './components/Vans'
import About from './components/About'
import Home from './components/Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Logog from './assets/logog.png';
import VanDetail from './components/VanDetail'
import "../server"
function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/vans" element={<Vans />} />
          <Route path="/vans/:id" element={<VanDetail />} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
