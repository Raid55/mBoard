import {
  take,
  call,
  all,
  put,
  select,
  delay,
  takeLatest,
} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { actions } from './slice';
import { selectSearchInput, selectSearchPage } from './selectors';
import { PagedMovieList } from 'commonTypes/movies';
import { ENDPOINT_PRE } from 'commonTypes/api';

const SEARCH_DEBOUNCE_DELAY = 2024;

function* handleSearchInput(action: PayloadAction<string>) {
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
    const resp: AxiosResponse = yield call(
      axios.get,
      `${ENDPOINT_PRE.api}${ENDPOINT_PRE.search}`,
      {
        params,
      },
    );
    const payload: PagedMovieList = resp.data;

    if (payload.results && payload.results.length > 0) {
      yield put(actions.searchLoaded(payload));
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
