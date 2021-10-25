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
      return [
        {
          id: "Workout for 45 minutes_1635131939043",
          name: "Workout for 45 minutes",
          isDone: true,
        },
        {
          id: "Play with kids_1635131914628",
          name: "Play with kids",
          isDone: false,
        },
        {
          id: "Take a nap for 30 minutes_1635131866702",
          name: "Take a nap for 30 minutes",
          isDone: false,
        },
        {
          id: "Stay away from phone for 2 hours_1635131850670",
          name: "Stay away from phone for 2 hours",
          isDone: false,
        },
        {
          id: "Spend quality time with girlfriend_1635131829895",
          name: "Spend quality time with girlfriend",
          isDone: false,
        },
        {
          id: "Read for 30 minutes The Millionaire Next Door_1635131812295",
          name: "Read for 30 minutes The Millionaire Next Door",
          isDone: false,
        },
        { id: "Call Mom_1635131768729", name: "Call Mom", isDone: false },
      ];
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
        name: inputValue.slice(0, 255),
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
      {taskList.length > 5 && (
        <span className="author">
          made with love &#9825; by{" "}
          <a href="https://github.com/bekza">bekzat</a>
        </span>
      )}
    </div>
  );
};

export default App;
