import { Card } from "./Card";

export const Archive = () => {
  const data = [{
    tag: "high",
    title: "submit report",
    req: "Alice",
  }];
  return (
    <>
      <div className="cards h-full">
        <div className="px-4 shadow shadow-red-600 py-1 rounded-md text-red-600 flex items-center justify-between">
          Archieved
        </div>

        <div className="rounded-md border p-3 mt-2 h-full bg-gray-100">
          <Card data={data} />
        <p className="text-sm text-center p-4 text-gray-800">Unfinished Tasks</p>
        </div>
      </div>
    </>
  );
};
