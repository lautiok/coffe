import React from 'react'
import './ShopModule.css'
import separador from '../../assets/logo.png'

export const Shop = () => {
    return (
        <div className='shop'>
            <div className='separador'>
                <img src={separador} alt="footer logo" />
            </div>
            <div className='shop-module'>
                <div className='shop-container-usa'>
                    <h2>United States</h2>
                    <p>201 F St NE, Washington</p>
                </div>
                <div className='shop-container-england'>
                    <h2>England</h2>
                    <p>17-19 Regency St, London,</p>
                </div>

            </div>

        </div>

    )
}
