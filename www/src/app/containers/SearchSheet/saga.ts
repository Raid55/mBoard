import {
  take,
  call,
  all,
  put,
  select,
  delay,
  takeLatest,
} from 'redux-saga/effects';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { actions } from './slice';
import { PagedMovieList } from 'commonTypes/movies';
import { selectSearchInput, selectSearchPage } from './selectors';

const SEARCH_DEBOUNCE_DELAY = 2024;

function* handleSearchInput(action) {
  yield delay(SEARCH_DEBOUNCE_DELAY);

  if (action.payload.length == 0) yield put(actions.clearSearch());
  else yield put(actions.loadSearch());
}

function* getSearchResults() {
  const query: string = yield select(selectSearchInput);
  const page: number = yield select(selectSearchPage);
  const params = {
    query,
    page,
  };

  try {
    const resp: AxiosResponse = yield call(axios.get, '/api/search', {
      params,
    });
    const data: PagedMovieList = resp.data;

    if (data.results && data.results.length > 0) {
      yield put(actions.searchLoaded(data));
    } else {
      yield put(actions.error());
    }
  } catch (err) {
    if ((err as AxiosError).response?.status === 404) {
      yield put(actions.error());
    } else {
      yield put(actions.error());
    }
  }
}
export function* searchSheetSaga() {
  yield all([
    takeLatest(actions.searchInputUpdated.type, handleSearchInput),
    takeLatest(actions.loadSearch.type, getSearchResults),
  ]);
}
