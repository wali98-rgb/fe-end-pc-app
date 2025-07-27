import React from 'react'
import ProductCard from '../../components/client/ProductCard'
import Button from '../../components/client/Button'

const Home = () => {
    return (
        <div>
            <Button className="mb-4">
                Tambah Produk
            </Button>
            <h1 className='bg-blue-500 text-cyan-50 p-4 m-0 text-3xl'>Ini halaman Home</h1>
        </div>
    )
}

export default Home
