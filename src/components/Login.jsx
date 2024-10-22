import React from 'react';

const Login = () => {

    const handleClickSpotify = () => {
        const clientId = import.meta.env.VITE_SPOTIFY_API_CLIENT_ID;
        const redirectUrl = import.meta.env.VITE_SPOTIFY_REDIRECT_URL;
        const apiUrl = import.meta.env.VITE_SPOTIFY_API_URL;

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

        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
            " "
        )}&response_type=token&show_dialog=true`;
    };

    return (
        <>
            <div className="relative flex items-center justify-center mt-16 mb-8 ml-16 mr-16">
                <img
                    className="w-auto h-12 md:h-16 lg:h-20 xl:h-28 2xl:h-32 object-cover"
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Green.png"
                    alt="spotify" />
            </div>

            <div className="relative flex items-center justify-center mt-16 ml-12 mr-5">
                <button
                    onClick={handleClickSpotify}
                    className="text-center font-medium 
                    pt-2 pb-2 pl-3 pr-3 bg-green-500 rounded-lg text-white shadow-lg 
                    hover:bg-green-700 transition-all duration-300">
                    Connect Spotify
                </button>
            </div>
        </>
    );
};

export default Login;