import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

function PlayPause({ isPlaying, activeSong, song, handlePause, handlePlay }) {
  {
    isPlaying && activeSong?.title === song.title ? (
      <FaPauseCircle 
      size={35}
      className=''
      onClick={handlePause}/>
    ) : (
    <FaPlayCircle 
    size={35}
    className=''
    onClick={handlePlay}/>
  )
  };
};

export default PlayPause;