import React, { useState } from 'react';
import { useAppDispatch } from '../store';
import { fetchMovies } from '../store/movieSlice';
import styles from '../styles/Home.module.css';

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');
  const dispatch = useAppDispatch();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(fetchMovies(query));
  };

  return (
    <form className={styles.search} onSubmit={handleSearch}>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
