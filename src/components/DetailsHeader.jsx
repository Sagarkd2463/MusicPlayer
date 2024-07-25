import React from 'react';
import { Link } from 'react-router-dom';

function DetailsHeader({ artistId, artistData, songData }) {

  const artistDetails = artistData?.artists[artistId]?.attributes;

  return (
    <div className='details-header-main'>
      <div className='details-header-sub' />

      <div className='details-header-img'>
        <img src={artistId ? artistDetails?.artwork?.url.replace('{w}', '500').replace('{h}', '500')
          : songData?.images?.coverart}
          alt="art"
          className='img-details' />

        <div className='artist-details'>
          <p className='artist-details-title'>{artistId ? artistDetails?.name : songData?.title}</p>
          {!artistId && (
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              <p className='artist-details-subtitle'>
                {songData?.subtitle}
              </p>
            </Link>
          )}

          <p className='artist-details-genre'>
            {artistId ?
              artistDetails.genreNames[0] : songData?.genres?.primary}
          </p>
        </div>
      </div>

      <div className='artist-details-end' />
    </div>
  );
};

export default DetailsHeader;