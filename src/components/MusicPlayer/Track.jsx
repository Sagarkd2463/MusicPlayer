import React from 'react';

function Track({ isPlaying, isActive, activeSong }) {
  return (
    <div className=''>
      <div className={`${isPlaying && isActive ? '' : ''}`}>
        <img src={activeSong?.images?.coverart} alt="cover art" className='' />
      </div>

      <div className=''>
        <p className=''>
          {activeSong?.title ? activeSong?.title : 'No active song'}
        </p>

        <p className=''>
          {activeSong?.subtitle ? activeSong?.subtitle : 'No active song'}
        </p>
      </div>
    </div>
  );
};

export default Track;