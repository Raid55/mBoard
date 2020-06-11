import { PeopleDetails } from "./people";
import { Pagination, ResultList } from "./utils";
export declare enum MOVIE_STATUS {
    rumored = "Rumored",
    planned = "Planned",
    inProduction = "In Production",
    postProduction = "Post Production",
    released = "Released",
    canceled = "Canceled"
}
export declare enum PageParams {
    page = "page"
}
export declare enum SearchParams {
    query = "query"
}
export declare enum US_MOVIE_CERTS {
    g = "G",
    pg = "PG",
    pg13 = "PG-13",
    r = "R",
    nc17 = "NC-17",
    nr = "NR"
}
export declare enum CREW_HIGHLIGHT {
    director = "Director",
    screenplay = "Screenplay",
    producer = "Producer"
}
interface MovieGenre {
    id: number;
    name: string;
}
interface SpokenLanguage {
    iso_639_1: string;
    name: string;
}
interface CreditsCast extends PeopleDetails {
    character: string;
    order: number;
}
interface CreditsCrew extends PeopleDetails {
    department: string;
    job: CREW_HIGHLIGHT | string;
}
interface MovieCredits {
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
declare type ReleaseCertList = ResultList<ReleaseCountryCert>;
interface VideoDetails {
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    site: string;
    size: number;
    type: string;
}
declare type VideoList = ResultList<VideoDetails>;
export interface MovieDetails {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
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
export declare type MovieList = ResultList<MovieDetails>;
export declare type PagedMovieList = MovieList & Pagination;
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
export {};
