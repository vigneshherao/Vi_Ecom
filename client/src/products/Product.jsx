import React from "react";
import { addtoCart } from "../utils/constants/stringConstants";

const Product = ({ productDetail }) => {
  const { price, images, title } = productDetail;
  return (
    <div className="flex flex-col  justify-between w-72 min-h-[450px] rounded overflow-hidden shadow-lg p-5 m-5 transition-transform duration-200 ease-in-out transform hover:scale-95 sm:hover:scale-105">
      <img className="w-[100%]  rounded-sm" src={images[0]} alt="Product" />
      <div className="px-6 py-4">
        <div className="font-bold text-sm  mb-2 font-serif">{title}</div>
        <p className="text-gray-700 font-mono text-base font-bold">
          Rs: {price} Only!
        </p>
        <button className="w-full mt-2 text-center bg-black text-white font-semibold p-1 hover:bg-gray-300 hover:text-black">
          {addtoCart}
        </button>
      </div>
    </div>
  );
};

export default Product;
