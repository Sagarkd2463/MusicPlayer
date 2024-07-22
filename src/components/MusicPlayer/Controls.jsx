import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';
import './musicStyles.css';

function Controls({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs,
  handlePlayPause, handlePrevSong, handleNextSong }) {
  return (
    <div className='controls-main'>
      <BsArrowRepeat size={20} color={repeat ? 'red' : 'white'}
        onClick={() => setRepeat((prev) => !prev)} className='repeat-icon' />

      {currentSongs?.length && <MdSkipPrevious size={30} color='#FFF' className='skip-previous'
        onClick={handlePrevSong} />}

      {isPlaying ? (
        <BsFillPauseFill size={45} color='#FFF' onClick={handlePlayPause}
          className='pause-icon' />
      ) : (
        <BsFillPlayFill size={45} color='#FFF' onClick={handlePlayPause}
          className='play-icon' />
      )}

      {currentSongs?.length && <MdSkipNext size={30} color='#FFF' className='skip-next'
        onClick={handleNextSong} />}

      <BsShuffle size={20} color={shuffle ? 'red' : 'white'}
        onClick={() => setShuffle((prev) => !prev)} className='shuffle' />

    </div>
  )
}

export default Controls;