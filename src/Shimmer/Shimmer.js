import React from "react";

const Shimmer = () => {
  return (
    <div className="shimmer-card flex flex-wrap w-[300px] m-2.5 rounded-xl shadow-xl p-1 h-[300px]">
      <div className="w-[250px] h-4  bg-slate-200 my-1 mx-auto rounded-xl shimmmer-card"></div>
      <div className="w-[250px] h-[200px] rounded-xl  bg-slate-200 mx-auto"></div>
      <div className="card-footer flex flex-col mx-auto ">
        <div className="w-[250px] h-2  bg-slate-200 my-1 shimmmer-card"></div>
        <div className="w-[200px] h-2  bg-slate-200  my-1 shimmmer-card"></div>
        <div className="w-[150px] h-2  bg-slate-200  my-1 shimmer-card"></div>
      </div>
    </div>
  );
};

export default Shimmer;
