import React from "react";
import { Outlet } from "react-router-dom";
import Footer from './Footer'
import Navbar from "./Navbar";
import '../index.css'
export default function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )

}