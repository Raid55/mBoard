import { MovieDetails } from '../../../../../server/src/types/movies';
import { BaseContainerState, BasePagedResults } from '../types';

/* --- STATE --- */
export interface SearchSheetState
  extends BaseContainerState,
    BasePagedResults<MovieDetails> {
  searchValue: string;
}

export type ContainerState = SearchSheetState;
