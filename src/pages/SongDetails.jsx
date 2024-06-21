import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DetailsHeader, Error, Loader, RelatedSongs } from '../components';

import { setActiveSong, playPause } from '../redux/features/playerSlice';
import { useGetSongDetailsQuery, useGetRelatedSongsQuery } from '../redux/services/shazamCore';

function SongDetails() {

  const dispatch = useDispatch();
  const { songid } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const { data: songData, isFetching: isFetchingSongDetails } = useGetSongDetailsQuery({ songid });
  const { data, isFetching: isFetchingRelatedSongs, error } = useGetRelatedSongsQuery({ songid });

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  if(isFetchingSongDetails || isFetchingRelatedSongs){
    return <Loader title="Searching song details.." />;
  }

  if(error){
    return <Error />;
  }

  return (
    <div className=''>
      <DetailsHeader artistId={artistId} songData={songData} />

      <div className=''>
        <h2 className=''>Lyrics:</h2>
        <div className=''>
          {songData?.sections[1].type === 'LYRICS'
            ? songData?.sections[1].text.map((line, i) => (
              <p className=''>{line}</p>
            )) : <p className=''>Sorry, no lyrics found!</p>}
        </div>
      </div>

      <RelatedSongs
      data={data}
      isPlaying={isPlaying}
      activeSong={activeSong}
      handlePauseClick={handlePauseClick}
      handlePlayClick={() => handlePlayClick()}
      />
    </div>
  );
};

export default SongDetails;