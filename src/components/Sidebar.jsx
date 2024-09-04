import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {

    const navigate = useNavigate();

    return (
        <div className='sidebar-main'>
            <div className='sidebar-sub'>
                <div onClick={() => navigate('/')} className='sidebar-sub-one'>
                    <img className='img-home' src={assets.home_icon} alt="Home" />
                    <p className='home-title'>Home</p>
                </div>

                <div className='sidebar-sub-one'>
                    <img className='img-search' src={assets.search_icon} alt="Search" />
                    <p className='search-title'>Search</p>
                </div>
            </div>

            <div className='sidebar-sub-two'>
                <div className='sidebar-part'>
                    <div className='sidebar-part-one'>
                        <img className='img-library' src={assets.stack_icon} alt="Your Library" />
                        <p className='library-title'>Your Library</p>
                    </div>

                    <div className='sidebar-icons'>
                        <img className='img-arrow' src={assets.arrow_icon} alt="" />
                        <img className='img-plus' src={assets.plus_icon} alt="" />
                    </div>
                </div>

                <div className='sidebar-playlist'>
                    <h1>Create your first playlist</h1>
                    <p className='playlist-title'>It's easy we will help you</p>
                    <button className='playlist-btn'>Create Playlist</button>
                </div>

                <div className='sidebar-podcast'>
                    <h1>Let's find some podcasts to follow</h1>
                    <p className='podcast-title'>We will keep you update on new episodes</p>
                    <button className='podcast-btn'>Browse podcasts</button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
