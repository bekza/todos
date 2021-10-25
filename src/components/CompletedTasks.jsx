import React from "react";

export default function CompletedTasks({
  completedTasks,
  handleDelete,
  handleRecover,
  setIsShowCompleted,
  isShowCompleted,
}) {
  return (
    <div className="completed-tasks">
      {completedTasks.length > 0 && (
        <>
          <h4>
            Completed {completedTasks.length}{" "}
            <button
              className="show-hide"
              onClick={() => setIsShowCompleted(!isShowCompleted)}
            >
              {isShowCompleted ? "Hide" : "Show"}
            </button>
          </h4>
          {isShowCompleted && (
            <ul>
              {completedTasks.map((item) => {
                return (
                  <li key={item.id}>
                    {item.name}
                    <span className="add-delete-return-icons">
                      <button
                        className="completed-task-icons"
                        id="put-back-icon"
                        onClick={() => handleRecover(item)}
                      >
                        ⤴
                      </button>
                      <button
                        className="completed-task-icons"
                        onClick={() => handleDelete(item)}
                      >
                        &#10060;
                      </button>
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </>
      )}
    </div>
  );
}
