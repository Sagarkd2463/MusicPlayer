import React from 'react';
import { Link } from 'react-router-dom';
import PlayPause from './PlayPause';

function SongBar({ song, i, artistId, isPlaying, activeSong, handlePauseClick, handlePlayClick }) {
  return (
    <div className=''>
      <h3 className=''>{i + 1}</h3>
      <div className=''>

        <img src={artistId ? song?.attributes?.artwork?.url.replace('{w}', '125').replace('{h}', '125') :
          song?.images?.coverart}
          alt={song?.title}
        />

        <div className=''>
          {!artistId ? (
            <Link to={`/songs/${song.key}`}>
              <p className=''>
                {song?.title}
              </p>
            </Link>
          ) : (
            <p className=''>
              {song?.attributes?.name}
            </p>
          )}

          <p className=''>
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