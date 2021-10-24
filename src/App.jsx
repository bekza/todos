import React, { useState, useEffect } from "react";
import { generateKey } from "./utils/utils";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import CompletedTasks from "./components/CompletedTasks";
import "./App.css";

const App = () => {
  const [inputValue, setInputValue] = useState("");
  const [isHideCompleted, setIsHideCompleted] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
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

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("completedTasks", JSON.stringify(completedTasks));

    // set `isHideCompleted` true if no more completed tasks
    if (completedTasks.length < 1) {
      setIsHideCompleted(true);
    }
  }, [tasks, completedTasks]);

  const handleAdd = (event) => {
    event.preventDefault();

    if (inputValue.length < 1) {
      setErrorMessage("Please add a task...");
      return;
    }

    setTasks([
      {
        id: generateKey(inputValue),
        name: inputValue,
      },
      ...tasks,
    ]);
    // reset input and errorMessage after add
    setErrorMessage("");
    setInputValue("");
  };

  const handleDelete = (item) => {
    const task = completedTasks.filter((task) => task.id !== item.id);
    setCompletedTasks(task);
  };

  const handleDone = (item) => {
    const moveTaskToDone = tasks.filter((task) => task.id === item.id);
    setCompletedTasks([...completedTasks, ...moveTaskToDone]);

    const updateTasks = tasks.filter((task) => task.id !== item.id);
    setTasks(updateTasks);
  };

  const handleRecover = (item) => {
    const itemToRecover = completedTasks.filter((task) => task.id === item.id);
    setTasks([...tasks, ...itemToRecover]);

    const updateCompletedTasks = completedTasks.filter(
      (task) => task.id !== item.id
    );
    setCompletedTasks(updateCompletedTasks);
  };

  return (
    <div className="App">
      <div className="todo">
        <TaskInput
          handleAdd={handleAdd}
          inputValue={inputValue}
          setInputValue={setInputValue}
          errorMessage={errorMessage}
        />
        <TaskList tasks={tasks} handleDone={handleDone} />
        <CompletedTasks
          completedTasks={completedTasks}
          setIsHideCompleted={setIsHideCompleted}
          isHideCompleted={isHideCompleted}
          handleDelete={handleDelete}
          handleRecover={handleRecover}
        />
      </div>
    </div>
  );
};

export default App;
