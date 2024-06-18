import React from 'react';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { BsArrowRepeat, BsFillPauseFill, BsFillPlayFill, BsShuffle } from 'react-icons/bs';

function Controls({ isPlaying, repeat, setRepeat, shuffle, setShuffle, currentSongs,
  handlePlayPause, handlePrevSong, handleNextSong }) {
  return (
    <div className=''>
      <BsArrowRepeat size={20} color={repeat ? 'red' : 'white'}
        onClick={() => setRepeat((prev) => !prev)} className='' />

      {currentSongs?.length && <MdSkipPrevious size={30} color='#FFF' className=''
        onClick={handlePrevSong} />}

      {isPlaying ? (
        <BsFillPauseFill size={45} color='#FFF' onClick={handlePlayPause}
          className='' />
      ) : (
        <BsFillPlayFill size={45} color='#FFF' onClick={handlePlayPause}
          className='' />
      )}

      {currentSongs?.length && <MdSkipNext size={30} color='#FFF' className=''
        onClick={handleNextSong} />}

      <BsShuffle size={20} color={shuffle ? 'red' : 'white'}
        onClick={() => setShuffle((prev) => !prev)} className='' />

    </div>
  )
}

export default Controls;