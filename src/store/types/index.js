const SAGA = 'SAGA'
const START = 'START'
const SUCCESS = 'SUCCESS'
const FAILURE = 'FAILURE'

const JOKE = 'JOKE_'
const CATEGORY = 'CATEGORY_'
const RANDOM_JOKE = 'RANDOM_JOKE_'

export const GetCategories = {
  saga: CATEGORY + SAGA,
  start: CATEGORY + START,
  success: CATEGORY + SUCCESS,
  failure: CATEGORY + FAILURE,
}
export const GetJoke = {
  saga: JOKE + SAGA,
  randomSaga: RANDOM_JOKE + SAGA,
  start: JOKE + START,
  success: JOKE + SUCCESS,
  randomSuccess: RANDOM_JOKE + SUCCESS,
  failure: JOKE + FAILURE,
}
