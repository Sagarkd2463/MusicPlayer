import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';

function SearchBar() {

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };

  return (
    <form autoComplete='off' className='' onSubmit={handleSubmit}>
      <label htmlFor="search-field" className=''>
        Search all songs
      </label>

      <div className=''>
        <FiSearch className='' />
        <input
          name='search-field'
          autoComplete='off'
          id='search-field'
          placeholder='Search'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className=''
        />
      </div>
    </form>
  );
};

export default SearchBar;