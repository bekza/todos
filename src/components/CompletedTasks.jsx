import React from 'react'

export default function CompletedTasks({ completedTasks, setIsHideCompleted, isHideCompleted, handleDelete }) {
    return (
        <div className="completed-tasks">
            {completedTasks.length > 0 && (
                <>
                    <h4>Completed {completedTasks.length} <button className="show-hide" onClick={() => setIsHideCompleted(!isHideCompleted)}>{isHideCompleted ? 'Show' : 'Hide'}</button></h4>
                    {!isHideCompleted && <ul>
                        {completedTasks.map((item) => {
                            return (
                                <li key={item.id}>
                                    {item.name}
                                    <span>
                                        <button className="delete-button" onClick={() => handleDelete(item)}>&#10060;</button>
                                    </span>
                                </li>
                            )
                        })}
                    </ul>
                    }
                </>)}
        </div>
    )
}
