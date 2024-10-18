import React from 'react';
import { BsFillPlayCircleFill, BsFillPauseCircleFill, BsShuffle } from 'react-icons/bs';
import { CgPlayTrackNext, CgPlayTrackPrev } from 'react-icons/cg';
import { FiRepeat } from 'react-icons/fi';
import { usePlayerProvider } from '../context/PlayerContext';
import axios from 'axios';
import { reducerCases } from '../reducer/constants';

const PlayerControls = () => {

    const [{ token, playerState }, dispatch] = usePlayerProvider();

    const changeTrack = async (type) => {

        await axios.post(`https://api.spotify.com/v1/me/player/${type}`,
            {},
            {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            }
        );

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

            const currentlyplaying = {
                id: item.id,
                name: item.name,
                artists: item.artists.map((artist) => artist.name),
                image: item.album.images[2].url,

            };
            dispatch({ type: reducerCases.SET_PLAYING, currentlyplaying });
        } else {
            dispatch({ type: reducerCases.SET_PLAYING, currentlyplaying: null });
        }
    };

    const changeState = async () => {
        const state = playerState ? "pause" : "play";

        const response = await axios.put(
            `https://api.spotify.com/v1/me/player/${state}`,
            {},
            {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            }
        );
        dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: !playerState });
    };


    return (
        <div className='container'>
            <div className="shuffle">
                <BsShuffle />
            </div>

            <div className="previous">
                <CgPlayTrackPrev onClick={() => changeTrack("previous")} />
            </div>

            <div className="state">
                {playerState ?
                    <BsFillPauseCircleFill onClick={changeState} />
                    :
                    <BsFillPlayCircleFill onClick={changeState} />}
            </div>

            <div className="next">
                <CgPlayTrackNext onClick={() => changeTrack("next")} />
            </div>

            <div className="repeat">
                <FiRepeat />
            </div>
        </div>
    );
};

export default PlayerControls;