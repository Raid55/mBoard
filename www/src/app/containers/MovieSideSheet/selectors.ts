import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.movieSideSheet || initialState;

export const selectInfo = createSelector([selectDomain], sd => sd.info);
export const selectCredits = createSelector([selectDomain], sd => sd.credits);
export const selectReviews = createSelector([selectDomain], sd => sd.reviews);
export const selectRecs = createSelector([selectDomain], sd => sd.recs);

export const selectSelectedTab = createSelector(
  [selectDomain],
  sd => sd.selectedTab,
);
export const selectClosed = createSelector([selectDomain], sd => sd.closed);

export const selectLoading = createSelector([selectDomain], sd => sd.loading);
export const selectError = createSelector([selectDomain], sd => sd.error);

export const selectMovieID = createSelector([selectDomain], sd => sd.movieID);
