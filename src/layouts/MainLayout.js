import React from 'react'
import Navbar from '../components/client/Navbar'
import Footer from '../components/client/Footer'
import { Outlet } from 'react-router-dom'

const MainLayout = ({ children }) => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <main className="">
                <Outlet />
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout
