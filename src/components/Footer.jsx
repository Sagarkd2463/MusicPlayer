import React from 'react';
import CurrentTrack from './CurrentTrack';
import PlayerControls from './PlayerControls';
import Volume from './Volume';

const Footer = () => {
  return (
    <div className='bg-[#181818] h-full w-full grid grid-cols-[1fr_2fr_1fr] items-center justify-center px-4 py-0 border-t-[#282828] border-t border-solid'>
      <CurrentTrack />
      <PlayerControls />
      <Volume />
    </div>
  );
};

export default Footer;