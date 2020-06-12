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
import { PayloadAction } from '@reduxjs/toolkit';

import { actions } from './slice';
import { FullMovieDetails } from 'commonTypes/movies';
import { ENDPOINT_PRE } from 'commontypes/api';
const { api, movie } = ENDPOINT_PRE;

function* getFullMovie(action: PayloadAction<string>) {
  try {
    const resp: AxiosResponse = yield call(
      axios.get,
      `${api}${movie}/${action.payload}`,
    );
    const data: FullMovieDetails = resp.data;

    // better check
    if (data.title) {
      yield put(actions.movieLoaded(data));
    } else {
      yield put(actions.movieError());
    }
  } catch (err) {
    if ((err as AxiosError).response?.status === 404) {
      yield put(actions.movieError());
    } else {
      yield put(actions.movieError());
    }
  }
}

export function* movieSideSheetSaga() {
  yield takeLatest(actions.loadMovie.type, getFullMovie);
}
