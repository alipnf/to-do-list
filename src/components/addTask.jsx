import { useState } from "react";

export default function AddTask({ addTaskToList }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) return;
    const newTask = { text: description, complete: false, id: Date.now() };
    addTaskToList(newTask);
    setDescription("");
  };

  return (
    <div>
      <form
        className="mt-4 flex w-full items-center justify-center gap-3 md:mt-5 lg:mt-8 lg:justify-between xl:px-[25%]"
        onSubmit={handleSubmit}
      >
        <input
          value={description}
          type="text"
          placeholder="your task"
          className="input input-sm input-bordered input-primary w-full max-w-xl md:input-md xl:input-lg"
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          className="btn btn-primary btn-sm md:btn-md xl:btn-lg"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2rem"
            height="1.2rem"
            viewBox="0 0 16 16"
          >
            <path
              fill="currentColor"
              d="M15.5 6H10V.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5V6H.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5H6v5.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5V10h5.5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5"
            />
          </svg>
          Add task
        </button>
      </form>
    </div>
  );
}
