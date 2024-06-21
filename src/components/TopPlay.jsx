import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

import 'swiper/css';
import 'swiper/css/free-mode';

const TopChartCard = ({ song, i, isPlaying, activeSong, handlePauseClick, handlePlayClick }) => (
  <div className=''>
    {song.title}
    <h3 className=''>{i + 1}.</h3>
    <div className=''>
      <img src={song?.images?.coverart} alt={song?.title} className='' />
      <div className=''>
        <Link to={`/songs/${song.key}`}>
          <p className=''>{song?.title}</p>
        </Link>

        <Link to={`/artists/${song?.artists[0].adamid}`}>
          <p className=''>{song?.subtitle}</p>
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
    <div ref={divRef} className=''>
      <div className=''>
        <div className=''>
          <h2 className=''>Top Charts</h2>
          <Link to={'/top-charts'}>
            <p className=''>See more</p>
          </Link>
        </div>

        <div className=''>
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

      <div className=''>
        <div className=''>
          <h2 className=''>Top Artists</h2>
          <Link to={'/top-artists'}>
            <p className=''>See more</p>
          </Link>
        </div>

        <Swiper
          slidesPerView={'auto'}
          spaceBetween={15}
          freeMode
          centeredSlides
          centeredSlidesBounds
          modules={[FreeMode]}
          className=''>
          {topPlays?.map((song, i) => (
            <SwiperSlide
              key={song?.key}
              style={{ width: '25%', height: 'auto' }}
              className=''>
              <Link to={`/artists/${song?.artists[0].adamid}`}>
                <img src={song?.images.background} alt='' className='' />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TopPlay;