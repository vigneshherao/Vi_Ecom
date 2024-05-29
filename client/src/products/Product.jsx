import React from "react";
import { addtoCart } from "../utils/constants/stringConstants";
import { Link } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const Product = ({ productDetail }) => {
  const { price, images, title, _id } = productDetail;
  return (
    <div className="flex flex-col justify-between w-72 min-h-[450px] rounded-lg overflow-hidden shadow-lg p-5 border border-gray-200 m-5 transition-transform duration-200 ease-in-out transform hover:scale-105 hover:shadow-2xl bg-white">
      <Link to={`/product/${_id}`}>
        <img className="w-full h-56 object-cover rounded-t-md" src={images[0]} alt="Product" />
      </Link>
      <div className="px-6 py-4 flex flex-col justify-between flex-grow">
        <div className="font-bold text-lg mb-2 font-serif text-gray-800">{title}</div>
        <p className="text-gray-700 font-mono text-base font-bold mb-4">
          Rs: {price} Only!
        </p>
        <button
          className="w-full mt-2 text-center bg-black text-white font-semibold py-2 rounded-md transition-colors duration-200 hover:bg-gray-800"
          onClick={() => toast.success('Added to cart successfully!')}
        >
          {addtoCart}
        </button>
      </div>
      <Toaster position="bottom-left" reverseOrder={false} />
    </div>
  );
};

export default Product;
