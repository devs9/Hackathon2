import { GetJoke } from '../types'

const initialState = {
  isFetch: false,
  error: '',
  joke: null,
}
export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GetJoke.start:
      return { ...state, isFetch: true }
    case GetJoke.success:
      return {
        ...state,
        isFetch: false,
        joke: payload,
        error: '',
      }
    case GetJoke.randomSuccess:
      return {
        ...state,
        isFetch: false,
        joke: payload,
        error: '',
      }
    case GetJoke.failure:
      return { ...state, isAuth: false, isFetch: false, error: payload }
    default:
      return state
  }
}
