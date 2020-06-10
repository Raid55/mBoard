// import {Config} from '../types';

export const PORT = process.env.PORT || 8080;
export const MOVIEDB_POSTER_CDN =
  process.env.MOVIEDB_POSTER_CDN || 'https://image.tmdb.org';

export const MOVIEDB = {
  CDN_HOST: process.env.MOVIEDB_CDN_HOST || 'https://image.tmdb.org',
  BASE_PATH: process.env.MOVIEDB_BASE_PATH || '/t/p',
  POSTER_SIZE: process.env.POSTER_SIZE || '/w500',
};

export const MOVIEDB_ACCESS_TOKEN =
  process.env.MOVIEDB_ACCESS_TOKEN ||
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTU2OWMwZTBkN2QwZDAzNTQ1NzFiODEzODU5OWI5NyIsInN1YiI6IjVlZDZkMTE2MWIxNTdkMDAyMDU0OTJhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qRiVlNjO9HWoRn6Ohoy2DKeQMPqcCwoq_lp7gbX3iTs';

export const CACHE_DURATION = 900;
