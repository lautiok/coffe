import React from 'react'
import './NewsletterModule.css'

export const Newsletter = () => {
    return (
        <div className='newsletter'>
            <h1>Newsletter</h1>
            <p>Subscribe to our newsletter to receive the latest news</p>
            <form action="">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
            </form>
        </div>
    )
}
