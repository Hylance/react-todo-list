import React, {Component} from 'react'
import TodoInput from './TodoInput' 

class App extends Component {

	render() {
		return (
			<div>
				<h1> To do list</h1>
				<TodoInput/>
			</div>
		)
	}

}

export default App
