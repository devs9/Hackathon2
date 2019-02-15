import { GetCategories } from '../types'

const initialState = {
  isFetch: false,
  error: '',
  dataCategory: null,
}
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GetCategories.start:
      return { ...state, isFetch: true }
    case GetCategories.success:
      return {
        ...state,
        isFetch: false,
        dataCategory: payload,
        error: '',
      }
    case GetCategories.failure:
      return { ...state, isAuth: false, isFetch: false, error: payload }
    default:
      return state
  }
}
