import React from 'react';
import { useNavigate } from 'react-router-dom';

function ArtistCard({ track }) {

  const navigate = useNavigate();

  return (
    <div className='' onClick={() => navigate(`/artists/${track?.artists[0].adamid}`)}>
      <img
        src={track?.images?.coverart}
        alt='artist'
        className=''
      />
      <p className=''>{track?.subtitle}</p>
    </div>
  );
};

export default ArtistCard;