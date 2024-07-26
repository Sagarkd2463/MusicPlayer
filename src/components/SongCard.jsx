import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import './styles/songCard.css';

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
    <div className='songcard-main'>
      <div className='songcard-sub'>
        <div className={`songcard-playpause ${activeSong?.title === song.title ? 'flex bg-black bg-opacity-70' : 'hidden'}`}>
          <PlayPause
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img src={song.images?.coverart} alt='song_img'
          className='songcard-img' />
      </div>
      <div className='songcard-songs'>
        <p className='songcard-songs-link'>
          <Link to={`/songs/${song?.key}`}>
            {song.title}
          </Link>
        </p>

        <p className='songcard-songs-artist'>
          <Link to={song.artists ? `/artists/${song?.artists[0]?.adamid}` : '/top-artists'}>
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;