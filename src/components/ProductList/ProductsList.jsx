import React from 'react'
import { useFetch } from '../../hooks/useFetch'
import './ProductList.css'

export const ProductsList = () => {
    
    const {data} = useFetch('https://api.sampleapis.com/coffee/hot')

    return (
        <div className='products-list'>
            {data.map(coffee => (
                <div className='product-item' key={coffee.id}>
                    <h2>{coffee.title}</h2>
                    <img src={coffee.image} alt={coffee.title} />
                </div>
            ))}
        </div>
    )
}
