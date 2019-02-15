import { GetJoke } from '../types'

export const jokesSaga = categories => ({
  type: GetJoke.saga,
  categories,
})
export const jokesRandomSaga = () => ({
  type: GetJoke.randomSaga,
})
export const jokesStart = () => ({
  type: GetJoke.start,
})
export const jokesSuccess = payload => ({
  type: GetJoke.success,
  payload,
})
export const jokesRandomSuccess = payload => ({
  type: GetJoke.success,
  payload,
})
export const jokesFailure = () => ({
  type: GetJoke.failure,
})
