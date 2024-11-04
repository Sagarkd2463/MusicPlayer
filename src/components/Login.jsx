import React from 'react';

const Login = () => {

    const handleClickSpotify = () => {
        const clientId = '0cb246e45242405ebbbb127455a34d53';
        const redirectUrl = 'http://localhost:5173/';
        const apiUrl = 'https://accounts.spotify.com/authorize';

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
            <div className="flex flex-col items-center justify-center h-screen w-screen bg-green-600 gap-20">
                <img
                    className="h-[20vh]"
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Green.png"
                    alt="spotify" />
            </div>

            <button
                onClick={handleClickSpotify}
                className="bg-[black] text-[#49f585] text-[1.4rem] cursor-pointer px-20 py-4 rounded-[5rem] border-[none]">
                Connect Spotify
            </button>
        </>
    );
};

export default Login;