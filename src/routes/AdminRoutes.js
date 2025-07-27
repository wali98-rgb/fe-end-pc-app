import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/admin/Dashboard'

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path='/admin/' element={<Dashboard />} />
        </Routes>
    )
}

export default AdminRoutes
