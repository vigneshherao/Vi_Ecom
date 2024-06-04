import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { BsCartFill } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { logo } from "../utils/constants/stringConstants";
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"




const Head = () => {
  const [searchState,setSearchState] = useState(false);
  const user = useSelector((store) => store?.user?.userDetail?.user);
  const searchHandle = ()=>{
      setSearchState(!searchState);
      
  }

  return (
    <div className="h-24 bg-white flex justify-between items-center px-[5%] drop-shadow-md">
      <div>
        <h3 className="font-bold text-2xl">{logo}</h3>
      </div>
      <div className="cursor-pointer flex justify-center items-center">
        {searchState ? <input 
  className="mr-10 bg-gradient-to-r from-gray-100 to-gray-200 border border-gray-300 shadow-lg px-4 py-2 w-[300px] rounded-full text-black focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition duration-300 ease-in-out" 
  type="text" 
  placeholder="Search" 
/>
:null}
        <ul className="flex gap-10 pr-5 cursor-pointer">
          <li onClick={searchHandle}>
            <FaSearch />
          </li>
          <li>
          <Link to={"cart"}>  <BsCartFill /></Link>
          
          </li>
          <li>
            <Link to={user?"user":"login"}><FaUser /></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Head;
