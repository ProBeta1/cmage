import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './data/dataReducer'

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk))
)

export default store