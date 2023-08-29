import {useState } from 'react';
import { SearchBarStyled, SearchFormStyled } from './SearchBarStyled';

export const SearchBar = ({ onFormSubmit }) => {
  const [query, setQuery] = useState('');
  
  const handleChange = evt => {
    setQuery(evt.target.value.toLowerCase().trim());
  };

    const handleSubmit = evt => {
    evt.preventDefault();
    if (query.trim() === '') {
      alert('Write something');
      return;
    }
    onFormSubmit(query);
    setQuery('');
  };

  return (
      <SearchBarStyled className="searchbar">
        <SearchFormStyled className="form" onSubmit={handleSubmit}>
          <input
            value={query}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
          />
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
        </SearchFormStyled>
      </SearchBarStyled>
    );
}
