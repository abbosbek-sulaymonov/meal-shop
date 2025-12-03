import React, { useState } from 'react';
import { Search as SearchIcon, X } from 'lucide-react';
import classes from './styles/search.module.css';

export default function Search({ inputSearch = Function.prototype }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    inputSearch(input);
  };

  const handleClear = () => {
    setInput('');
    inputSearch('');
  };

  return (
    <form className={classes.searchForm} onSubmit={handleSubmit}>
      <div className={classes.searchWrapper}>
        <SearchIcon className={classes.searchIcon} size={20} strokeWidth={2} />
        <input
          type="text"
          placeholder="Search for categories..."
          className={classes.searchInput}
          onChange={(e) => setInput(e.target.value)}
          value={input}
          autoComplete="off"
        />
        {input && (
          <button type="button" className={classes.clearButton} onClick={handleClear} aria-label="Clear search">
            <X size={18} strokeWidth={2} />
          </button>
        )}
      </div>
      <button type="submit" className={classes.searchButton}>
        Search
      </button>
    </form>
  );
}
