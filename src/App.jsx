import React, { useEffect } from 'react';
import Login from './components/Login';
import { usePlayerProvider } from './context/PlayerContext';
import { reducerCases } from './reducer/constants';
import Spotify from './components/Spotify';

const App = () => {

  const [{ token }, dispatch] = usePlayerProvider();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      if (token) {
        dispatch({ type: reducerCases.SET_TOKEN, token });
      }
    }

  }, [dispatch, token]);

  return (
    <div>
      {token ? <Spotify /> : <Login />}
    </div>
  );
};

export default App;