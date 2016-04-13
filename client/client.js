import React from 'react'
import {render} from 'react-dom' // var render = require('react-dom').render
import App from '../components/App'

render(
	// define the encompassing component
	// Dom element we want to mount it to
	<App/>,
	document.getElementById('app')

)

