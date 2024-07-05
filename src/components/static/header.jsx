import { AiOutlineSketch } from "react-icons/ai";
import { MdOutlineRecentActors } from "react-icons/md";
import { FaRegShareFromSquare } from "react-icons/fa6";
import { MdHistory } from "react-icons/md";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaRegQuestionCircle } from "react-icons/fa";

export const Header = () => {
    return (
        <>
        <header className=" flex gap-10 h-12 items-center border-y-2">
            <h1 className="font-bold font-mono">tasks.</h1>
            <div className="flex justify-between w-10/12 border-x-2 px-4">
                <div className="flex items-center">
                    <span><AiOutlineSketch className="text-red-400 "/></span>
                    <h1 className="font-bold">Team Task Management</h1>
                </div>
                <div className="flex gap-5 items-center">
                    <a className="flex items-center gap-1"><FaRegShareFromSquare/>Share</a>
                    <a className="flex items-center gap-1"><MdOutlineRecentActors/>Members</a>
                    <a><MdHistory/></a>
                    <a><IoNotificationsOutline/></a>
                    <a><FaRegQuestionCircle/></a>
                </div>
            </div>
        </header>
        
        </>
    )
}