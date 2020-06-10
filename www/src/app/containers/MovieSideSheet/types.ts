import { BaseContainerState } from '../types';
import { FullMovieDetails } from '../../../../../server/src/types/movies';

export enum MovieTabs {
  info = 'info',
  credits = 'credits',
  reviews = 'reviews',
  recs = 'recommendations',
}

/* --- STATE --- */
export interface MovieSideSheetState extends BaseContainerState {
  movieID: number;
  fullMovie: FullMovieDetails | null;
  selectedTab: MovieTabs;
}

export type ContainerState = MovieSideSheetState;
