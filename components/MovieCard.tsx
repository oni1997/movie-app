import React from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

interface MovieCardProps {
  movie: any;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className={styles.card}>
      <Link href={`/movie/${movie.id}`}>
        <a>
          <img src={movie.image} alt={movie.title} />
          <h2>{movie.title}</h2>
        </a>
      </Link>
    </div>
  );
};

export default MovieCard;
