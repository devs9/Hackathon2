import { takeEvery } from 'redux-saga/effects'

import { GetCategories, GetJoke } from '../types'
import { signInSaga } from './categories'
import { getJoke, getRandomJoke } from './jokes'

export function* rootSaga() {
  yield takeEvery(GetCategories.saga, signInSaga)
  yield takeEvery(GetJoke.saga, getJoke)
  yield takeEvery(GetJoke.randomSaga, getRandomJoke)
}
