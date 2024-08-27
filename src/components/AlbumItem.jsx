import React from 'react'

const AlbumItem = ({ image, name, desc, id }) => {
    return (
        <div className='album'>
            <img className='img-album' src={image} alt="" />
            <p className='album-name'>{name}</p>
            <p className='album-desc'>{desc}</p>
        </div>
    )
}

export default AlbumItem