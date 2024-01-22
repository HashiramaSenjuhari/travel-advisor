import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Avatar from "@mui/material/Avatar";

const Header = () => {
  return (
    <div className="w-full lg:h-full border-b-2 border-gray-100 flex">
      <div className="w-[50%]"></div>
      <div className="w-[50%] h-full flex justify-around items-center ">
        <div className="px-2 w-80 border flex justify-between items-center gap-x-3 rounded-xl bg-white border-slate-300">
          <SearchIcon
            sx={{
              color: "#454545",
            }}
          />
          <input
            type="text "
            placeholder="Search"
            className=" flex-1 outline-none py-2"
          />
        </div>
        <Avatar
          sx={{
            bgcolor: "black",
          }}
        >
          H
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
