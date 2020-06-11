import { BaseContainerState } from '../types';
import { FullMovieDetails } from 'commonTypes/movies';

export enum MovieTabs {
  info = 'info',
  credits = 'credits',
  reviews = 'reviews',
  recs = 'recommendations',
}

/* --- STATE --- */
export interface MovieSideSheetState extends BaseContainerState {
  movieID: number;
  movie: FullMovieDetails | null;
  selectedTab: MovieTabs;
}

export type ContainerState = MovieSideSheetState;
