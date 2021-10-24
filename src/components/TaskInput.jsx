import React from 'react'

export default function TaskInput({ handleAdd, inputValue, setInputValue }) {
	return (
		<form className="header" onSubmit={handleAdd}>
			<input
				className="todo-input"
				type="text"
				placeholder="Add a task..."
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)} />
			<button className={`add-button ${inputValue.length > 0 && 'btn-is-visible'}`} type="submit">&#10133;</button>
		</form>
	)
}
