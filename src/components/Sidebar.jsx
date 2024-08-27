<<<<<<< HEAD
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';

import { logo } from '../assets';
import { links } from '../assets/constants';
import './styles/sideBar.css';

function NavLinks({ handleClick }) {
  <div className='navlinks'>
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className='nav-link'
        onClick={() => handleClick && handleClick()}>
        <item.icon className='nav-link-item' />
        {item.name}
      </NavLink>
    ))}
  </div>
};

function SideBar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className='sidebar-main'>
        <img src={logo} alt="logo" className='sidebar-img' />
        <NavLinks />
      </div>

      <div className='sidebar-menu'>
        {mobileMenuOpen ? (<RiCloseLine className='cross-icon' onClick={() => setMobileMenuOpen(false)} />) :
          <HiOutlineMenu className='menu-icon' onClick={() => setMobileMenuOpen(true)} />}
      </div>

      <div className={`sidebar-end ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <img src={logo} alt="logo" className='sidebar-logo' />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default SideBar;
=======
import React from 'react'
import { assets } from '../assets/assets'

const Sidebar = () => {
    return (
        <div className='sidebar-main'>
            <div className='sidebar-sub'>
                <div className='sidebar-sub-one'>
                    <img className='img-home' src={assets.home_icon} alt="Home" />
                    <p className='home-title'>Home</p>
                </div>

                <div className='sidebar-sub-one'>
                    <img className='img-search' src={assets.search_icon} alt="Search" />
                    <p className='search-title'>Search</p>
                </div>
            </div>

            <div className='sidebar-sub-two'>
                <div className='sidebar-part'>
                    <div className='sidebar-part-one'>
                        <img className='img-library' src={assets.stack_icon} alt="Your Library" />
                        <p className='library-title'>Your Library</p>
                    </div>

                    <div className='sidebar-icons'>
                        <img className='img-arrow' src={assets.arrow_icon} alt="" />
                        <img className='img-plus' src={assets.plus_icon} alt="" />
                    </div>
                </div>

                <div className='sidebar-playlist'>
                    <h1>Create your first playlist</h1>
                    <p className='playlist-title'>It's easy we will help you</p>
                    <button className='playlist-btn'>Create Playlist</button>
                </div>

                <div className='sidebar-podcast'>
                    <h1>Let's find some podcasts to follow</h1>
                    <p className='playlist-title'>We will keep you update on new episodes</p>
                    <button className='playlist-btn'>Browse podcasts</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
>>>>>>> f18aff1 (completely changed the project components)
