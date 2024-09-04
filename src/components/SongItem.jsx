import React, { useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';
import '../styles/SongItem.css';

const SongItem = ({ name, image, desc, id }) => {

    const { playWithId } = useContext(PlayerContext);

    return (
        <div onClick={() => playWithId(id)} className='song'>
            <img className='img-song' src={image} alt="" />
            <p className='song-name'>{name}</p>
            <p className='song-desc'>{desc}</p>
        </div>
    )
}

export default SongItem;