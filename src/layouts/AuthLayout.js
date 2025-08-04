import React from 'react'
import { Outlet } from 'react-router-dom'

const AuthLayout = ({ children }) => {
    return (
        <div className='flex items-center justify-center min-h-screen bg-white-100 p-6'>
            <div className="w-full max-w-md p-6 ">
                <Outlet />
                {children}
            </div>
        </div>
    )
}

export default AuthLayout
