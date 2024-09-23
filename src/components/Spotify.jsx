import React, { useEffect } from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Display from './Display';
import Footer from './Footer';
import { usePlayerProvider } from '../context/PlayerContext';
import '../styles/Spotify.css';
import axios from 'axios';
import { reducerCases } from '../reducer/constants';

const Spotify = () => {

    const [{ token }, dispatch] = usePlayerProvider();

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
        <div className='container'>
            <div className="spotify_body">
                <Sidebar />
                <div className="body">
                    <Navbar />
                    <div className="body_contents">
                        <Display />
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