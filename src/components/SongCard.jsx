import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

function SongCard({ song, i, isPlaying, activeSong, data }) {

  const dispatch = useDispatch();

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div className=''>
      <div className=''>
        <div className={``}>
          <PlayPause 
          song={song}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
          />
        </div>
        <img src={song.images?.coverart} alt='song_img' />
      </div>
      <div className=''>
        <p className=''>
          <Link to={`/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>

        <p className=''>
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;