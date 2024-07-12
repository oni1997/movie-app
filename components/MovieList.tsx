import React from 'react';
import MovieCard from './MovieCard';
import styles from '../styles/Home.module.css';

interface MovieListProps {
  movies: any[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  return (
    <div className={styles.grid}>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
