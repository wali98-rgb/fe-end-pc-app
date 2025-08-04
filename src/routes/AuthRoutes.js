import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout.js'
import Login from '../pages/client/auth/Login.js'
import Register from '../pages/client/auth/Register.js'
import ForgotPassword from '../pages/client/auth/ForgotPassword.js'

const AuthRoutes = () => {
    return (
        <Routes>
            <Route element={<AuthLayout />}>
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
                <Route path='/forgot-password' element={<ForgotPassword />} />
                {/* You can add more authentication-related routes here */}
                {/* Example: <Route path='/reset-password' element={<ResetPassword />} /> */}
                {/* Add more authentication-related routes here if needed */}
            </Route>
        </Routes>
    )
}

export default AuthRoutes
