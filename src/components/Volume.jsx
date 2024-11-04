import React from 'react';
import { usePlayerProvider } from '../context/PlayerContext';
import axios from 'axios';

const Volume = () => {

    const [{ token }] = usePlayerProvider();

    const setVolume = async (e) => {
        await axios.put(`https://api.spotify.com/v1/me/player/volume`,
            {},
            {
                params: {
                    volume_percent: parseInt(e.target.value),
                },

                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            }
        );
    };

    return (
        <div className='flex justify-end content-center'>
            <input
                type="range"
                className='w-60 h-2 rounded-[2rem]'
                min={0}
                max={100}
                onMouseUp={(e) => setVolume(e)} />
        </div>
    );
};

export default Volume;