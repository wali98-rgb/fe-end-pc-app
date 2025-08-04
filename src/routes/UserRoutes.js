import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../pages/client/user/Cart'
import UserLayout from '../layouts/UserLayout'
import Profile from '../pages/client/user/Profile'

const UserRoutes = () => {
    return (
        <Routes>
            <Route element={<UserLayout />}>
                <Route path='/cart' element={<Cart />} />
                <Route path='/profile' element={<Profile />} />
            </Route>
        </Routes>
    )
}

export default UserRoutes
