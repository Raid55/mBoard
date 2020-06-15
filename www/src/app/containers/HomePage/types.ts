import { BaseContainerState, BasePagedResults } from '../types';
import { PagedMovieList, MovieDetails } from 'commonTypes/movies';
import { DISCOVER_FILTERS } from 'commonTypes/api';

export interface FilterLoadedPayload extends PagedMovieList {
  filterKey: DISCOVER_FILTERS;
}

export interface LoadFiltersPayload {
  filterKey: DISCOVER_FILTERS;
  page?: number;
}

type KeyedMovieList = {
  [key in DISCOVER_FILTERS]?: BasePagedResults<MovieDetails>;
};

/* --- STATE --- */
export interface HomePageState extends BaseContainerState {
  lists: KeyedMovieList;
}

export type ContainerState = HomePageState;
