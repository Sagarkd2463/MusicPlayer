import React from 'react';
import '../styles/Footer.css';
import CurrentTrack from './CurrentTrack';
import PlayerControls from './PlayerControls';

const Footer = () => {
  return (
    <div className='container'>
      <CurrentTrack />
      <PlayerControls />
    </div>
  );
};

export default Footer;