import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/admin/Dashboard'
import AdminLayout from '../layouts/AdminLayout'

const AdminRoutes = () => {
    return (
        <Routes>
            <Route element={<AdminLayout />}>
                <Route path='/admin/' element={<Dashboard />} />
            </Route>
        </Routes>
    )
}

export default AdminRoutes
