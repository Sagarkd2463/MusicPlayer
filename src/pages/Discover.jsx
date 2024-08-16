import React from 'react';
import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetSongsByGenreQuery } from '../redux/services/spotifyApi';
import { selectGenreListId } from '../redux/features/playerSlice';
import { useDispatch, useSelector } from 'react-redux';
import './styles/discover.css';

function Discover() {

  const dispatch = useDispatch();

  const { activeSong, isPlaying, genreListId } = useSelector((state) => state.player);

  const { data, isFetching, error } = useGetSongsByGenreQuery(genreListId || 'POP');

  if (isFetching) {
    <Loader title='Loading songs...' />;
  }

  if (error) {
    <Error />;
  }

  const genreTitle = genres.find(({ value }) => value === genreListId)?.title;

  return (
    <div className='discover-main'>
      <div className='discover-sub'>
        <h2 className='discover-title'>Discover {genreTitle}</h2>
        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'pop'}
          className='select-genre'
        >
          {genres.map((genre) => {
            <option key={genre.value}
              value={genre.value}>
              {genre.title}
            </option>
          })}
        </select>
      </div>

      <div className='songs'>
        {Array.isArray(data) ? (
          data.map((song, i) => (
            <SongCard
              key={song.key}
              song={song}
              isPlaying={isPlaying}
              activeSong={activeSong}
              data={data}
              i={i}
            />
          ))
        ) : (
          <p>No songs available</p>
        )}
      </div>
    </div>
  );
};

export default Discover;