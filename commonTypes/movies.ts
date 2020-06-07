export interface MovieInfo {
  id: number;
  title: string;
  release_date: string;
  original_language: string;
  overview: string;
  poster_path: string;
}

interface MovieGenre {
  id: number;
  name: string;
}
interface SpokenLanguage {
  iso_639_1: string;
  name: string;
}

export enum MovieStatus {
  rumored = "Rumored",
  planned = "Planned",
  inProduction = "In Production",
  postProduction = "Post Production",
  released = "Released",
  canceled = "Canceled",
}

export enum USMovieCertifications {
  g = "G",
  pg = "PG",
  pg13 = "PG-13",
  r = "R",
  nc17 = "NC-17",
  nr = "NR",
}

export interface MovieDetails extends MovieInfo {
  budget: number;
  genres: MovieGenre[];
  homepage: string;
  imdb_id: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: MovieStatus;
  certification: USMovieCertifications;
  ytVideo: string;
}

interface PeopleCast {
  id: number;
  cast_id: number;
  gender: number;
  name: string;
  profile_path: string;
}

interface CreditsCast extends PeopleCast {
  character: string;
  order: number;
}

export enum crewHighlight {
  director = "Director",
  screenplay = "Screenplay",
  producer = "Producer",
}
interface CreditsCrew extends PeopleCast {
  department: string;
  job: crewHighlight | string;
}

export interface MovieCredits {
  cast: CreditsCast[];
  crew: CreditsCrew[];
}

// export interface MovieReview {}

export interface MoviePayload extends MovieDetails {
  credits: MovieCredits;
  // reviews: MovieReview[]
  similar: MovieInfo[];
}

// export type MovieReviews = MovieReview[];
