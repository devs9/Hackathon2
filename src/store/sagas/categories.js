import { put, call } from 'redux-saga/effects'
import API from '../../api'
import {
  categoriesStart,
  categoriesSuccess,
  categoriesFailure,
} from '../actions/categoriesAction'

export function* signInSaga() {
  try {
    yield put(categoriesStart())

    const apiCall = yield call(API.category)
    const apiData = yield apiCall.json()

    yield put(categoriesSuccess(apiData))
  } catch (e) {
    console.log('No hello')
    yield put(categoriesFailure())
  }
}
