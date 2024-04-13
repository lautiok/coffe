import React from 'react'
import { ProductsList } from '../../components/ProductList/ProductsList'
import './ProductsModule.css'
import { Helmet } from 'react-helmet'

export const Products = () => {
    return (
        <div className='products-container'>
            <Helmet>
                <title>Menu</title>
            </Helmet>
            <p>Menu:</p>
            <ProductsList />
        </div>
    )
}
