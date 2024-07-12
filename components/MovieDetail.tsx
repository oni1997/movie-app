import React from 'react';
import styles from '../styles/MovieDetail.module.css';

interface MovieDetailProps {
  movie: any;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movie }) => {
  return (
    <div className={styles.detail}>
      <img src={movie.image} alt={movie.title} />
      <h1>{movie.title}</h1>
      <p>{movie.description}</p>
      <h3>Actors:</h3>
      <p>{movie.actors.join(', ')}</p>
      <h3>Reviews:</h3>
      <ul>
        {movie.reviews.map((review: string, index: number) => (
          <li key={index}>{review}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieDetail;
