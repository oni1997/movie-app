import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface MovieState {
  movies: any[];
  selectedMovie: any;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: MovieState = {
  movies: [],
  selectedMovie: null,
  status: 'idle',
  error: null,
};


export const fetchMovieById = createAsyncThunk('movies/fetchMovieById', async (id: string) => {
  const response = await axios.get(`https://search.imdbot.workers.dev/?tt=${id}`);
  return response.data;
});


export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (query: string) => {
    const response = await fetch(`/api/movies?q=${query}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  });
  
  const movieSlice = createSlice({
    name: 'movie',
    initialState: {
      movies: [],
      status: 'idle',
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchMovies.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchMovies.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.movies = action.payload;
        })
        .addCase(fetchMovies.rejected, (state, action) => {
          state.status = 'failed';
        //   state.error = action.error.message;
        });
    },
  });
  
  export default movieSlice.reducer;