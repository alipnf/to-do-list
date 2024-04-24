import { useState, useEffect } from "react";

export default function Complete({ list }) {
  const [completeList, setCompleteList] = useState(0);

  useEffect(() => {
    const completeCount = list.filter(
      (item) => item.status === "complete",
    ).length;
    setCompleteList(completeCount);
  }, [list]);

  return (
    <div className="mt-4 lg:mt-6 xl:mt-8">
      <h1 className="mb-5 text-center text-lg font-bold md:text-base xl:text-xl">
        Complete ({completeList} / {list.length})
      </h1>
    </div>
  );
}
