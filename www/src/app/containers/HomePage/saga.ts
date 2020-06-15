import { take, call, put, select, takeEvery } from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosResponse, AxiosError } from 'axios';
import { actions } from './slice';
import { LoadFiltersPayload, FilterLoadedPayload } from './types';
import { ENDPOINT_PRE } from 'commontypes/api';

export function* getFilterList(action: PayloadAction<LoadFiltersPayload>) {
  const { filterKey } = action.payload;
  const page = action.payload.page || 1;

  const params = {
    filter: filterKey,
    page,
  };

  try {
    const resp: AxiosResponse = yield call(
      axios.get,
      `${ENDPOINT_PRE.api}${ENDPOINT_PRE.discover}`,
      {
        params,
      },
    );

    const payload: FilterLoadedPayload = {
      filterKey,
      ...resp.data,
    };

    if (payload.results && payload.results.length > 0) {
      yield put(actions.filteredListLoaded(payload));
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

export function* homePageSaga() {
  yield takeEvery(actions.loadFilteredList.type, getFilterList);
}
