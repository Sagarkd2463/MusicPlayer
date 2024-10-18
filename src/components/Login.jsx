import React from 'react';

const Login = () => {

    const handleClickSpotify = () => {
        const clientID = import.meta.env.VITE_CLIENT_ID;
        const redirectUrl = import.meta.env.VITE_REDIRECT_URL;
        const apiUrl = import.meta.env.VITE_API_URL;
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

        window.location.href = `${apiUrl}?client_id=${clientID}&redirect_uri=${redirectUrl}&scope=${scope.join(
            " "
        )}&response_type=token&show_dialog=true`;
    };

    return (
        <div className='container'>
            <img className='spotify-logo' src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Green.png"
                alt="spotify" />
            <button onClick={handleClickSpotify} className='spotify-btn-connect'>Connect Spotify </button>
        </div>
    );
};

export default Login;