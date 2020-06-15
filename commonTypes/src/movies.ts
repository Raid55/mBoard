import { PeopleDetails } from "./people";
import { Pagination, ResultList } from "./utils";

export enum MOVIE_STATUS {
  rumored = "Rumored",
  planned = "Planned",
  inProduction = "In Production",
  postProduction = "Post Production",
  released = "Released",
  canceled = "Canceled",
}

export enum US_MOVIE_CERTS {
  g = "G",
  pg = "PG",
  pg13 = "PG-13",
  r = "R",
  nc17 = "NC-17",
  nr = "NR",
}

export enum CREW_HIGHLIGHT {
  director = "Director",
  producer = "Producer",
  screenplay = "Screenplay",
}

export enum MOVIE_GENRES {
  Action = 28,
  Adventure = 12,
  Animation = 16,
  Comedy = 35,
  Crime = 80,
  Documentary = 99,
  Drama = 18,
  Family = 10751,
  Fantasy = 14,
  History = 36,
  Horror = 27,
  Music = 10402,
  Mystery = 9648,
  Romance = 10749,
  SciFi = 878,
  Thriller = 53,
  Western = 37,
  War = 10752,
}

export interface MovieGenre {
  id: MOVIE_GENRES;
  name: string;
}

interface SpokenLanguage {
  iso_639_1: string;
  name: string;
}

export interface CreditsCast extends PeopleDetails {
  character: string;
  order: number;
  cast_id: number;
}
export interface CreditsCrew extends PeopleDetails {
  department: string;
  job: CREW_HIGHLIGHT | string;
  credit_id: string;
}

export interface MovieCredits {
  cast: CreditsCast[];
  crew: CreditsCrew[];
}

interface ProdCompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}

interface ReleaseCert {
  certification: US_MOVIE_CERTS;
  iso_639_1: string;
  note: string;
  release_date: string;
  type: number;
}
interface ReleaseCountryCert {
  iso_3166_1: string;
  release_dates: ReleaseCert[];
}
type ReleaseCertList = ResultList<ReleaseCountryCert>;

export interface VideoDetails {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  site: string;
  size: number;
  type: string;
}
type VideoList = ResultList<VideoDetails>;

export interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  genre_ids: MOVIE_GENRES[];
  id: number;
  original_language: string;
  original_title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  video: boolean;
  title: string;
  vote_average: number;
  vote_count: number;
  popularity: number;
}
export type MovieList = ResultList<MovieDetails>;
export type PagedMovieList = MovieList & Pagination;

export interface FullMovieDetails extends Omit<MovieDetails, "genre_ids"> {
  belongs_to_collection: unknown;
  budget: number;
  genres: MovieGenre[];
  homepage: string;
  imdb_id: string;
  production_companies: ProdCompany[];
  production_countries: unknown;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguage[];
  status: MOVIE_STATUS;
  tagline: string;
  credits: MovieCredits;
  release_dates: ReleaseCertList;
  similar: PagedMovieList;
  videos: VideoList;
}
