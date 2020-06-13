import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';
import { VideoSites } from './types';
import { MovieCredits, US_MOVIE_CERTS } from 'commontypes/movies';

const selectDomain = (state: RootState) => state.movieSideSheet || initialState;

export const selectSelectedTab = createSelector(
  [selectDomain],
  sd => sd.selectedTab,
);

export const selectMovie = createSelector([selectDomain], sd =>
  sd.movie.id ? sd.movie : {},
);
export const selectMovieID = createSelector([selectDomain], sd => sd.movieID);

const selectVideos = createSelector([selectMovie], movie => movie.videos);
export const selectYTVideo = createSelector([selectVideos], videos =>
  videos && videos.results && videos.results.length > 0
    ? videos.results.find(video => video.site === VideoSites.youtube)
    : undefined,
);

const selectUSReleases = createSelector([selectMovie], movie =>
  movie.release_dates && movie.release_dates.results.length > 0
    ? movie.release_dates.results.find(release => release.iso_3166_1 === 'US')
    : undefined,
);
export const selectUSCertification = createSelector(
  [selectUSReleases],
  USReleases =>
    USReleases &&
    USReleases.release_dates &&
    USReleases.release_dates.length > 0
      ? USReleases.release_dates.reduce((a, b) =>
          a.release_date > b.release_date ? a : b,
        ).certification
      : US_MOVIE_CERTS.nr,
);

export const selectCredits = createSelector(
  [selectMovie],
  movie => movie.credits || ({ crew: [], cast: [] } as MovieCredits),
);

export const selectLoading = createSelector([selectDomain], sd => sd.loading);
export const selectErr = createSelector([selectDomain], sd => sd.err);
