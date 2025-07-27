import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-white flex justify-between items-center p-4 px-10 text-xl font-semibold'>
            <Link to="/admin/">Dashboard</Link>
            <div className='flex justify-between items-center'>
                <Link to="/admin/account" className="text-gray-700 hover:text-blue-600">Akun</Link>
                <Link to="/admin/notif" className="text-gray-700 hover:text-blue-600">Notifikasi</Link>
            </div>
        </nav>
    )
}

export default Navbar
