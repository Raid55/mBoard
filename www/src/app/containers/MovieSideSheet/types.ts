import { BaseContainerState } from '../types';
import { FullMovieDetails, MovieDetails } from 'commonTypes/movies';

export enum MovieTabs {
  info = 'info',
  cast = 'cast',
  crew = 'crew',
  reviews = 'reviews',
  similar = 'similar',
}

export enum VideoSites {
  youtube = 'YouTube',
}

/* --- STATE --- */
export interface MovieSideSheetState extends BaseContainerState {
  movieID: number;
  movie: FullMovieDetails | null;
  selectedTab: MovieTabs;
}

export type ContainerState = MovieSideSheetState;
