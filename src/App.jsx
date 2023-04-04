import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Vans from './components/Vans/Vans'
import VanDetail from './components/Vans/VanDetail'
import HostVans from './components/Host/HostVans'
import HostVansDetail from './components/Host/HostVansDetail'
import Footer from './components/Footer'
import Dashboard from './components/Host/Dashboard'
import HostLayout from './components/Host/HostLayout'
import Income from './components/Host/Income'
import Reviews from './components/Host/Reviews'
import "../server"
import Layout from './components/Layout'
import HostVanDetailLayout from './components/Host/HostVanDetailLayout'
import Pricing from "./components/Host/Pricing"
import Photos from "./components/Host/Photos"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Vans />} />
            <Route path="/vans/:id" element={<VanDetail />} />

            <Route path="/host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path='income' element={<Income />} />
              <Route path='Reviews' element={<Reviews />} />
              <Route path='vans' element={<HostVans />} />
              <Route path='vans/:id' element={<HostVanDetailLayout />} >
                <Route path='pricing' element={<Pricing />} />
                <Route path='photos' element={<Photos />} />

              </Route>
            </Route>


          </Route>
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
