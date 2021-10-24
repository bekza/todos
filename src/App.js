import React, { useState, useEffect } from 'react';
import { generateKey } from './utils/utils';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import CompletedTasks from './components/CompletedTasks';
import './App.css';

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [isHideCompleted, setIsHideCompleted] = useState(true);
  const [completedTasks, setCompletedTasks] = useState(() => {
    const savedCompletedTasks = localStorage.getItem("completedTasks");
    if (savedCompletedTasks) {
      return JSON.parse(savedCompletedTasks);
    } else {
      return [];
    }
  });
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  });


  const handleAdd = (event) => {
    event.preventDefault();
    if (inputValue.length > 0) {
      setTasks([
        ...tasks,
        {
          id: generateKey(inputValue),
          name: inputValue,
          isDone: false,
        }
      ]);
      // reset input after add
      setInputValue('');
    }
  }

  const handleDelete = (item) => {
    const task = completedTasks.filter(task => task.id !== item.id);
    setCompletedTasks(task);
  };

  const handleDone = (item) => {
    const completedTask = tasks.filter(task => task.id === item.id);
    setCompletedTasks([...completedTasks, ...completedTask]);

    const updateTasks = tasks.filter(task => task.id !== item.id);
    setTasks(updateTasks);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
  }, [tasks, completedTasks]);

  return (
    <div className="todo">
      <TaskInput handleAdd={handleAdd} inputValue={inputValue} setInputValue={setInputValue} />
      <TaskList tasks={tasks} handleDone={handleDone} />
      <CompletedTasks completedTasks={completedTasks} setIsHideCompleted={setIsHideCompleted} isHideCompleted={isHideCompleted} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
