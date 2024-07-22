import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/artistCard.css';

function ArtistCard({ track }) {

  const navigate = useNavigate();

  return (
    <div className='artist-main' onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}>
      <img
        src={track?.images?.coverart}
        alt='artist'
        className='artist-img'
      />
      <p className='track-subtitle'>{track?.subtitle}</p>
    </div>
  );
};

export default ArtistCard;