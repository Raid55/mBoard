export enum PAGE_PARAMS {
  page = "page",
}
export enum SEARCH_PARAMS {
  query = "query",
}

export enum DISCOVER_PARAMS {
  filter = "filter",
}
export enum DISCOVER_FILTERS {
  trending = "trending",
  topRated = "top_rated",
  nowPlaying = "now_playing",
  upcoming = "upcoming",
  default = "discover",
}

export enum STATUS_CODES {
  ok = 200,
  notFound = 404,
}

export enum ENDPOINT_PRE {
  api = "/api",
  search = "/search",
  posters = "/posters",
  movie = "/movie",
  discover = "/discover",
  similar = "/similar",
}
