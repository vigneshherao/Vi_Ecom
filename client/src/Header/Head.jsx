import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { logo } from "../utils/constants/stringConstants";
import { Link } from "react-router-dom";




const Head = () => {
  const [searchState,setSearchState] = useState(false);
  const searchHandle = ()=>{
      setSearchState(!searchState);
      
  }

  return (
    <div className="h-24 bg-white flex justify-between items-center px-[5%] drop-shadow-md">
      <div>
        <h3 className="font-bold text-2xl">{logo}</h3>
      </div>
      <div className="cursor-pointer flex justify-center items-center">
        {searchState ? <input className="mr-10 bg-white border shadow-md px-3 py-1 w-[300px] rounded-r-full rounded-l-full" type="text" placeholder="Search"/>:null}
        <ul className="flex gap-10 pr-5 cursor-pointer">
          <li onClick={searchHandle}>
            <FaSearch />
          </li>
          <li>
          <Link to={"cart"}>  <BsCartFill /></Link>
          
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
