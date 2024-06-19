import React from 'react';
import { loader } from '../assets';

function Loader({ title }) {
  return (
    <div className=''>
      <img src={loader} alt="loader" className=''/>
      <h1 className=''>
        {title || 'Loading...'}
      </h1>
    </div>
  );
};

export default Loader;