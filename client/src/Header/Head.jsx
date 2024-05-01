import React from "react";
import { FaUser } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { logo } from "../utils/constants/stringConstants";
import { Link } from "react-router-dom";




const Head = () => {
  return (
    <div className="h-24 bg-white flex justify-between items-center px-[5%] drop-shadow-md">
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
            <Link to={"user"}><FaUser /></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Head;
