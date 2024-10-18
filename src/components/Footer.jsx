import React from 'react';
import CurrentTrack from './CurrentTrack';
import PlayerControls from './PlayerControls';
import Volume from './Volume';

const Footer = () => {
  return (
    <div className='container'>
      <CurrentTrack />
      <PlayerControls />
      <Volume />
    </div>
  );
};

export default Footer;