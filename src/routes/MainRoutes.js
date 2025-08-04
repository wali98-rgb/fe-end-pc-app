import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/client/Home.js'
import About from '../pages/client/About.js'
import MainLayout from '../layouts/MainLayout.js'
import ListProduct from '../pages/client/user/ListProduct.js'
import Category from '../pages/client/Category.js'

const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/products' element={<ListProduct />} />
                <Route path='/category' element={<Category />} />
                {/* tambahkan nanti: /products/:id, /cart, /checkout */}
            </Route>
        </Routes>
    )
}

export default AppRoutes
