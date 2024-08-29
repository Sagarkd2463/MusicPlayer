import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

    const { seekBg, seekBar, playStatus, play, pause, track, time, previous, next, seeksong } = useContext(PlayerContext);

    return (
        <div className='player-main'>
            <div className='player-sub'>
                <img className='img-song' src={track.image} alt="" />
                <div>
                    <p>{track.name}</p>
                    <p>{track.desc.slice(0, 12)}</p>
                </div>
            </div>

            <div className='player-sub'>
                <div className='player-options'>
                    <img className='img-shuffle' src={assets.shuffle_icon} alt="" />
                    <img onClick={() => previous} className='img-previous' src={assets.prev_icon} alt="" />
                    {
                        playStatus ? <img onClick={pause} className='img-pause' src={assets.pause_icon} alt="" /> :
                            <img onClick={play} className='img-play' src={assets.play_icon} alt="" />
                    }
                    <img onClick={() => next} className='img-next' src={assets.next_icon} alt="" />
                    <img className='img-loop' src={assets.loop_icon} alt="" />
                </div>

                <div className='player-parts-one'>
                    <p>{time.currentTime.minute}:{time.currentTime.second}</p>
                    <div ref={seekBg} onClick={seeksong} className='player-part-one'>
                        <hr ref={seekBar} className='player-line' />
                    </div>
                    <p>{time.totalTime.minute}:{time.totalTime.second}</p>
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

export default Player;