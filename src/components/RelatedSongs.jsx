import React from 'react';
import SongBar from './SongBar';
import './styles/relatedSongs.css';

function RelatedSongs({ data, isPlaying, activeSong, handlePauseClick, handlePlayClick, artistId }) {
  return (
    <div className='related-songs-main'>
      <h1 className='related-songs-title'>Related Songs: </h1>
      <div className='related-songs-result'>
        {data?.map((song, i) => (
          <SongBar
            key={`${song.key}-${artistId}-${i}`}
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