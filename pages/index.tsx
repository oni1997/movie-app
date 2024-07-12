import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store';
import { fetchMovies } from '../store/movieSlice';
import MovieList from '../components/MovieList';
import SearchBar from '../components/SearchBar';
import styles from '../styles/Home.module.css';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const movies = useAppSelector((state) => state.movie.movies);
  const movieStatus = useAppSelector((state) => state.movie.status);
  const error = useAppSelector((state) => state.movie.error);

  useEffect(() => {
    if (movieStatus === 'idle') {
      dispatch(fetchMovies(''));
    }
  }, [movieStatus, dispatch]);

  let content;

  if (movieStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (movieStatus === 'succeeded') {
    content = <MovieList movies={movies} />;
  } else if (movieStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return (
    <div className={styles.container}>
      <SearchBar />
      {content}
    </div>
  );
};

export default Home;
