import React from 'react';

function Seekbar({ value, min, max, onInput, setSeekTime, appTime }) {

  const getTime = (time) => `${Math.floor(time / 60)}:${(`0${Math.floor(time % 60)}`).slice(-2)}`;

  return (
    <div className=''>
      <button type="button" onClick={() => setSeekTime(appTime - 5)}
        className=''>
        -
      </button>
      <p className=''>{value === 0 ? '0:00' : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className='' />

      <p className=''>{max === 0 ? '0:00' : getTime(max)}</p>

      <button type="button" onClick={() => setSeekTime(appTime + 5)}
        className=''>
        +
      </button>
    </div>
  );
};

export default Seekbar;