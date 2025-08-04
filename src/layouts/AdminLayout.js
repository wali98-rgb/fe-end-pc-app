import React from 'react'
import Sidebar from '../components/admin/Sidebar'
import Navbar from '../components/admin/Navbar'
import Footer from '../components/admin/Footer'
import { Outlet } from 'react-router-dom'

const AdminLayout = ({ children }) => {
    return (
        <div>
            <Sidebar />
            <div className="flex flex-col flex-grow">
                <Navbar />
                {/* Main content area */}
                <main className="container mx-auto p-4">
                    <Outlet />
                    {children}
                </main>
                <Footer />
            </div>
        </div>
    )
}

export default AdminLayout
