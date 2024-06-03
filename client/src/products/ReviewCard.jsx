import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import toast, { Toaster } from 'react-hot-toast';

const deleteReview = async (rating_id, productId) => {
  try {
    const response = await fetch(
      `http://localhost:8080/product/${productId}/rating/${rating_id}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const result = await response.json();

    if (response.ok) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
  } catch (error) {
    console.error("An error occurred while deleting the review", error);
  }
};

const ReviewCard = ({ data, productId }) => {
  const [productOption, setProductOption] = useState(false);

  return (
    <div className="w-full border rounded-lg overflow-hidden shadow-md bg-white m-1">
      <div className="flex justify-between items-center p-4 border-b border-gray-300">
        <div className="text-gray-500 text-sm">
          {new Date(data.createdAt).toDateString()}
        </div>
        <div className="flex items-center">
          <span className="text-gray-500 cursor-pointer hover:text-gray-700 transition duration-300 ease-in-out">
            <BiDotsVerticalRounded             onClick={() => setProductOption(!productOption)} />
            {productOption && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"onClick={() => deleteReview(data._id, productId)}>
                    Delete
                  </button>
                  <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => {/* Handle edit */}}>
                    Edit
                  </button>
                </div>
              )}
          </span>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-700">{data.comment}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
