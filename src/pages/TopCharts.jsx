import React from 'react';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/spotifyApi';
import './styles/topCharts.css';

function TopCharts() {

  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) {
    return <Loader title={"Loading top charts.."} />;
  }

  if (error) return <Error />;

  return (
    <div className='top-charts'>
      <h2 className='top-charts-title'>
        Discover Top Charts
      </h2>
      <div className='top-charts-songs'>
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default TopCharts;