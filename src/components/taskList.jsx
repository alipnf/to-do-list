import { useState, useEffect } from "react";
import Button from "./button";

export default function TaskList({ list, deleteList, updateList }) {
  const [tasks, setTasks] = useState(list);

  // Update tasks when list prop changes
  useEffect(() => {
    setTasks(list);
  }, [list]);

  const handleCheckboxChange = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status =
      updatedTasks[index].status === "unfinished" ? "complete" : "unfinished";
    setTasks(updatedTasks); // Update tasks
  };

  const handleUpdate = (index, newValue) => {
    updateList(index, newValue);
  };

  const handleDelete = (index) => {
    deleteList(index);
  };
  return (
    <div className="mt-4 lg:mt-6 xl:mt-8 xl:px-[25%]">
      <ul>
        {tasks.map((item, index) => (
          <li key={index} className="form-control">
            <label className="label flex cursor-pointer justify-between ">
              <div className="flex justify-start gap-3">
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={() => handleCheckboxChange(index)}
                />
                <span
                  style={{
                    textDecoration:
                      item.status == "complete" ? "line-through" : "none",
                  }}
                >
                  {item.text}
                </span>
              </div>

              <div className="flex gap-2">
                <Button
                  type={"edit"}
                  index={index}
                  tasks={tasks}
                  handle={handleUpdate}
                />
                <Button
                  type={"delete"}
                  index={index}
                  tasks={tasks}
                  handle={handleDelete}
                />
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
