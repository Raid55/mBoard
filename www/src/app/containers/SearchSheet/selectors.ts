import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.searchSheet || initialState;

export const selectSearchSheet = createSelector(
  [selectDomain],
  searchSheetState => searchSheetState,
);

export const selectSearchInput = createSelector(
  [selectDomain],
  searchSheetState => searchSheetState.searchValue,
);

export const selectSearchPage = createSelector(
  [selectDomain],
  searchSheetState => searchSheetState.page,
);
export const selectLoading = createSelector(
  [selectDomain],
  searchSheetState => searchSheetState.loading,
);

export const selectSearchPageResults = createSelector(
  [selectDomain, selectSearchPage],
  (searchSheetState, searchPage) => searchSheetState.results[searchPage],
);
