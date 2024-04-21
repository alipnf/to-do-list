import { useState } from "react";

export default function TaskList({ list }) {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheckboxChange = (index) => {
    setCheckedItems({ ...checkedItems, [index]: !checkedItems[index] });
  };

  return (
    <div className="mt-4">
      <ul>
        {list.map((item, index) => (
          <li key={index} className="form-control">
            <label className="label flex cursor-pointer justify-start gap-3">
              <input
                type="checkbox"
                className="checkbox"
                checked={checkedItems[index] || false}
                onChange={() => handleCheckboxChange(index)}
              />
              <span
                style={{
                  textDecoration: checkedItems[index] ? "line-through" : "none",
                }}
              >
                {item}
              </span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
