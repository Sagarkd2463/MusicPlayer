import React, { useEffect } from 'react';
import { usePlayerProvider } from '../context/PlayerContext';
import axios from 'axios';
import { reducerCases } from '../reducer/constants';

const Playlists = () => {

    const [{ token, playlists }, dispatch] = usePlayerProvider();

    useEffect(() => {
        const getPlaylistData = async () => {
            const response = await axios.get(
                "https://api.spotify.com/v1/me/playlists",
                {
                    headers: {
                        Authorization: "Bearer " + token,
                        "Content-Type": "application/json",
                    },
                }
            );
            const { items } = response.data;
            const playlists = items.map(({ name, id }) => {
                return { name, id };
            });
            dispatch({ type: reducerCases.SET_PLAYLISTS, playlists });
        };
        getPlaylistData();
    }, [token, dispatch]);

    const changeCurrentPlaylist = (selectedPlaylistId) => {
        dispatch({ type: reducerCases.SET_PLAYLIST_ID, selectedPlaylistId });
    };

    return (
        <div className='h-full overflow-hidden'>
            <ul className='list-none flex flex-col gap-4 p-4 h-[52vh] max-h-full overflow-auto custom-scrollbar'>
                {
                    playlists.map(({ name, id }) => {
                        return (
                            <li
                                className='flex gap-4 cursor-pointer transition-[0.3s] duration-[ease-in-out] hover:text-[white]'
                                key={id}
                                onClick={() => changeCurrentPlaylist(id)}>
                                {name}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Playlists;