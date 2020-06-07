export interface MovieInfo {}
export interface MovieCredits {}

export interface MovieReview {}
export type MovieReviews = MovieReview[];

export interface MovieRec {}
export type MovieRecs = MovieRec[];

/* --- STATE --- */
export interface MovieSideSheetState {
  movieID: number;
  info: MovieInfo;
  credits: MovieCredits;
  reviews: MovieReviews;
  recs: MovieRecs;
  selectedTab: MovieTabs;
  loading: boolean;
  error: boolean;
  closed: boolean;
}

export enum MovieTabs {
  info = 'info',
  credits = 'credits',
  reviews = 'reviews',
  recs = 'recommendations',
}

export type ContainerState = MovieSideSheetState;
