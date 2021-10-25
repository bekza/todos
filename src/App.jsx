import React, { useState, useEffect, useMemo } from "react";
import { generateKey } from "./utils/utils";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import CompletedTasks from "./components/CompletedTasks";
import "./App.css";

const App = () => {
  const getDataFromLocalStorage = () => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      return JSON.parse(savedTasks);
    } else {
      return [];
    }
  };
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [tasks, setTasks] = useState(getDataFromLocalStorage);
  const [isShowCompleted, setIsShowCompleted] = useState(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAdd = (event) => {
    event.preventDefault();

    if (inputValue.length < 1) {
      setErrorMessage("Input must be filled out");
      return;
    }

    setTasks([
      {
        id: generateKey(inputValue),
        name: inputValue,
        isDone: false,
      },
      ...tasks,
    ]);
    // reset input and errorMessage after add
    setErrorMessage("");
    setInputValue("");
  };

  const handleDone = (item) => {
    let updateTasks = [...tasks];
    updateTasks.forEach((task) => {
      if (item.id === task.id) {
        task.isDone = true;
      }
    });
    setTasks(updateTasks);
  };

  const handleDelete = (item) => {
    const updateTasks = tasks.filter((task) => task.id !== item.id);
    setTasks(updateTasks);
  };

  const handleRecover = (item) => {
    let updateTasks = [...tasks];
    tasks.forEach((task) => {
      if (task.id === item.id) {
        task.isDone = false;
      }
    });

    setTasks(updateTasks);
  };

  const taskList = useMemo(() => {
    return tasks.filter((item) => item.isDone === false);
  }, [tasks]);

  const completedTaskList = useMemo(() => {
    return tasks.filter((item) => item.isDone === true);
  }, [tasks]);

  return (
    <div className="App">
      <div className="todo">
        <TaskInput
          handleAdd={handleAdd}
          inputValue={inputValue}
          setInputValue={setInputValue}
          errorMessage={errorMessage}
        />
        <TaskList tasks={taskList} handleDone={handleDone} />
        <CompletedTasks
          completedTasks={completedTaskList}
          handleDelete={handleDelete}
          handleRecover={handleRecover}
          isShowCompleted={isShowCompleted}
          setIsShowCompleted={setIsShowCompleted}
        />
      </div>
    </div>
  );
};

export default App;
