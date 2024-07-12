import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { fetchMovieById } from '../../store/movieSlice';
import MovieDetail from '../../components/MovieDetail';
import styles from '../../styles/MovieDetail.module.css';

const Movie = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();
  const movie = useAppSelector((state) => state.movie);
  const movieStatus = useAppSelector((state) => state.movie.status);
  const error = useAppSelector((state) => state.movie.error);

  useEffect(() => {
    if (id && typeof id === 'string') {
      dispatch(fetchMovieById(id));
    }
  }, [id, dispatch]);

  let content;

  if (movieStatus === 'loading') {
    content = <p>Loading...</p>;
  } else if (movieStatus === 'succeeded') {
    content = movie ? <MovieDetail movie={movie} /> : <p>Movie not found</p>;
  } else if (movieStatus === 'failed') {
    content = <p>{error}</p>;
  }

  return <div className={styles.container}>{content}</div>;
};

export default Movie;
