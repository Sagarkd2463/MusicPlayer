import React from 'react';
import { Error, Loader, ArtistCard } from '../components';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

function TopArtists() {

  const { data, isFetching, error } = useGetTopChartsQuery();

  if (isFetching) {
    return <Loader title={"Loading top charts.."} />;
  }

  if (error) return <Error />;

  return (
    <div className=''>
      <h2 className=''>
        Top Artists
      </h2>
      <div className=''>
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