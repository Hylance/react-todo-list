import React from 'react'
import {render} from 'react-dom' // var render = require('react-dom').render
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

let initialState = {
	todos: [{
		id: 0,
		completed: false,
		text: 'Initial todo for demo purposes'
	}]
}

let store = configureStore(initialState)


//configure and create our store
//var store = createStore(reducer, initialState)

render(
	// define the encompassing component
	// Dom element we want to mount it to
	<Provider store = {store}>
	<App/>
	</Provider>,
	document.getElementById('app')

)

