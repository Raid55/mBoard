require('dotenv').config();

export const PORT = process.env.PORT || 8080;
export const MOVIEDB_POSTER_CDN =
  process.env.MOVIEDB_POSTER_CDN || 'https://image.tmdb.org';

export const MOVIEDB = {
  CDN_HOST: process.env.MOVIEDB_CDN_HOST || 'https://image.tmdb.org',
  BASE_PATH: process.env.MOVIEDB_BASE_PATH || '/t/p',
  POSTER_SIZE: process.env.POSTER_SIZE || '/w500',
};

export const MOVIEDB_ACCESS_TOKEN = process.env.MOVIEDB_ACCESS_TOKEN;
export const CACHE_DURATION = 900;
