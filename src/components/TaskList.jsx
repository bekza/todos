import React from 'react'

export default function TaskList({ tasks, handleDone }) {
  return (
    <div className="list">
      {tasks.length > 0 && (
        <ul>
          {
            tasks.map((item) => {
              return (
                <li key={item.id}>
                  {item.name}
                  <input className="done-checkbox" type="checkbox" onClick={(event) => handleDone(item)} />
                </li>)
            })
          }
        </ul>
      )
      }
    </div>
  )
}
