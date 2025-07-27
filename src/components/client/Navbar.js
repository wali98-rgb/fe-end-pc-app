import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-white flex justify-evenly items-center p-4 px-10 text-xl font-semibold'>
            <Link to={'/'} className='text-emerald-500'>Logo Aplikasi</Link>
            <div className='flex justify-between items-center gap-5'>
                <Link to="/cart" className="text-gray-700 hover:text-blue-600">Cart</Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600">Tentang Kami</Link>
                <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
            </div>
            <div className='flex items-center justify-between gap-5'>
                <Link className='text-gray-700 hover:text-blue-600'>Keranjang</Link>
                <Link className='text-gray-700 hover:text-blue-600'>Akun</Link>
            </div>
        </nav>
    )
}

export default Navbar
