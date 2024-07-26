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