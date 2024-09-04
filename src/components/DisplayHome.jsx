import React from 'react';
import Navbar from './Navbar';
import { albumsData, songsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import SongItem from './SongItem';
import '../styles/DisplayHome.css';

const DisplayHome = () => {
    return (
        <>
            <Navbar />
            <div className='displayhome'>
                <h1 className='charts'>Featured Charts</h1>
                <div className='album-items'>
                    {
                        albumsData?.map((item, index) => (
                            <AlbumItem
                                key={index}
                                name={item.name}
                                desc={item.desc}
                                id={item.id}
                                image={item.image}
                            />))
                    }
                </div>
            </div>

            <div className='displayhome'>
                <h1 className='charts'>Today's Biggest Hits</h1>
                <div className='album-items'>
                    {
                        songsData?.map((item, idx) => (
                            <SongItem
                                key={idx}
                                name={item.name}
                                desc={item.desc}
                                id={item.id}
                                image={item.image} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default DisplayHome;