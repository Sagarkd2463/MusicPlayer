import React from 'react';
import './musicStyles.css';

function Track({ isPlaying, isActive, activeSong }) {
  return (
    <div className='track-main'>
      <div className={`${isPlaying && isActive ? 'music-on' : ''} track-sub`}>
        <img src={activeSong?.images?.coverart} alt="cover art" className='track-img' />
      </div>

      <div className='active-song'>
        <p className='active-song-title'>
          {activeSong?.title ? activeSong?.title : 'No active song'}
        </p>

        <p className='active-song-subtitle'>
          {activeSong?.subtitle ? activeSong?.subtitle : 'No active song'}
        </p>
      </div>
    </div>
  );
};

export default Track;