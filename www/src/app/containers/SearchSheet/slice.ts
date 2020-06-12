import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';

import { PagedMovieList } from 'commonTypes/movies';
import { ContainerState } from './types';

// The initial state of the SearchSheet container
export const initialState: ContainerState = {
  err: false,
  loading: false,
  searchValue: '',
  totalPages: 1,
  page: 1,
  results: {},
};

const searchSheetSlice = createSlice({
  name: 'searchSheet',
  initialState,
  reducers: {
    searchInputUpdated(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
      state.loading = true;
    },
    loadSearch(state) {
      state.err = false;
      state.loading = true;
      state.results = initialState.results;
    },
    loadSearchPage(state, action: PayloadAction<number>) {
      state.err = false;
      state.loading = true;
    },
    searchLoaded(state, action: PayloadAction<PagedMovieList>) {
      const { results, page, total_pages } = action.payload;

      state.results[page] = results;
      state.totalPages = total_pages;
      state.page = page;
      state.loading = false;
    },
    clearSearch(state) {
      state.err = initialState.err;
      state.loading = initialState.loading;
      state.searchValue = initialState.searchValue;
      state.totalPages = initialState.totalPages;
      state.page = initialState.page;
      state.results = initialState.results;
    },
    error(state) {
      state.err = true;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = searchSheetSlice;
