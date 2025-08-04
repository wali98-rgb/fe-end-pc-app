import React from 'react'
import Navbar from '../components/client/Navbar'
import Footer from '../components/client/Footer'
import { Outlet } from 'react-router-dom'

const UserLayout = ({ children }) => {
    return (
        <div className='min-h-screen flex flex-col'>
            <Navbar />
            <main className="container mx-auto p-4">
                {/* This is where the main content will be rendered */}
                <div className="flex-grow">
                    <Outlet />
                    {/* You can also render children components here if needed */}
                    {children}
                </div>
            </main>
            {/* Footer can be added here if needed */}
            <Footer />
        </div>
    )
}

export default UserLayout
