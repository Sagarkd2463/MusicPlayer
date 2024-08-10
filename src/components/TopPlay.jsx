import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/services/spotifyApi';

import 'swiper/css';
import 'swiper/css/free-mode';
import './styles/topPlay.css';

const TopChartCard = ({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className={`top-chart-main-one ${activeSong?.title === song?.title ? 'bg-[#4c426e]' : 'bg-transparent'} top-chart-main-two`}>
    <h3 className='top-chart-sub'>{i + 1}.</h3>
    <div className='top-chart-sub-one'>
      <img className='top-chart-img' src={song?.images?.coverart} alt={song?.title} />
      <div className='top-chart-link'>
        <Link to={`/songs/${song.key}`}>
          <p className='top-chart-song-title'>{song?.title}</p>
        </Link>

        <Link to={`/artists/${song?.artists[0].adamid}`}>
          <p className='top-chart-song-subtitle'>{song?.subtitle}</p>
        </Link>
      </div>
    </div>

    <PlayPause
      isPlaying={isPlaying}
      activeSong={activeSong}
      song={song}
      handlePause={handlePauseClick}
      handlePlay={handlePlayClick}
    />
  </div>
);

function TopPlay() {

  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data } = useGetTopChartsQuery();
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const topPlays = data?.slice(0, 5);

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div ref={divRef} className='top-play-main'>
      <div className='top-play-sub'>
        <div className='top-play-part-one'>
          <h2 className='top-play-chart-title'>Top Charts</h2>
          <Link to={'/top-charts'}>
            <p className='top-play-chart-link'>See more</p>
          </Link>
        </div>

        <div className='top-play-song'>
          {topPlays?.map((song, i) => (
            <TopChartCard
              key={song.key}
              song={song}
              i={i}
              isPlaying={isPlaying}
              activeSong={activeSong}
              handlePauseClick={handlePauseClick}
              handlePlayClick={() => handlePlayClick(song, i)}
            />
          ))}
        </div>
      </div>

      <div className='top-artists-main'>
        <div className='top-artists-sub'>
          <h2 className='top-play-artist-title'>Top Artists</h2>
          <Link to={'/top-artists'}>
            <p className='top-play-artist-link'>See more</p>
          </Link>
        </div>

        <Swiper
          slidesPerView={'auto'}
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          className='top-play-swiper'>
          {topPlays?.map((song, i) => (
            <SwiperSlide
              key={song?.key}
              style={{ width: '25%', height: 'auto' }}
              className='top-play-slider'>
              <Link to={`/artists/${song?.artists[0].adamid}`}>
                <img className='top-play-slider-img' src={song?.images.background} alt='Name' />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;