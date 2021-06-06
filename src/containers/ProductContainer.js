import React from 'react'
import Product from '../components/Product'
import { products } from '../data/products'

function ProductContainer({ addPiece, deletePiece }) {
    return (
        <div className="d-flex flex-wrap text-center">
            {products.map(product => (
                <Product product={product} addPiece={addPiece} deletePiece={deletePiece} />
            ))}
        </div>
    )
}

export default ProductContainer
