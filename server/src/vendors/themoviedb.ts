import axios, {AxiosInstance} from 'axios';

import {MOVIEDB_ACCESS_TOKEN} from '../config';
import {STATUS_CODES} from 'commonTypes/api';
import {FullMovieDetails, PagedMovieList} from 'commonTypes/movies';

const movieDBInstace: AxiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    'Content-Type': 'application/json',
    charset: 'utf-8',
    Authorization: `Bearer ${MOVIEDB_ACCESS_TOKEN}`,
  },
  params: {
    language: 'en-US',
  },
});

/*
 * Movie
 */

type FullMovieAsync = Promise<FullMovieDetails>;
export const getFullMovie = (id: string): FullMovieAsync => {
  const params = {
    append_to_response: 'release_dates,credits,videos,similar',
  };
  return movieDBInstace.get(`/movie/${id}`, {params}).then(resp => {
    if (resp.status !== STATUS_CODES.ok) {
      throw new Error('TODO');
    }
    return resp.data;
  }) as FullMovieAsync;
};

type SimilarMovieAsync = Promise<PagedMovieList>;
export const getSimilarMovies = (
  id: string,
  page: number = 1
): SimilarMovieAsync => {
  const params = {
    page,
  };
  return movieDBInstace.get(`/movie/${id}/similar`, {params}).then(resp => {
    if (resp.status !== STATUS_CODES.ok) {
      throw new Error('TODO');
    }
    return resp.data;
  }) as SimilarMovieAsync;
};

type NowPlayingMoviesAsync = Promise<PagedMovieList>;
export const getNowPlayingMovies = (
  page: number = 1
): NowPlayingMoviesAsync => {
  const params = {
    page,
  };
  return movieDBInstace.get(`/movie/now_playing`, {params}).then(resp => {
    if (resp.status !== STATUS_CODES.ok) {
      throw new Error('TODO');
    }
    return resp.data;
  }) as NowPlayingMoviesAsync;
};

type TopRatedMoviesAsync = Promise<PagedMovieList>;
export const getTopRatedMovies = (page: number = 1): TopRatedMoviesAsync => {
  const params = {
    page,
  };
  return movieDBInstace.get(`/movie/top_rated`, {params}).then(resp => {
    if (resp.status !== STATUS_CODES.ok) {
      throw new Error('TODO');
    }
    return resp.data;
  }) as TopRatedMoviesAsync;
};

type TrendingMoviesAsync = Promise<PagedMovieList>;
export const getTrendingMovies = (page: number = 1): TrendingMoviesAsync => {
  const params = {
    page,
  };
  return movieDBInstace.get(`/movie/popular`, {params}).then(resp => {
    if (resp.status !== STATUS_CODES.ok) {
      throw new Error('TODO');
    }
    return resp.data;
  }) as TrendingMoviesAsync;
};

type UpcomingMoviesAsync = Promise<PagedMovieList>;
export const getUpcomingMovies = (page: number = 1): UpcomingMoviesAsync => {
  const params = {
    page,
  };
  return movieDBInstace.get(`/movie/upcoming`, {params}).then(resp => {
    if (resp.status !== STATUS_CODES.ok) {
      throw new Error('TODO');
    }
    return resp.data;
  }) as UpcomingMoviesAsync;
};

/*
 * Search
 */
type SearchAsync = Promise<PagedMovieList>;
export const getSearch = (query: string, page: number = 1): SearchAsync => {
  const params = {
    query,
    page,
  };
  return movieDBInstace.get(`/search/movie`, {params}).then(resp => {
    if (resp.status !== STATUS_CODES.ok) {
      throw new Error('TODO');
    }
    return resp.data;
  }) as SearchAsync;
};
/*
 * Discover
 */
// type GetSimilarMovieAsync = Promise<SimilarMovieList>;
// export const get = (id: string, page: number = 1): GetSimilarMovieAsync => {
//   const params = {
//     page,
//   };
//   return movieDBInstace.get(`/movie/${id}/similar`, {params}).then(resp => {
//     if (resp.status !== STATUS_CODES.ok) {
//       throw new Error('TODO');
//     }
//     return resp.data as GetSimilarMovieAsync;
//   });
// };
