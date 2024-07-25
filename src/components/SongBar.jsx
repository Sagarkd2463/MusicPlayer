import React from 'react';
import { Link } from 'react-router-dom';
import PlayPause from './PlayPause';

function SongBar({ song, i, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) {
  return (
    <div className={`songbar-main-one ${activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'} songbar-main-two`}>
      <h3 className='songbar-sub'>{i + 1}</h3>
      <div className='songbar-sub-one'>

        <img
          className='songbar-img'
          src={artistId ? song?.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125') :
            song?.images?.coverart}
          alt={song?.title}
        />

        <div className='songbar-artist'>
          {!artistId ? (
            <Link to={`/songs/${song.key}`}>
              <p className='songbar-artist-title'>
                {song?.title}
              </p>
            </Link>
          ) : (
            <p className='songbar-song'>
              {song?.attributes?.name}
            </p>
          )}

          <p className='songbar-subtitle'>
            {artistId ? song?.attributes?.albumName : song?.subtitle}
          </p>
        </div>
      </div>

      {!artistId ? (
        <PlayPause
          isPlaying={isPlaying}
          activeSong={activeSong}
          song={song}
          handlePause={handlePauseClick}
          handlePlay={() => handlePlayClick(song, i)}
        />
      ) : null}
    </div>
  );
};

export default SongBar;