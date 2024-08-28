import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'

const Display = () => {
    return (
        <div className='display-main'>
            <Routes>
                <Route path='/' element={<DisplayHome />} />
                <Route path='/album/:id' element={<DisplayAlbum />} />
            </Routes>
        </div>
    )
}

export default Display