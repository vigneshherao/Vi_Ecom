import React, { useRef } from "react";
import { useSelector } from "react-redux";
import ReviewCard from "./ReviewCard";

const Review = ({ productId }) => {
  const {ratings} = useSelector((store) => store?.product?.productDetail);
  const ratingInput = useRef(null);
  const commentInput = useRef(null);

  const handleReview = async (e) => {
    const rating = ratingInput.current.value;
    const comment = commentInput.current.value;
    e.preventDefault();
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
  };

  if(!ratings){
    return;
  }

  return (
    <div className="bg-gray-100 p-2">
      <div>
        <h2 className="font-thin text-black">Rate And Review Product</h2>
        <form onSubmit={handleReview}>
          <label>Rate</label>
          <input
            ref={ratingInput}
            className="w-full"
            type="range"
            min="1"
            max="5"
            id="rating"
            name="rating[rating]"
          ></input>
          <br />
          <label>Review</label>
          <br></br>
          <textarea
            ref={commentInput}
            className="border w-full p-2"
            type="text"
            placeholder="Give a review..."
            id="comment"
            name="rating[comment] "
          ></textarea>
          <button className="bg-black text-white p-2  mt-2" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div>
        {
          ratings.map((rating)=><ReviewCard key={rating._id} data={rating}/>)
        }
      </div>
    </div>
  );
};

export default Review;
