import React from 'react'
import { Hero } from './Hero/Hero'
import { Latteart } from './Latteart/Latteart'
import { Shop } from './Shop/Shop'

export const Home = () => {
    return (
        <main>
            <Hero />
            <Latteart />
            <Shop />
        </main>
    )
}
