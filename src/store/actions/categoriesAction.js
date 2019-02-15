import { GetCategories } from '../types'

export const categoriesSaga = () => ({
  type: GetCategories.saga,
})
export const categoriesStart = () => ({
  type: GetCategories.start,
})
export const categoriesSuccess = payload => ({
  type: GetCategories.success,
  payload,
})
export const categoriesFailure = () => ({
  type: GetCategories.failure,
})
