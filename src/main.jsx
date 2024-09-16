import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { PlayerProvider } from './context/PlayerContext.jsx';
import reducer, { initialState } from './reducer/reducer.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PlayerProvider initialState={initialState} reducer={reducer}>
      <App />
    </PlayerProvider>
  </StrictMode>,
)
