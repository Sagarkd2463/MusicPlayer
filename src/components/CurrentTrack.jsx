import React, { useEffect } from 'react';
import { usePlayerProvider } from '../context/PlayerContext';
import axios from 'axios';
import { reducerCases } from '../reducer/constants';

const CurrentTrack = () => {

    const [{ token, currentlyPlaying }, dispatch] = usePlayerProvider();

    useEffect(() => {
        const getCurrentTrack = async () => {
            const response = await axios.get(
                "https://api.spotify.com/v1/me/player/currently-playing",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.data !== "") {
                const { item } = response.data;

                const currentlyPlaying = {
                    id: item.id,
                    name: item.name,
                    artists: item.artists.map((artist) => artist.name),
                    image: item.album.images[2].url,

                };
                dispatch({ type: reducerCases.SET_PLAYING, currentlyPlaying });
            }
        };
        getCurrentTrack();
    }, [token, dispatch]);

    return (
        <div className='container'>
            {
                currentlyPlaying && (
                    <div className="flex items-center gap-4">
                        <div className="track_image">
                            <img src={currentlyPlaying.image} alt="currentlyplaying" />
                        </div>
                        <div className="flex flex-col gap-[0.3rem]">
                            <h4 className='text-[white]'>{currentlyPlaying.name}</h4>
                            <h6 className='text-[#b3b3b3]'>{currentlyPlaying.artists.join(", ")}</h6>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default CurrentTrack;