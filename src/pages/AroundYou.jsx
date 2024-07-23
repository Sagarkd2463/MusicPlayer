import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';
import './styles/aroundYou.css';

function AroundYou() {

  const [country, setCountry] = useState('');
  const [loading, setLoading] = useState(true);

  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);

  useEffect(() => {
    axios.get(`https://geo.ipify.org/api/v2/country?apiKey=${process.env.GEO_API_KEY}`)
      .then((res) => setCountry(res?.data?.location?.country))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [country]);

  if (isFetching && loading) {
    return <Loader title={"Loading songs around you.."} />;
  }

  if (error && country) return <Error />;

  return (
    <div className='around-you-main'>
      <h2 className='around-you-title'>
        Around You
        <span className='country-name'>{country}</span>
      </h2>
      <div className='songs'>
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

export default AroundYou;