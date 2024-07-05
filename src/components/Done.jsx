import { Card } from "./Card";

export const Done = () => {
  const data = [{
    tag: "high",
    title: "Assign tasks to team members",
    req: "Dave",
  }];
  return (
    <>
      <div className="cards h-full">
        <div className="px-4 shadow shadow-green-600 py-1 rounded-md text-green-600 flex items-center justify-between">
          Done
        </div>

        <div className="rounded-md border p-3 mt-2 h-full bg-gray-100">
          <Card data={data} />
        <p className="text-sm text-center p-4 text-gray-800">Completed Tasks</p>
        </div>
      </div>
    </>
  );
};
