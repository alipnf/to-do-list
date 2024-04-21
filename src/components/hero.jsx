import AddTask from "./addTask";

export default function Hero() {
  return (
    <div className="min-h-screen bg-base-200 px-6">
      <div className="flex justify-center">
        <AddTask />
      </div>
    </div>
  );
}
