import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import './styles/searchBar.css';

function SearchBar() {

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/search/${searchTerm}`);
  };

  return (
    <form autoComplete='off' className='search-main' onSubmit={handleSubmit}>
      <label htmlFor="search-field" className='search-label'>
        Search all songs
      </label>

      <div className='searchBar-main'>
        <FiSearch aria-hidden="true" className='search-icon' />
        <input
          name='search-field'
          autoComplete='off'
          id='search-field'
          placeholder='Search'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='search-input'
        />
      </div>
    </form>
  );
};

export default SearchBar;