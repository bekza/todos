import React from "react";

export default function TaskInput({
  handleAdd,
  inputValue,
  setInputValue,
  errorMessage,
}) {
  return (
    <>
      <h3>Tasks</h3>
      <form className="header" onSubmit={handleAdd}>
        <input
          className="todo-input"
          type="text"
          placeholder="Add a task..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="add-button" type="submit">
          &#10133;
        </button>
      </form>
      {errorMessage.length > 0 && (
        <span className="validate">{errorMessage}</span>
      )}
    </>
  );
}
