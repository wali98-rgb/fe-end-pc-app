import React from 'react'
import ProductCard from '../../components/client/ProductCard'
import ReactDOM from 'react-dom/client'
import Button from '../../components/client/Button'
import Bar from '../../components/client/Bar'

const Home = () => {
    ReactDOM.createRoot(document.getElementById('title-app')).render(
        <Bar nameBar='Halaman Home | End-PC' />
    )

    return (
        <div>
            <Button className="mb-4">
                Tambah Produk
            </Button>
            <h1 className='bg-blue-500 text-cyan-50 p-4 text-3xl'>Ini halaman Home</h1>
        </div>
    )
}

export default Home
