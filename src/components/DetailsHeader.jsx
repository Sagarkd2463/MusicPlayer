import React from 'react';
import { Link } from 'react-router-dom';

function DetailsHeader({ artistId, artistData, songData }) {

  const artistDetails = artistData?.artists[artistId]?.attributes;

  return (
    <div className=''>
      <div className='' />

      <div className=''>
        <img src={artistId ? artistDetails?.artwork?.url.replace('{w}', '500').replace('{h}', '500')
          : songData?.images?.coverart}
          alt="art"
          className='' />

        <div className=''>
          <p className=''>{artistId ? artistDetails?.name : songData?.title}</p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
            <p className=''>
              {songData?.subtitle}
            </p>
            </Link>
          )}

          <p className=''>
            {artistId ?
             artistDetails.genreNames[0] : songData?.genres?.primary}
          </p>
        </div>
      </div>

      <div className=''/>
    </div>
  );
};

export default DetailsHeader;