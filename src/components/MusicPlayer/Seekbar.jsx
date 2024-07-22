import React from 'react';
import './musicStyles.css';

function Seekbar({ value, min, max, onInput, setSeekTime, appTime }) {

  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

  return (
    <div className='seekbar'>
      <button type="button" onClick={() => setSeekTime(appTime - 5)}
        className='minus-btn'>
        -
      </button>
      <p className='time'>{value === 0 ? '0:00' : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className='time-range' />

      <p className='max-time'>{max === 0 ? '0:00' : getTime(max)}</p>

      <button type="button" onClick={() => setSeekTime(appTime + 5)}
        className='plus-btn'>
        +
      </button>
    </div>
  );
};

export default Seekbar;