import React, { useEffect, useState } from 'react'
import './ProductList.css'

export const ProductsList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const resp = await fetch('https://api.sampleapis.com/coffee/hot');
                const json = await resp.json();
                setData(json);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getData();
    }, []);

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
