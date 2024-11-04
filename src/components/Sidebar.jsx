import React from 'react';
import { IoLibrary } from 'react-icons/io5';
import { MdHomeFilled, MdSearch } from 'react-icons/md';
import Playlists from './Playlists';

const Sidebar = () => {
    return (
        <div className="bg-[black] text-[#b3b3b3] flex flex-col h-full w-full">
            <div className="flex flex-col">
                <div className="text-center mx-0 my-4">
                    <img
                        className='max-w-[80%] h-auto'
                        src="https://storage.googleapis.com/pr-newsroom-wp/1/2023/05/Spotify_Full_Logo_RGB_White.png"
                        alt="spotify" />
                </div>

                <ul className='list-none flex flex-col gap-4 p-4'>
                    <li className='flex gap-4 cursor-pointer transition-[0.3s] duration-[ease-in-out] hover:text-[white]'>
                        <MdHomeFilled />
                        <span>Home</span>
                    </li>
                    <li className='flex gap-4 cursor-pointer transition-[0.3s] duration-[ease-in-out] hover:text-[white]'>
                        <MdSearch />
                        <span>Search</span>
                    </li>
                    <li className='flex gap-4 cursor-pointer transition-[0.3s] duration-[ease-in-out] hover:text-[white]'>
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
