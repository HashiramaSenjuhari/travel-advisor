import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const HeroSkeleton = ({ buttonDetail, header, id }) => {
  return (
    <div className="w-[98%] h-[95%] bg-white rounded-2xl shadow-md" key={id}>
      <div className="w-[100%] h-[24%] bg border-b flex flex-col justify-center pl-7 gap-y-3">
        <h2 className="text-[20px] font-semibold ml-4">{header}</h2>
        <div className="flex gap-x-3">
          {buttonDetail?.map((detail) => (
            <Link to={detail.to} key={detail.to}>
              <button className=" bg-slate-200 px-5 py-3 text-[14px] rounded-3xl font-semibold text-slate-700 hover:bg-stone-800 hover:text-slate-200 transition-all focus:bg-stone-800 focus:text-slate-200">
                {detail.name}
              </button>
            </Link>
          ))}
        </div>
      </div>
      <div className="w-[100%] h-[76%]  flex items-center pl-5">
        <Routes>
          {buttonDetail?.map((detail) => (
              <Route path={detail.to} element={detail.element} key={detail.to} />
          ))}
        </Routes>
      </div>
    </div>
  );
};

export default HeroSkeleton;
