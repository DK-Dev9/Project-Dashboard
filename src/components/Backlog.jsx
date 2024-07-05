import { Card } from "./Card";
import { CiCirclePlus } from "react-icons/ci";

export const Backlog = () => {
  const data = [{
    tag: "low",
    title: "read book",
    req: "Bob",
  },{
    tag: "medium",
    title: "Plan project kickoff meeting",
    req: "John",
  }]
  return (
    <>
      <div className="cards h-full">
        <div className="px-4 shadow shadow-green-600 py-1 rounded-md text-green-600 flex items-center justify-between">
          Backlog 
          <CiCirclePlus className=" text-2xl"/>
        </div>

        <div className="rounded-md border p-3 mt-2 h-full bg-gray-100">
          <Card data={data} />
        <p className="text-sm text-center p-4 text-gray-800">Task to be Done</p>
        </div>
      </div>
    </>
  );
};
