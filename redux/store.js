import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducer'
import logger from 'redux-logger'

//TODO :add middleware
let finalCreateStore = compose (
	applyMiddleware(logger())
)(createStore)

export default function configureStore (initialState = {todos: [], user: {} }) {

	return finalCreateStore(rootReducer, initialState)
}