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
import HostVans, { loader as hostVanLoader } from './components/Host/HostVans'
import HostVansDetail from './components/Host/HostVanDetail'
import Dashboard from './components/Host/Dashboard'
import HostLayout from './components/Host/HostLayout'
import Income from './components/Host/Income'
import Reviews from './components/Host/Reviews'
import "../server"
import Layout from './components/Layout'
import HostVanDetailLayout, { loader as hostVanDetailLoader } from './components/Host/HostVanDetailLayout'
import Pricing from "./components/Host/Pricing"
import Photos from "./components/Host/Photos"
import NotFound from './components/NotFound'
import Error from './components/Error'
import { requireAuth } from './utils.js'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="Login" element={<Login />} />
    <Route path="vans" element={<Vans />} loader={vansLoader} errorElement={<Error />} />
    <Route path="vans/:id" element={<VanDetail />} loader={vanDetailLoader} />

    <Route path="host" element={<HostLayout />}>
      <Route index element={<Dashboard />} loader={async () => await requireAuth()} />
      <Route path='income' element={<Income />} loader={async () => await requireAuth()} />
      <Route path='Reviews' element={<Reviews />} loader={async () => await requireAuth()} />
      <Route path='vans' element={<HostVans />} loader={hostVanLoader} />
      <Route path='vans/:id' element={<HostVanDetailLayout />} loader={hostVanDetailLoader} >
        <Route index element={<HostVansDetail />} loader={async () => await requireAuth()} />
        <Route path='pricing' element={<Pricing />} loader={async () => await requireAuth()} />
        <Route path='photos' element={<Photos />} loader={async () => await requireAuth()} />
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
