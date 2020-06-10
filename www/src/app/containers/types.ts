export interface BaseContainerState {
  err: boolean;
  loading: boolean;
}

interface PagedResults<T> {
  [index: number]: T[];
}
export interface BasePagedResults<T> {
  page: number;
  totalPages: number;
  results: PagedResults<T>;
}
