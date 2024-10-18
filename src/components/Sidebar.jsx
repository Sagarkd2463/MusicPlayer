import React from 'react';
import { IoLibrary } from 'react-icons/io5';
import { MdHomeFilled, MdSearch } from 'react-icons/md';
import Playlists from './Playlists';

const Sidebar = () => {
    return (
        <div className='container'>
            <div className="top_links">
                <div className="logo">
                    <img className='spotify-logo' src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png"
                        alt="spotify" />
                </div>

                <ul className='sidebar-list'>
                    <li>
                        <MdHomeFilled />
                        <span>Home</span>
                    </li>
                    <li>
                        <MdSearch />
                        <span>Search</span>
                    </li>
                    <li>
                        <IoLibrary />
                        <span>Your Library</span>
                    </li>
                </ul>
            </div>

            <Playlists />
        </div>
    );
};

export default Sidebar;
