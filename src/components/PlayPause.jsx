import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
import './styles/playPause.css';

function PlayPause({ isPlaying, activeSong, song, handlePause, handlePlay }) {
  {
    isPlaying && activeSong?.title === song.title ? (
      <FaPauseCircle
        size={35}
        className='pause-icon'
        onClick={handlePause} />
    ) : (
      <FaPlayCircle
        size={35}
        className='play-icon'
        onClick={handlePlay} />
    )
  };
};

export default PlayPause;