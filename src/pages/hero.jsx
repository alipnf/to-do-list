import { useState } from "react";
import AddTask from "../components/addTask";
import TaskList from "../components/taskList";
import Complete from "../components/complete";

export default function Hero() {
  const [taskList, setTaskList] = useState([]);

  const addTaskToList = (newTask) => {
    setTaskList([...taskList, newTask]);
  };

  const handleDelete = (id) => {
    setTaskList((taskList) => taskList.filter((item) => item.id != id));
  };

  const handleUpdate = (id, update) => {
    setTaskList((items) =>
      items.map((item) => (item.id === id ? update : item)),
    );
  };

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
