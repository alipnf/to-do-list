import NewTask from "./newTask";

export default function Hero() {
  return (
    <div className="min-h-screen bg-base-200 px-6">
      <div className="flex justify-center">
        <NewTask />
      </div>
    </div>
  );
}
