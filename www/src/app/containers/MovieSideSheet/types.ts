import { BaseContainerState } from '../types';
import { FullMovieDetails } from 'commonTypes/movies';

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
  movie: FullMovieDetails | { [key: string]: any };
  selectedTab: MovieTabs;
}

export type ContainerState = MovieSideSheetState;
