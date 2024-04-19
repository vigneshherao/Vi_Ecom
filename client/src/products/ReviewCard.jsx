import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";

const ReviewCard = ({ data }) => {


  return (
    <div className="w-full border rounded-lg overflow-hidden shadow-md bg-white m-1">
      <div className="flex justify-between items-center p-4 border-b border-black">
        <div className="text-red-600 text-sm">{new Date(data.createdAt).getFullYear()}</div>
        <div className="flex items-center">
          <span className="text-black cursor-pointer">delete</span>
          <span className="items-center ml-1 cursor-pointer" ><BiDotsVerticalRounded /></span>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-900">{data.comment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
