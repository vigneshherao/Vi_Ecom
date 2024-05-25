import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useProductDetails } from "../utils/hooks/useProductDetails";
import { addProductImage } from "../utils/slice/productSlice";
import { addtoCart, buy } from "../utils/constants/stringConstants";
import Review from "./Review";
import { Toaster } from "react-hot-toast";

const ProductDetail = () => {
  const productDetail = useSelector((store) => store?.product?.productDetail);
  const productImage = useSelector((store) => store?.product?.productImage);
  console.log(productDetail)
  const { title, description, price, category } = productDetail;
  const dispatch = useDispatch();
  const { id } = useParams();
  useProductDetails(id);

  if (!productDetail) return null;

  return (
    <div className="mt-10 sm:m-20 sm:mt-10 flex px-10 sm:px-28 flex-col justify-between lg:flex-row gap-14 lg:items-center sm:mb-0 pb-16">
      <div className="flex flex-col gap-6 lg:w-2/4">
      <Toaster
  position="bottom-left"
  reverseOrder={true}
/>
        {productDetail.images && (
          <>
            <img
              src={productImage}
              alt=""
              className="w-full h-full aspect-square object-cover rounded-sm"
            />
            <div className="flex flex-row justify-evenly h-24 lg:mb-10">
              {productDetail.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt=""
                  className="w-24 lg:w-full h-24 lg:h-32 lg:m-1 rounded-sm cursor-pointer"
                  onClick={() => dispatch(addProductImage(image))}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="flex flex-col gap-4 lg:w-2/4 bg-gray-200 lg:bg-white p-2">
        <div>
          <span className="text-red-700 font-semibold">{category?.name}</span>
          <h1 className="text-3xl font-bold">{title}</h1>
        </div>
        <p className="text-gray-700 font-light">{description}</p>
        <h6 className="text-2xl font-semibold">Rs {price}</h6>
        <div className="flex flex-col lg:flex-row items-center gap-5">
          <button className="bg-black text-white font-semibold py-3 px-16  h-full w-full">
            {addtoCart}
          </button>
          <button className="bg-red-700 text-white font-semibold py-3 px-16  h-full w-full">
            {buy}
          </button>
        </div>
          <Review productId={id}/>
      </div>
    </div>
  );
};

export default ProductDetail;
