import React from "react";
import { FaUser } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { logo } from "../utils/constants/stringConstants";

const Head = () => {
  return (
    <div className="h-20 bg-white flex justify-between items-center px-[5%] shadow-lg">
      <div>
        <h3 className="font-bold text-2xl">{logo}</h3>
      </div>
      <div>
        <ul className="flex gap-10 pr-5 cursor-pointer">
          <li>
            <FaSearch />
          </li>
          <li>
            <BsCartFill />
          </li>
          <li>
            <FaUser />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Head;
