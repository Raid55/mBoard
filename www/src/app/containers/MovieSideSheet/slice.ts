import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, MovieTabs } from './types';
import { FullMovieDetails } from '../../../../../server/src/types/movies';

// The initial state of the MovieSideSheet container
export const initialState: ContainerState = {
  err: false,
  loading: false,
  movieID: 0,
  fullMovie: null,
  selectedTab: MovieTabs.info,
};

const movieSideSheetSlice = createSlice({
  name: 'movieSideSheet',
  initialState,
  reducers: {
    loadInfo(state) {
      state.loading = true;
      state.err = false;
    },
    infoLoaded(state, action: PayloadAction<FullMovieDetails>) {
      state.fullMovie = action.payload;
      state.loading = false;
    },
    infoError(state) {
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
      state.movieID = action.payload;
      state.err = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = movieSideSheetSlice;
