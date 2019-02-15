import { put, call } from 'redux-saga/effects'
import API from '../../api'
import {
  jokesStart,
  jokesSuccess,
  jokesRandomSuccess,
  jokesFailure,
} from '../actions/jokesAction'

export function* getJoke({ categories }) {
  try {
    yield put(jokesStart())

    const apiCall = yield call(API.joke, categories)
    const apiData = yield apiCall.json()

    yield put(jokesSuccess(apiData.value))
  } catch (e) {
    yield put(jokesFailure())
  }
}
export function* getRandomJoke() {
  try {
    yield put(jokesStart())

    const apiCall = yield call(API.randomJoke)
    const apiData = yield apiCall.json()

    yield put(jokesRandomSuccess(apiData.value))
  } catch (e) {
    yield put(jokesFailure())
  }
}
