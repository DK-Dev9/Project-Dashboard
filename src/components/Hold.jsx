import { Card } from "./Card";

export const Hold = () => {
  const data = [{
    tag: "low",
    title: "read article",
    req: "Bob",
  },{
    tag: "high",
    title: "Prepare project status report",
    req: "Grace",
  }];
  return (
    <>
      <div className="cards h-full">
        <div className="px-4 shadow shadow-blue-600 py-1 rounded-md text-blue-600 flex items-center justify-between">
          On Hold
        </div>

        <div className="rounded-md border p-3 mt-2 h-full bg-gray-100">
          <Card data={data} />
        <p className="text-sm text-center p-4 text-gray-800">Paused activities to be resumed</p>
        </div>
      </div>
    </>
  );
};
