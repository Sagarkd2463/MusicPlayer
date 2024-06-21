import React from 'react';
import SongBar from './SongBar';

function RelatedSongs({ data, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId }) {
  return (
    <div className=''>
      <h1 className=''>Related Songs: </h1>
      <div className=''>
        {data?.map((song, i) => (
          <SongBar
            key={`${song.key}-${artistId}`}
            song={song}
            i={i}
            artistId={artistId}
            isPlaying={isPlaying}
            activeSong={activeSong}
            handlePauseClick={handlePauseClick}
            handlePlayClick={handlePlayClick}
          />
        ))}
      </div>
    </div>
  );
};

export default RelatedSongs;