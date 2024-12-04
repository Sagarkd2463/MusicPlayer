import React, { useEffect, useRef, useState } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Display from './Display';
import Footer from './Footer';
import { usePlayerProvider } from '../context/PlayerContext';
import axios from 'axios';
import { reducerCases } from '../reducer/constants';

const Spotify = () => {

    const [{ token }, dispatch] = usePlayerProvider();
    const [navBackground, setNavBackground] = useState(false);
    const [headerBackground, setHeaderBackground] = useState(false);
    const bodyRef = useRef();

    const bodyScrolled = () => {
        bodyRef.current.scrollTop >= 30
            ? setNavBackground(true)
            : setNavBackground(false);
        bodyRef.current.scrollTop >= 268
            ? setHeaderBackground(true)
            : setHeaderBackground(false);
    };

    useEffect(() => {
        const getUserInfo = async () => {
            const { data } = await axios.get("https://api.spotify.com/v1/me", {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            });
            const userInfo = {
                userId: data.id,
                name: data.display_name,
                email: data.email,
                userUrl: data.external_urls.spotify
            };
            dispatch({ type: reducerCases.SET_USER, userInfo });
        };
        getUserInfo();
    }, [dispatch, token]);

    useEffect(() => {
        const getPlaybackState = async () => {
            const { data } = await axios.get("https://api.spotify.com/v1/me/player", {
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            });
            console.log(data);
            dispatch({ type: reducerCases.SET_PLAYER_STATE, playerState: data.is_playing });
        };
        getPlaybackState();
    }, [dispatch, token]);

    return (
        <div className='max-w-[100vw] max-h-screen overflow-hidden grid grid-rows-[85vh_15vh]'>
            <div className="grid grid-cols-[15vw_85vw] h-full w-full bg-gradient-to-b from-transparent to-black bg-[#205764]">
                <Sidebar />
                <div
                    className="h-full w-full overflow-auto scrollbar"
                    ref={bodyRef}
                    onScroll={bodyScrolled}>
                    <Navbar navBackground={navBackground} />
                    <div>
                        <Display headerBackground={headerBackground} />
                    </div>
                </div>
            </div>

            <div className="spotify_footer">
                <Footer />
            </div>
        </div>
    );
};

export default Spotify;