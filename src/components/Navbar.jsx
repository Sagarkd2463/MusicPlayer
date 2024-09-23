import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import '../styles/Navbar.css';
import { usePlayerProvider } from '../context/PlayerContext';

const Navbar = () => {

  const [{ userInfo }] = usePlayerProvider();

  return (
    <div className='container'>
      <div className="search__bar">
        <FaSearch />
        <input type="text" placeholder='Artists, songs or podcasts' />
      </div>
      <div className="avatar">
        <a href="#">
          <CgProfile />
          <span>{userInfo?.userName}</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;