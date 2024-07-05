import { FaWpforms } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { SiAmazonsimpleemailservice } from "react-icons/si";
import { MdOutlineDashboard } from "react-icons/md";
import { MdSpaceDashboard } from "react-icons/md";

import { IoSettingsOutline } from "react-icons/io5";
import { MdAutoFixHigh } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { FaNetworkWired } from "react-icons/fa";
import { SiHotwire } from "react-icons/si";

export const Nav = () => {
  return (
    <>
      <nav className="flex h-14 text-sm text-gray-600 items-center justify-between ">
        <div className="flex gap-5 ">
          <div className="flex items-center border-b-2 border-black">
            <MdSpaceDashboard />
            <select name="" id="">
              <option value="">Kanban</option>
              <option value="">Other</option>
            </select>
          </div>
          <a href="" className="flex gap-2 items-center">
            <TbReportSearch />
            Reports
          </a>
          <a href="" className="flex gap-2 items-center">
            <FaWpforms />
            Form
          </a>
          <a href="" className="flex gap-2 items-center">
            <SiAmazonsimpleemailservice />
            Emails
          </a>
          <a href="" className="flex gap-2 items-center">
            <MdOutlineDashboard />
            Dashboards
          </a>
        </div>
        <div className="flex">
        <div className="flex gap-5 items-center border-r-2 pr-4">
            <form action="#">
                <input type="search" name="srch" id="srch" className="border-2 rounded-3xl px-4 h-7" placeholder="Search Cards.... "/>
            </form>
            <SiHotwire/>
        </div>
        <div className="flex items-center gap-5 pl-4">
          <a href="" className="flex gap-2 items-center"><MdAutoFixHigh/>Automate</a>
          <a href="" className="flex gap-2 items-center"><FaNetworkWired/>Integrate</a>
          <a href=""><TbGridDots/></a>
          <a href=""><IoSettingsOutline/></a>
        </div>
        </div>
      </nav>
    </>
  );
};
