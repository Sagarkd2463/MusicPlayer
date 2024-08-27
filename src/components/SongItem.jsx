import React from 'react'

const SongItem = ({ name, image, desc, id }) => {
    return (
        <div className='song'>
            <img className='img-song' src={image} alt="" />
            <p className='song-name'>{name}</p>
            <p className='song-desc'>{desc}</p>
        </div>
    )
}

export default SongItem