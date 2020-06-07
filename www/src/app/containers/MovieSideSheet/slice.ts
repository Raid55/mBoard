import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import {
  ContainerState,
  MovieInfo,
  MovieCredits,
  MovieReviews,
  MovieRecs,
  MovieTabs,
} from './types';

const infoReducers = {
  loadInfo(state) {
    state.loading = true;
    state.error = false;
    state.info = {};
  },
  infoLoaded(state, action: PayloadAction<MovieInfo>) {
    state.info = action.payload;
    state.loading = false;
  },
  infoError(state) {
    state.error = true;
    state.loading = false;
  },
};

const creditsReducers = {
  loadCredits(state) {
    state.loading = true;
    state.error = false;
    state.credits = {};
  },
  creditsLoaded(state, action: PayloadAction<MovieCredits>) {
    state.credits = action.payload;
    state.loading = false;
  },
  creditsError(state) {
    state.error = true;
    state.loading = false;
  },
};
const reviewsReducers = {
  loadReviews(state) {
    state.loading = true;
    state.error = false;
    state.reviews = {};
  },
  reviewsLoaded(state, action: PayloadAction<MovieReviews>) {
    state.reviews = action.payload;
    state.loading = false;
  },
  reviewsError(state) {
    state.error = true;
    state.loading = false;
  },
};
const recsReducers = {
  loadRecs(state) {
    state.error = false;
    state.recs = {};
  },
  recsLoaded(state, action: PayloadAction<MovieRecs>) {
    state.info = action.payload;
    state.loading = false;
  },
  recsError(state) {
    state.error = true;
    state.loading = false;
  },
};

// The initial state of the MovieSideSheet container
export const initialState: ContainerState = {
  info: {},
  credits: {},
  reviews: [],
  recs: [],
  selectedTab: MovieTabs.info,
  closed: true,
  loading: false,
  error: false,
  movieID: 0,
};

const movieSideSheetSlice = createSlice({
  name: 'movieSideSheet',
  initialState,
  reducers: {
    ...infoReducers,
    ...creditsReducers,
    ...reviewsReducers,
    ...recsReducers,
    updateSelectedTab(state, action: PayloadAction<MovieTabs>) {
      state.selectedTab = action.payload;
    },
    closeSideSheet(state) {
      state.closed = true;
      state.selectedTab = initialState.selectedTab;
    },
    updateMovieID(state, action: PayloadAction<number>) {
      state.movieID = action.payload;
      // state.info = {};
      // state.credits = {};
      // state.reviews = [];
      // state.recs = [];
      // state.error = false;
      state.closed = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = movieSideSheetSlice;
