import React from 'react'
import './NewsletterModule.css'
import { Helmet } from 'react-helmet'

export const Newsletter = () => {
    return (
        <div className='newsletter'>
            <Helmet>
                <title>Newsletter</title>
            </Helmet>
            <h1>Newsletter</h1>
            <p>Subscribe to our newsletter to receive the latest news</p>
            <form action="">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
            </form>
        </div>
    )
}
