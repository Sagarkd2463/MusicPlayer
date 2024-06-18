import React from 'react';
import { BsFillVolumeUpFill, BsFillVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';

function VolumeBar({ value, min, max, onChange, setVolume }) {
  return (
    <div className=''>
      {value <= 1 && value > 0.5 && <BsFillVolumeUpFill size={25} color='#FFF' onClick={() => setVolume(0)} />}
      {value <= 0.5 && value > 0 && <BsFillVolumeDownFill size={25} color='#FFF' onClick={() => setVolume(0)} />}
      {value === 0 && <BsFillVolumeMuteFill size={25} color='#FFF' onClick={() => setVolume(1)} />}

      <input
        type="range"
        step='any'
        value={value}
        min={min}
        max={max}
        onChange={onChange}
        className=''
      />
    </div>
  );
};

export default VolumeBar;