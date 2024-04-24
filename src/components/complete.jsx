export default function Complete({ list }) {
  return (
    <div className="mt-4 lg:mt-6 xl:mt-8">
      <h1 className="mb-5 text-center text-lg font-bold md:text-base xl:text-xl">
        Complete ({list.length})
      </h1>
    </div>
  );
}
