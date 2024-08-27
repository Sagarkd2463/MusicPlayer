import React from 'react'
import { assets, songsData } from '../assets/assets'

const Player = () => {
    return (
        <div className='player-main'>
            <div className='player-sub'>
                <img className='img-song' src={songsData[0].image} alt="" />
                <div>
                    <p>{songsData[0].name}</p>
                    <p>{songsData[0].desc.slice(0, 12)}</p>
                </div>
            </div>

            <div className='player-sub'>
                <div className='player-options'>
                    <img className='img-shuffle' src={assets.shuffle_icon} alt="" />
                    <img className='img-previous' src={assets.prev_icon} alt="" />
                    <img className='img-play' src={assets.play_icon} alt="" />
                    <img className='img-next' src={assets.next_icon} alt="" />
                    <img className='img-loop' src={assets.loop_icon} alt="" />
                </div>

                <div className='player-parts-one'>
                    <p>1:06</p>
                    <div className='player-part-one'>
                        <hr className='player-line' />
                    </div>
                    <p>4:20</p>
                </div>
            </div>

            <div className='player-parts-two'>
                <img className='img-plays' src={assets.plays_icon} alt="" />
                <img className='img-plays' src={assets.mic_icon} alt="" />
                <img className='img-plays' src={assets.queue_icon} alt="" />
                <img className='img-plays' src={assets.speaker_icon} alt="" />
                <img className='img-plays' src={assets.volume_icon} alt="" />
                <div className='player-volume'></div>
                <img className='img-plays' src={assets.mini_player_icon} alt="" />
                <img className='img-plays' src={assets.zoom_icon} alt="" />
            </div>
        </div>
    )
}

export default Player