import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/client/Home.js'
import Login from '../pages/client/Login.js'
import About from '../pages/client/About.js'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<About />} />
            {/* tambahkan nanti: /products/:id, /cart, /checkout */}
        </Routes>
    )
}

export default AppRoutes
