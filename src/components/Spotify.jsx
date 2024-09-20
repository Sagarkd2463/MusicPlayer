import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Display from './Display';
import Footer from './Footer';

const Spotify = () => {
    return (
        <div className='container'>
            <div className="spotify_body">
                <Sidebar />
                <div className="body">
                    <Navbar />
                    <div className="body_contents">
                        <Display />
                    </div>
                </div>
            </div>

            <div className="spotify_footer">
                <Footer />
            </div>
        </div>
    );
};

export default Spotify;