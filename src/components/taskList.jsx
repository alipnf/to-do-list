import Button from "./button";

export default function TaskList({ list, deleteList, updateList }) {
  const handleChecked = (item) => {
    updateList(item.id, { ...item, complete: !item.complete });
  };

  const handleUpdate = (id) => {};

  const handleDelete = (id) => {
    deleteList(id);
  };

  return (
    <div className="mt-4 lg:mt-6 xl:mt-8 xl:px-[25%]">
      <ul>
        {list.map((item) => (
          <li key={item.id} className="form-control">
            <label className="label flex cursor-pointer justify-between ">
              <div className="flex justify-start gap-3">
                <input
                  type="checkbox"
                  className="checkbox"
                  onChange={() => handleChecked(item)}
                />
                <span
                  style={{
                    textDecoration:
                      item.complete === true ? "line-through" : "none",
                  }}
                >
                  {item.text}
                </span>
              </div>

              <div className="flex gap-2">
                <Button type={"edit"} handle={handleUpdate} />
                <Button type={"delete"} handle={() => handleDelete(item.id)} />
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
