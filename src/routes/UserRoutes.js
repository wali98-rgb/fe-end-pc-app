import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ListProduct from '../pages/client/user/ListProduct'

const UserRoutes = () => {
    return (
        <Routes>
            <Route path='/list-product' element={<ListProduct />} />
        </Routes>
    )
}

export default UserRoutes
