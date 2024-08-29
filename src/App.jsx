import React, { useContext } from 'react'
import Sidebar from './components/Sidebar'
import './App.css'
import Player from './components/Player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'

const App = () => {

  const { audioRef, track } = useContext(PlayerContext);

  return (
    <div className='bg-screen'>
      <div className='screen-sub'>
        <Sidebar />
        <Display />
      </div>
      <Player />
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  )
}

export default App;
