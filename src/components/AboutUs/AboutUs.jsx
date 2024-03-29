import React from 'react'
import './AboutUsModule.css'
import { HeroUS } from './HeroAU/HeroUS'
import { Team } from './Team/Team'
export const AboutUs = () => {
    return (
        <main>
            <HeroUS />
            <div className='info-us'>
                <p>At Buenos Amigos, our passion for coffee and good company intertwine to offer you a unique experience. From the moment you step through our doors, you're greeted with the enticing aromas of freshly ground beans and the warmth of a cozy atmosphere.</p>
                <p>Our story began with a group of friends who shared a love for coffee and a desire to create a place where friendship and great conversation thrive. At Buenos Amigos, we not only serve delicious cups of coffee; we also foster genuine connections between people, inviting you to enjoy special moments with your loved ones or to meet new friends in our welcoming space.</p>
            </div>
            <Team />
        </main>
    )
}
