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
    const displayRef = useRef();
    const [navBackground, setNavBackground] = useState(false);
    const [headerBackground, setHeaderBackground] = useState(false);

    const bodyScrolled = () => {
        displayRef.current.scrollTop >= 30
            ? setNavBackground(true)
            : setNavBackground(false);

        displayRef.current.scrollTop >= 268
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
                userName: data.display_name,
                email: data.email,
            };
            dispatch({ type: reducerCases.SET_USER, userInfo });
        };
        getUserInfo();
    }, [dispatch, token]);

    return (
        <div className='max-w-[100vw] max-h-screen overflow-hidden grid grid-rows-[85vh_15vh]'>
            <div className="grid grid-cols-[15vw_85vw] h-full w-full bg-gradient-to-b from-transparent to-black bg-[#205764]">
                <Sidebar />
                <div
                    className="h-full w-full overflow-auto scrollbar"
                    ref={displayRef}
                    onScroll={bodyScrolled}>
                    <Navbar navBackground={navBackground} />
                    <div className="body_contents">
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