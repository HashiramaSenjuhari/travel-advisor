import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Link } from "react-router-dom";


const selectedButton = 'New'

const SideBarComponent = ({ name, icon, link ,id}) => {
  return (
    <>
      <Link  to={link} key={id}>
        <button className="group w-full p-4 border-b flex items-center justify-between hover:border-r-4 hover:border-l-0 hover:border-t-0 hover:border-r-purple-500
        " style={{borderRight:id===selectedButton && '4px solid #A855F7'}}>
          <div className="flex items-center gap-x-2 group-hover:text-purple-600 transition-all">
            <div>{icon}</div>
            <h2
              className="font-semibold text-slate-700 group-hover:text-purple-500"
            >
              {name}
            </h2>
          </div>
          <span className=" opacity-0 group-hover:opacity-100 group-hover">
            <ArrowForwardIcon />
          </span>
        </button>
      </Link>
    </>
  );
};

export default SideBarComponent;
