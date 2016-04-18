export default actions = {
	addTodo(text) {
		return {
			type: 'Add_TODO',
			text: text
		}
	}
}

store.dispatch(addTodo('some text'))