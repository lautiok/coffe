import React from 'react'
import { Hero } from './Hero/Hero'
import { Latteart } from './Latteart/Latteart'
import { Shop } from './Shop/Shop'
import { Helmet } from 'react-helmet'

export const Home = () => {
    return (
        <main>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <Hero />
            <Latteart />
            <Shop />
        </main>
    )
}
