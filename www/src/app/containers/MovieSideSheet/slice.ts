import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, MovieTabs } from './types';
import { FullMovieDetails, MovieDetails } from 'commonTypes/movies';

// The initial state of the MovieSideSheet container
export const initialState: ContainerState = {
  err: false,
  loading: false,
  movieID: 0,
  movie: null,
  selectedTab: MovieTabs.info,
};

const movieSideSheetSlice = createSlice({
  name: 'movieSideSheet',
  initialState,
  reducers: {
    loadMovie(state, action: PayloadAction<string>) {
      state.loading = true;
      state.err = false;
    },
    movieLoaded(state, action: PayloadAction<FullMovieDetails>) {
      state.movieID = action.payload.id;
      state.movie = action.payload;
      state.loading = false;
    },
    movieError(state) {
      state.err = true;
      state.loading = false;
    },
    updateSelectedTab(state, action: PayloadAction<MovieTabs>) {
      state.selectedTab = action.payload;
    },
    resetTab(state) {
      state.selectedTab = initialState.selectedTab;
    },
    updateMovieID(state, action: PayloadAction<number>) {
      if (state.movieID !== action.payload) state.movieID = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = movieSideSheetSlice;
