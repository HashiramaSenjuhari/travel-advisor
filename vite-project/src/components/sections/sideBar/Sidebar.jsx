import React from "react";
import Logo from "../../../assets/logo.svg";
import SideBarComponent from "./SideBarButton";
import PlaceIcon from "@mui/icons-material/Place";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import ReportIcon from '@mui/icons-material/Report';
import SettingsIcon from '@mui/icons-material/Settings';

const iconStyle = { width: '20px' }

const Basic = [
  {
    id: 1,
    name: "Place",
    icon: <PlaceIcon sx={iconStyle} />,
    to:'/place'
  },
  {
    id: 2,
    name: "Food",
    icon: <FastfoodIcon sx={iconStyle} />,
    to:'/food'
  },
  {
    id: 3,
    name: "Favorites",
    icon: <FavoriteBorderIcon sx={iconStyle} />,
    to:'/fav'
  },
]

const Support = [
  {
    id: 4,
    name: "Help",
    icon: <QuestionAnswerIcon sx={iconStyle} />,
    to:'/help'
  },
  {
    id: 5,
    name: "Report",
    icon: <ReportIcon sx={iconStyle} />,
    to:'/report'
  },
  {
    id: 6,
    name: "Setting",
    icon: <SettingsIcon sx={iconStyle} />,
    to:'/setting'
  },
]

const Sidebar = () => {
  return (
    <div className="w-[18vw] h-[100%] border-r border-gray-300 shadow-lg shadow-slate-50 flex flex-col antialiased">
      <div className="p-5 flex items-center border-slate-100">
        <img src={Logo} alt="" />
      </div>
      <div className="h-full w-full flex flex-col gap-y-4">
        {/*  */}
        <div className="flex flex-col">
          <div className=" p-2 pl-5">
            <h2 className="font-semibold text-slate-500">Basic</h2>
          </div>
          <div>
            {Basic.map((detail) => (
              <SideBarComponent key={detail.id} icon={detail.icon} name={detail.name}  link={detail.to}/>
            ))}
          </div>
        </div>
        {/*  */}
        <div className="flex flex-col">
          <div className=" p-2 pl-5">
            <h2 className="font-semibold text-slate-500">Support</h2>
          </div>
          <div>
            {Support.map((detail) => (
              <SideBarComponent key={detail.id} icon={detail.icon} name={detail.name} link={detail.to} />
            ))}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
