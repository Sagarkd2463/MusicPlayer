import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';
import '../styles/DisplayAlbum.css';

const DisplayAlbum = () => {

    const { id } = useParams();
    const albumData = albumsData[id];
    const { playWithId } = useContext(PlayerContext);

    return (
        <>
            <Navbar />
            <div className='display-album'>
                <img className='img-album' src={albumData.image} alt="" />
                <div className='album-info'>
                    <p>Playlist</p>
                    <h2 className='album-title'>{albumData.name}</h2>
                    <h4>{albumData.desc}</h4>
                    <p className='album-information'>
                        <img className='album-logo' src={assets.spotify_logo} alt="" />
                        <b>Spotify</b>
                        &bull; 1, 323, 154 likes
                        <b>50 songs,</b>
                        about 2hr 30min
                    </p>
                </div>
            </div>

            <div className='album-detail'>
                <p><b className='detail-title'>#</b>Title</p>
                <p>Album</p>
                <p className='date'>Date Added</p>
                <img className='img-clock' src={assets.clock_icon} alt="" />
            </div>
            <hr />
            {
                songsData?.map((item, index) => (
                    <div onClick={() => playWithId(item.id)} className='album-data' key={index}>
                        <p className='data-info'>
                            <b className='data-number'>{index + 1}</b>
                            <img className='img-data' src={item.image} alt="" />
                            {item.name}
                        </p>
                        <p className='data-name'>{albumData.name}</p>
                        <p className='data-time'>5 days ago</p>
                        <p className='data-duration'>{item.duration}</p>
                    </div>
                ))
            }
        </>
    )
}

export default DisplayAlbum;