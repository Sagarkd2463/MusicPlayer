import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { HiOutlineMenu } from 'react-icons/hi';

import { logo } from '../assets';
import { links } from '../assets/constants';

function NavLinks({ handleClick }) {
  <div className=''>
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className=''
        onClick={() => handleClick && handleClick()}>
        <item.icon className='' />
        {item.name}
      </NavLink>
    ))}
  </div>
};

function SideBar() {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className=''>
        <img src={logo} alt="logo" className='' />
        <NavLinks />
      </div>

      <div className=''>
        {mobileMenuOpen ? (<RiCloseLine className='' onClick={() => setMobileMenuOpen(false)} />) :
          <HiOutlineMenu className='' onClick={() => setMobileMenuOpen(true)} />}
      </div>

      <div className=''>
        <img src={logo} alt="logo" className='' />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default SideBar;