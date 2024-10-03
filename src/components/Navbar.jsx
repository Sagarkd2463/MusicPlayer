import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import '../styles/Navbar.css';
import { usePlayerProvider } from '../context/PlayerContext';

const Navbar = ({ navBackground }) => {

  const [{ userInfo }] = usePlayerProvider();

  return (
    <div className='container' navBackground={navBackground} style={`${({ navBackground }) => navBackground ? "rgba(0, 0, 0, 0.7)" : "none"}`}>
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