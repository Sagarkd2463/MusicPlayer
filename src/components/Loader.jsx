import React from 'react';
import { loader } from '../assets';
import './styles/loader.css';

function Loader({ title }) {
  return (
    <div className='loader-main'>
      <img src={loader} alt="loader" className='loader-img' />
      <h1 className='loader-title'>
        {title || 'Loading...'}
      </h1>
    </div>
  );
};

export default Loader;