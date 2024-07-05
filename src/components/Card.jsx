import { BiAt } from "react-icons/bi";

export const Card = ({data}) => {
  return (
    <>
    {

        data.map(item=>(
            <div className="border rounded-md p-3 bg-white">
                <button className={`rounded-full px-2 text-xs ${item.tag === "low" && "bg-gray-200"} ${item.tag === "high" && "bg-red-300" } ${item.tag === "medium"&&"bg-orange-500"}`}>
                    {item.tag}
                </button>
                <h2 className="font-bold">{item.title}</h2>
                <div className="flex items-center gap-2 ">
                    <BiAt className="text-2xl text-gray-600" />
                    <div>
                    <p className="text-xs">REQUESTER NAME</p>
                    {item.req}
                    </div>
                </div>
            </div>
        ))
    }
    </>
  );
};
