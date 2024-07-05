import { Hold } from "./Hold";
import { Doing } from "./Doing";
import { Backlog } from "./Backlog.jsx"
import { Done } from "./Done";
import { Archive } from "./Archieved";

export const Hero = () => {
    return (
        <div className="flex gap-2">
        <Backlog/>
        <Doing/>
        <Hold/>
        <Done/>
        <Archive/>
        <div >
          <p className="text-gray-400 pt-2"> + New Phase</p>
        </div>
      </div>
    )
}