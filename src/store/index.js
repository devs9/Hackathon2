import createSagaMiddleware from 'redux-saga'
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createHistory from 'history/createBrowserHistory'
import reducers from './reducers'
import { rootSaga } from './sagas'

const history = createHistory()
const sagaMiddleware = createSagaMiddleware()
const middlewareRouter = routerMiddleware(history)
const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware, middlewareRouter))
)

sagaMiddleware.run(rootSaga)
export { store, history }
