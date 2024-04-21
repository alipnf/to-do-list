export default function NewTask() {
  return (
    <form className="mt-3 flex items-center gap-3">
      <input
        type="text"
        placeholder="your task"
        className="input input-bordered input-primary w-full max-w-xs"
      />
      <button className="btn btn-primary" type="submit">
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
  );
}
