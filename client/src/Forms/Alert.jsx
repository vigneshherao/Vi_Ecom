import React from "react";

const Alerts = ({ data }) => {
  let bgColorClass = "bg-red-300";
  if (data === "User Created!") {
    bgColorClass = "bg-green-400";
  }

  return (
    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-[80%] max-w-md mt-5">
      <div className={`rounded-md p-3 ${bgColorClass}`}>
        <div className="text-white mb-4 text-xl flex justify-between items-center font-thin">
          <div className="w-[80%]">{data}</div>
          <div>❌</div>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
