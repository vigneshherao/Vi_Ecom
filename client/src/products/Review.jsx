import React, { useRef } from "react";
import { useSelector } from "react-redux";
import ReviewCard from "./ReviewCard";
import toast, { Toaster } from 'react-hot-toast';

const Review = ({ productId }) => {
  const { ratings } = useSelector((store) => store?.product?.productDetail);
  const ratingInput = useRef(null);
  const commentInput = useRef(null);

  const handleReview = async (e) => {
    e.preventDefault();
    const rating = ratingInput.current.value;
    const comment = commentInput.current.value;

    try {
      const response = await fetch(
        `http://localhost:8080/product/${productId}/rating`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ rating, comment }),
        }
      );

      if (!response.ok) {
        const responseData = await response.json();
        toast.error(responseData.message || "Something went wrong.");
        return;
      }

      toast.success("Review submitted successfully!");
    } catch (error) {
      toast.error("Network error. Please try again later.");
    }
  };

  if (!ratings) {
    return null;
  }

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Rate and Review Product</h2>
      <form onSubmit={handleReview}>
        <div className="flex flex-col mb-4">
          <label htmlFor="rating" className="mb-1">Rate</label>
          <input
            ref={ratingInput}
            className="w-full"
            type="range"
            min="1"
            max="5"
            id="rating"
            name="rating"
          />
          <span className="text-sm text-gray-500">{ratingInput.current?.value}/5</span>
        </div>
        <div className="flex flex-col mb-4">
          <label htmlFor="comment" className="mb-1">Review</label>
          <textarea
            ref={commentInput}
            className="border w-full p-2 rounded-md"
            type="text"
            placeholder="Write your review..."
            id="comment"
            name="comment"
          ></textarea>
        </div>
        <button className="bg-black text-white py-2 px-4 rounded-md" type="submit">
          Submit
        </button>
      </form>
      <div className="mt-4">
        <h3 className="text-lg font-semibold mb-2">Recent Reviews</h3>
        {ratings.map((rating) => (
          <ReviewCard key={rating._id} data={rating} />
        ))}
      </div>
    </div>
  );
};

export default Review;
