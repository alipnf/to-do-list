import { useState, useEffect } from "react";

export default function TaskList({ list, deleteList, updateList }) {
  const [checkedItems, setCheckedItems] = useState({});
  const [tasks, setTasks] = useState(list);

  // Update tasks when list prop changes
  useEffect(() => {
    setTasks(list);
  }, [list]);

  const handleCheckboxChange = (index) => {
    setCheckedItems({ ...checkedItems, [index]: !checkedItems[index] });
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
                  checked={checkedItems[index] || false}
                  onChange={() => handleCheckboxChange(index)}
                />
                <span
                  style={{
                    textDecoration: checkedItems[index]
                      ? "line-through"
                      : "none",
                  }}
                >
                  {item}
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  className="btn btn-warning  btn-sm"
                  onClick={() => {
                    const newTask = prompt("Enter updated task:", tasks[index]);
                    if (newTask !== null && newTask.trim() !== "") {
                      handleUpdate(index, newTask.trim());
                    }
                  }}
                >
                  Update
                </button>

                <button
                  className="btn btn-error btn-sm"
                  onClick={() => {
                    handleDelete(index);
                  }}
                >
                  Delete
                </button>
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
