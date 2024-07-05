import { Card } from "./Card";

export const Doing = () => {
  const data =  [{
    tag: "medium",
    title: "Conduct risk assessment",
    req: "Frank",
  },{
    tag: "high",
    title: "prepare presentation",
    req: "Dave",
  }];
  return (
    <>
      <div className="cards h-full">
        <div className="px-4 shadow shadow-orange-600 py-1 rounded-md text-orange-600 flex items-center justify-between">
          Doing
        </div>

        <div className="rounded-md border p-3 mt-2 h-full bg-gray-100">
          <Card data={data} />
        <p className="text-sm text-center p-4 text-gray-800">Task being acively workd on</p>
        </div>
      </div>
    </>
  );
};
