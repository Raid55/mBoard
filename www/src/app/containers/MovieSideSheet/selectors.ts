import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.movieSideSheet || initialState;

export const selectSelectedTab = createSelector(
  [selectDomain],
  sd => sd.selectedTab,
);

export const selectLoading = createSelector([selectDomain], sd => sd.loading);
export const selectErr = createSelector([selectDomain], sd => sd.err);

export const selectMovieID = createSelector([selectDomain], sd => sd.movieID);
