import React from 'react';
import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

import { useDispatch, useSelector } from 'react-redux';

function Discover() {

  const dispatch = useDispatch();

  const { activeSong, isPlaying} = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetTopChartsQuery();
  const genreTitle = 'Pop';

  if(isFetching){
    <Loader title='Loading songs...'/>;
  }

  if(error){
    <Error />;
  }

  return (
    <div className=''>
      <div className=''>
        <h2 className=''>Discover {genreTitle}</h2>
        <select
          onChange={() => { }}
          value=''
          className=''
        >
          {genres.map((genre) => {
            <option key={genre.value}
              value={genre.value}>
              {genre.title}
            </option>
          })}
        </select>
      </div>

      <div className=''>
          {data?.map((song, i) => {
            <SongCard 
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
            />
          })}
      </div>
    </div>
  );
};

export default Discover;