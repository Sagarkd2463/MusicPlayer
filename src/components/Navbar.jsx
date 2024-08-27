import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
    return (
        <>
            <div className='navbar'>
                <div className='navbar-main'>
                    <img className='img-arrow-left' src={assets.arrow_left} alt="" />
                    <img className='img-arrow-right' src={assets.arrow_right} alt="" />
                </div>

                <div className='navbar-part'>
                    <p className='navbar-explore'>Explore Premium</p>
                    <p className='navbar-app'>Install App</p>
                    <p className='navbar-user'>S</p>
                </div>
            </div>

            <div className='navbar-sub'>
                <p className='all'>All</p>
                <p className='music'>Music</p>
                <p className='podcasts'>Podcasts</p>
            </div>
        </>
    )
}

export default Navbar