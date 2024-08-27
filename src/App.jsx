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
