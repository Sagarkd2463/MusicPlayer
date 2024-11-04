import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { usePlayerProvider } from '../context/PlayerContext';

const Navbar = ({ navbackground }) => {

  const [{ userInfo }] = usePlayerProvider();

  return (
    <div className='flex justify-between items-center h-[15vh] sticky transition-[0.3s] duration-[ease-in-out] p-8 top-0'
      navbackground={navbackground}>
      <div className="bg-[white] w-[30%] flex items-center gap-2 px-4 py-[0.4rem] rounded-[2rem]">
        <FaSearch />
        <input
          type="text"
          placeholder='Artists, songs or podcasts'
          className='border-0 h-8 w-full focus:outline-none'
        />
      </div>
      <div className="bg-[black] flex justify-center items-center pr-4 px-[0.4rem] py-[0.3rem] rounded-[2rem]">
        <a href="#" className='flex justify-center items-center gap-2 no-underline font-[bold] text-[white]'>
          <CgProfile className='text-[1.3rem] bg-[#282828] text-[#c7c5c5] p-[0.2rem] rounded-2xl' />
          <span>{userInfo?.userName}</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;