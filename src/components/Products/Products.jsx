import React from 'react'
import { ProductsList } from '../ProductList/ProductsList'
import './ProductsModule.css'

export const Products = () => {
    return (
        <div className='products-container'>
            <p>Our Products:</p>
            <ProductsList />
        </div>
    )
}
