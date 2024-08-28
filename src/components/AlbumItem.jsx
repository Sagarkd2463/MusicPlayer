import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({ image, name, desc, id }) => {

    const navigate = useNavigate();

    return (
        <div className='album' onClick={() => navigate(`/album/${id}`)}>
            <img className='img-album' src={image} alt="" />
            <p className='album-name'>{name}</p>
            <p className='album-desc'>{desc}</p>
        </div>
    )
}

export default AlbumItem