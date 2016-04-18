import { createStore } from 'redux'
import reducer from './reducer'

//TODO :add middleware

export default function configureStore (initialState = {todos: [] }) {

	return createStore(reducer, initialState)
}