import React, { useState } from "react"
import FullTodoList from "./FullTodoList"

export default function App() {
	let [TodoList, setTodoList] = useState([
		{ id: 1, name: "todo", finished: false },
	])
	return (
		<>
			<FullTodoList TodoList={TodoList} />
			<input type="text" />
			<button>add todo</button>
			<button>clear checked</button>
		</>
	)
}
