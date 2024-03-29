import React from 'react'
import './AboutUsModule.css'
import { HeroUS } from './HeroAU/HeroUS'
import { Team } from './Team/Team'
export const AboutUs = () => {
    return (
        <main>
            <HeroUS />
            <div className='info-us'>
                <h1>About Us</h1>
                <p>At Buenos Amigos, our passion for coffee and good company intertwine to offer you a unique experience. From the moment you step through our doors, you're greeted with the enticing aromas of freshly ground beans and the warmth of a cozy atmosphere.</p>
                <p>Our story began with a group of friends who shared a love for coffee and a desire to create a place where friendship and great conversation thrive. At Buenos Amigos, we not only serve delicious cups of coffee; we also foster genuine connections between people, inviting you to enjoy special moments with your loved ones or to meet new friends in our welcoming space.</p>
                <p>At Buenos Amigos, our commitment to excellence extends beyond our coffee beans and cozy atmosphere. We believe in sourcing the finest ingredients for our pastries and snacks, ensuring that every bite complements your coffee experience perfectly.</p>
                <p>But our dedication doesn't stop there. We're constantly evolving and exploring new ways to delight our customers. Whether it's through seasonal drinks that celebrate the flavors of the moment or hosting community events that bring people together, we're always striving to exceed your expectations.</p>
                <p>As we look to the future, we're excited to continue growing and sharing our love for coffee with even more people. Whether you're a regular visitor or stopping by for the first time, we can't wait to welcome you into the Buenos Amigos family.</p>
                <h1>Our cafe in London</h1>
                <p>In the heart of bustling London, you'll find our cozy haven: Buenos Amigos Café. Inspired by the rich coffee tradition and the vibrant atmosphere of the British capital, we've crafted a space where the passion for coffee merges with the warmth of friendship.</p>
                <p>With a prime location near the city's major attractions, Buenos Amigos Café is the perfect destination for those seeking a quiet respite amidst urban hustle. From the first sip, you'll be transported to a world of tantalizing aromas and exquisite flavors.</p>
                <h1>Our cafe in Washington DC</h1>
                <p>Nestled in the vibrant streets of Washington DC, Buenos Amigos Café stands as a beacon of warmth and community. Drawing inspiration from the rich history and diverse culture of the nation's capital, we've curated a space where coffee enthusiasts and friends alike can come together to savor the simple joys of life.</p>
                <p>Conveniently located in the heart of the city, our café welcomes patrons with the irresistible aroma of freshly brewed coffee and the promise of genuine hospitality. Step inside and discover a haven where every cup tells a story and every conversation sparks new connections.</p>
            </div>
            <Team />
        </main>
    )
}
