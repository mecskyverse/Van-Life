import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link
} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Vans, { loader as vansLoader } from './components/Vans/Vans'
import VanDetail, { loader as vanDetailLoader } from './components/Vans/VanDetail'
import Login from './components/Login'
import HostVans from './components/Host/HostVans'
import HostVansDetail from './components/Host/HostVanDetail'
import Dashboard from './components/Host/Dashboard'
import HostLayout from './components/Host/HostLayout'
import Income from './components/Host/Income'
import Reviews from './components/Host/Reviews'
import "../server"
import Layout from './components/Layout'
import HostVanDetailLayout from './components/Host/HostVanDetailLayout'
import Pricing from "./components/Host/Pricing"
import Photos from "./components/Host/Photos"
import NotFound from './components/NotFound'
import Error from './components/Error'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />} />
    <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />
    <Route path="Login" element={<Login />} />

    <Route path="host" element={<HostLayout />}>
      <Route index element={<Dashboard />} />
      <Route path='income' element={<Income />} />
      <Route path='Reviews' element={<Reviews />} />
      <Route path='vans' element={<HostVans />} />
      <Route path='vans/:id' element={<HostVanDetailLayout />} >
        <Route index element={<HostVansDetail />} />
        <Route path='pricing' element={<Pricing />} />
        <Route path='photos' element={<Photos />} />
      </Route>
    </Route>
    <Route path="*" element={<NotFound />} />
  </Route>
)
)


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
