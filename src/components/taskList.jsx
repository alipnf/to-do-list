export default function TaskList({ list }) {
  return (
    <div className="mt-4">
      <ul>
        {list.map((item, index) => (
          <li key={index} className="form-control">
            <label className="label flex cursor-pointer justify-start gap-3">
              <input type="checkbox" className="checkbox" />
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
