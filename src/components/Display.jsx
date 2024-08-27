import React from 'react'
import { Routes, Route } from 'react-router-dom'
import DisplayHome from './DisplayHome'

const Display = () => {
    return (
        <div className='display-main'>
            <Routes>
                <Route path='/' element={<DisplayHome />} />
            </Routes>
        </div>
    )
}

export default Display