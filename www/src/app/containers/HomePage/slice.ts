import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import {
  ContainerState,
  LoadFiltersPayload,
  FilterLoadedPayload,
} from './types';

// The initial state of the HomePage container
export const initialState: ContainerState = {
  err: false,
  loading: false,
  lists: {},
};

const DEFAULT_FILTER = {
  page: 1,
  totalPages: 1,
  pages: { 1: [] },
};

const homePageSlice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    loadFilteredList(state, action: PayloadAction<LoadFiltersPayload>) {
      const { filterKey } = action.payload;

      if (!state.lists[filterKey]) state.lists[filterKey] = DEFAULT_FILTER;
    },
    filteredListLoaded(state, action: PayloadAction<FilterLoadedPayload>) {
      const { filterKey, results, page, total_pages } = action.payload;

      state.lists[filterKey]!.page = page;
      state.lists[filterKey]!.totalPages = total_pages;
      state.lists[filterKey]!.pages[page] = results;
    },
    error(state) {
      state.err = true;
      state.loading = false;
    },
  },
});

export const { actions, reducer, name: sliceKey } = homePageSlice;
