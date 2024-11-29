import React from 'react';
import config from '../config/config';

const Login = () => {

    const handleClickSpotify = () => {
        const clientId = config.spotify.CLIENTID;
        const redirectUrl = config.redirect.url;
        const apiUrl = config.api.url;

        const scope = [
            'user-read-email',
            'user-read-private',
            'user-read-playback-state',
            'user-modify-playback-state',
            'user-read-currently-playing',
            'user-read-playback-position',
            'user-top-read',
            'user-read-recently-played',
            'playlist-read-private',
            'playlist-read-collaborative'
        ];

        window.location.href = `${apiUrl}?client_id=${clientId}&redirect_uri=${redirectUrl}&scope=${scope.join(
            " "
        )}&response_type=token&show_dialog=true`;
    };

    return (
        <>
            <div className="flex flex-col items-center justify-center h-[100vh] w-[100vw] bg-green-600 gap-20 
            min-[320px]:gap-5 min-[375px]:gap-6 min-[425px]:gap-7 md:gap-14 lg:gap-16 xl:gap-[5.25rem] 2xl:gap-[6.25rem]">
                <img
                    className="min-[320px]:h-[8vh] min-[320px]:ml-0.5 min-[320px]:-mr-1.5
                    min-[375px]:h-[9vh] min-[375px]:ml-1 min-[375px]:-mr-2
                    min-[425px]:h-[11vh] min-[425px]:ml-1.5 min-[425px]:-mr-2.5
                    md:h-[14vh] md:ml-2 md:-mr-3
                    lg:h-[16vh] lg:ml-2.5 lg:-mr-3.5
                    xl:h-[20vh] xl:ml-3 xl:-mr-4
                    2xl:h-[22vh] xl:ml-4 xl:-mr-5
                    "
                    src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_Green.png"
                    alt="spotify" />
                <button
                    onClick={handleClickSpotify}
                    className="bg-[black] text-[#49f585] text-center cursor-pointer rounded-[5rem] border-[none] 
                    min-[320px]:px-4 min-[320px]:py-[0.4rem] min-[320px]:text-[0.5rem] min-[320px]:ml-[1.75rem] min-[320px]:-mr-[0.8rem]
                    min-[375px]:px-4 min-[375px]:py-[0.5rem] min-[375px]:text-[0.55rem] min-[375px]:ml-[1.85rem] min-[375px]:-mr-[0.8rem]
                    min-[425px]:px-4.5 min-[425px]:py-[0.6rem] min-[425px]:text-[0.6rem] min-[425px]:ml-[2.15rem] min-[425px]:-mr-[0.8rem]
                    md:px-5 md:py-[0.7rem] md:text-[0.75rem] md:ml-[3rem] md:-mr-[0.8rem]
                    lg:px-6 lg:py-[0.8rem] lg:text-[0.8rem] lg:ml-[4rem] lg:-mr-[0.8rem]
                    xl:px-7 xl:py-[0.9rem] xl:text-[0.9rem] xl:ml-[4.95rem] xl:-mr-[0.8rem]
                    2xl:px-10 2xl:py-[1.2rem] 2xl:text-[1.1rem] 2xl:ml-[2.5rem] 2xl:-mr-[0.8rem]
                    ">
                    Connect Spotify
                </button>
            </div>
        </>
    );
};

export default Login;