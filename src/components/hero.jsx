import { useState } from "react";
import AddTask from "./addTask";
import TaskList from "./taskList";

export default function Hero() {
  const [taskList, setTaskList] = useState([]);
  const addTaskToList = (newTask) => {
    if (newTask != "") {
      return setTaskList([...taskList, newTask]);
    }
  };
  return (
    <div className="min-h-screen bg-base-200 px-6">
      <div className="flex flex-col justify-center">
        <AddTask addTaskToList={addTaskToList} />
        <TaskList list={taskList} />
      </div>
    </div>
  );
}
