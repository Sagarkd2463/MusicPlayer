<<<<<<< HEAD
import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { SearchBar, Sidebar, MusicPlayer, TopPlay } from './components';
import { ArtistDetails, TopArtists, AroundYou, Discover, Search, SongDetails, TopCharts } from './pages';

function App() {

  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className='sidebar'>
      <Sidebar />

      <div className='searchbar'>
      <SearchBar />

      <div className='routes'>
        <div className='sub-routes'>
          <Routes>
            <Route path='/' element={<Discover />}/>
            <Route path='/top-artists' element={<TopArtists />}/>
            <Route path='/top-charts' element={<TopCharts />}/>
            <Route path='/around-you' element={<AroundYou />}/>
            <Route path='/artists/:id' element={<ArtistDetails />}/>
            <Route path='/songs/:songid' element={<SongDetails />}/>
            <Route path='/search/:searchTerm' element={<Search />}/>
          </Routes>
        </div>
        <div className='top-play'>
          <TopPlay />
        </div>
      </div>
      </div>

      {activeSong?.title && (
        <div className='music-player'>
          <MusicPlayer />
        </div>
      )}
    </div>
  );
};

export default App;
=======
import React from 'react'
import Sidebar from './components/Sidebar'
import './App.css'
import Player from './components/Player'
import Display from './components/Display'

const App = () => {
  return (
    <div className='bg-screen'>
      <div className='screen-sub'>
        <Sidebar />
        <Display />
      </div>
      <Player />
    </div>
  )
}

export default App
>>>>>>> f18aff1 (completely changed the project components)
