import React from 'react';
import { Error, Loader, ArtistCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import './styles/topArtists.css';

function TopArtists() {

  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) {
    return <Loader title={"Loading top charts.."} />;
  }

  if (error) return <Error />;

  return (
    <div className='top-artists'>
      <h2 className='top-artists-title'>
        Top Artists
      </h2>
      <div className='artist-track'>
        {data?.map((track) => (
          <ArtistCard
            key={track.key}
            track={track}
          />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;