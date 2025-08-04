import React from 'react'
import { AccessAlarm, ThreeDRotation } from '@mui/icons-material'
import { Link } from 'react-router-dom'

import '../../assets/css/client/partials/Navbar.css'

import Grid from '@mui/material/Grid'

// Data Icon from MUI
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import LoginIcon from '@mui/icons-material/Login'
import HistoryEduIcon from '@mui/icons-material/HistoryEdu'

const Navbar = () => {
    return (
        <nav className='nav bg-white flex justify-between items-center p-4 px-10 text-xl font-semibold'>
            <Link to={'/'} className='text-emerald-500'>Logo Aplikasi</Link>
            <div className='flex justify-between items-center gap-5'>
                <Link to="/products" className="text-gray-700 hover:text-blue-600">List Produk</Link>
                <Link to="/category" className='text-gray-700 hover:text-blue-600'>Kategori</Link>
            </div>
            <div className='flex items-center justify-between gap-5'>
                <Link to="/login" className="text-gray-700 hover:text-blue-600">
                    <Grid className='flex flex-col items-center'>
                        <Grid item size={12}>
                            <LoginIcon />
                        </Grid>
                        <Grid item size={12} className='text-xs'>
                            Login
                        </Grid>
                    </Grid>
                </Link>
                <Link to="/register" className="text-gray-700 hover:text-blue-600">
                    <Grid className='flex flex-col items-center'>
                        <Grid item size={12}>
                            <HistoryEduIcon />
                        </Grid>
                        <Grid item size={12} className='text-xs'>
                            Register
                        </Grid>
                    </Grid>
                </Link>
                <Link to="/cart" className="text-gray-700 hover:text-blue-600">
                    <ShoppingCartIcon />
                </Link>
                <Link to="/profile" className='text-gray-700 hover:text-blue-600'>
                    <AccountCircleIcon />
                </Link>
            </div>
        </nav>
    )
}

export default Navbar
