import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    return (
        <div>
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-lg mb-4" />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className='text-blue-600 font-bold mb-2'>Rp.{product.price.toLocaleString()}</p>
            <Link to={`/product/${product.id}`} className="text-sm text-blue-500 hover:underline">
                Lihat Detail
            </Link>
        </div>
    )
}

export default ProductCard
