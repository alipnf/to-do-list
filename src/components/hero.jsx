import { useState, useEffect } from "react";
import AddTask from "./addTask";
import TaskList from "./taskList";
import Complete from "./complete";

export default function Hero() {
  const [taskList, setTaskList] = useState([]);
  const addTaskToList = (newTask) => {
    if (newTask.text !== "") {
      return setTaskList([...taskList, newTask]);
    }
  };

  const handleDelete = (index) => {
    const updatedTasks = [...taskList];
    updatedTasks.splice(index, 1);
    setTaskList(updatedTasks);
  };

  const handleUpdate = (index, newValue) => {
    const updatedTasks = [...taskList];
    updatedTasks[index].text = newValue;
    setTaskList(updatedTasks);
  };

  useEffect(() => {}, [taskList]);

  return (
    <div className="min-h-screen bg-base-200 px-6">
      <div className="flex flex-col justify-center">
        <AddTask addTaskToList={addTaskToList} />
        <TaskList
          list={taskList}
          deleteList={handleDelete}
          updateList={handleUpdate}
        />
      </div>

      <Complete list={taskList} />
    </div>
  );
}
