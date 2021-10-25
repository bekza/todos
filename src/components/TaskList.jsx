import React from "react";

export default function TaskList({ tasks, handleDone }) {
  return (
    <div className="task-list">
      {tasks.length > 0 && (
        <>
          <h4>In progress {tasks.length} </h4>
          <ul>
            {tasks.map((item) => {
              return (
                <li key={item.id}>
                  {item.name}
                  <span className="add-delete-return-icons">
                    <input
                      className="done-checkbox"
                      type="checkbox"
                      onClick={(event) => handleDone(item)}
                    />
                  </span>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </div>
  );
}
