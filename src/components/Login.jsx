import React from 'react';
import '../styles/Login.css';

const Login = () => {

    const handleClickSpotify = () => {
        const clientID = "0cb246e45242405ebbbb127455a34d53";
        const redirectUrl = "http://localhost:5173/";
        const apiUrl = "https://accounts.spotify.com/authorize";
        const scope = [
            'user-read-email',
            'user-read-private',
            'user-read-playback-state',
            'user-modify-playback-state',
            'user-read-currently-playing',
            'user-read-playback-position',
            'user-top-read',
            'user-read-recently-played'
        ];

        window.location.href = `${apiUrl}?client_id=${clientID}&redirect_uri=${redirectUrl}&scope=${scope.join(" ")}
        &response_type=token&show_dialog=true`;
    };

    return (
        <div className='container'>
            <img className='spotify-logo' src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Black-300x82.png" alt="spotify" />
            <button onClick={handleClickSpotify} className='spotify-btn-connect'>Connect Spotify</button>
        </div>
    );
};

export default Login;