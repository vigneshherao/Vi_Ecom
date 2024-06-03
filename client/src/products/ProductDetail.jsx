import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useProductDetails } from "../utils/hooks/useProductDetails";
import { addProductImage } from "../utils/slice/productSlice";
import { addtoCart, buy } from "../utils/constants/stringConstants";
import Review from "./Review";
import { Toaster } from "react-hot-toast";
import { BiDotsVerticalRounded } from "react-icons/bi";
import toast from 'react-hot-toast';







const ProductDetail = () => {
  const [productOption, setProductOption] = useState(false);
  const productDetail = useSelector((store) => store?.product?.productDetail);
  console.log(productDetail)
  const productImage = useSelector((store) => store?.product?.productImage);
  const { title, description, price, category } = productDetail;
  const dispatch = useDispatch();
  const { id } = useParams();
  useProductDetails(id);

  if (!productDetail) return null;



  const deleteProduct = async (id) => {
    const response = await fetch(
      `http://localhost:8080/product/${id}/delete`,
      {
        method: "DELETE",
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
  };
  

  return (
    <div className="mt-10 sm:m-20 flex flex-col lg:flex-row gap-14 sm:px-28 sm:mb-0 pb-16">
      <div className="lg:w-1/2 flex flex-col items-center gap-6">
        <Toaster position="bottom-left" reverseOrder={true} />
        {productDetail.images && (
          <>
            <img
              src={productImage}
              alt="Product"
              className="w-full h-auto aspect-square object-cover rounded-sm"
            />
            <div className="flex flex-row justify-center gap-2 mt-4">
              {productDetail.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="w-24 h-24 object-cover rounded-sm cursor-pointer"
                  onClick={() => dispatch(addProductImage(image))}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className="lg:w-1/2 flex flex-col gap-4 p-4 lg:p-2 bg-white relative">
        <div>
          <div className="flex justify-between items-center">
            <span className="text-red-700 font-semibold">{category?.name}</span>
            <span className="relative">
              <BiDotsVerticalRounded
                className="cursor-pointer"
                onClick={() => setProductOption(!productOption)}
              />
              {productOption && (
                <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-300 rounded-md shadow-lg z-10">
                  <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => {deleteProduct(productDetail._id)}}>
                    Delete
                  </button>
                  <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => {/* Handle edit */}}>
                    Edit
                  </button>
                </div>
              )}
            </span>
          </div>
          <h1 className="text-3xl font-bold mt-2">{title}</h1>
        </div>
        <p className="text-gray-700 font-light mt-2">{description}</p>
        <h6 className="text-2xl font-semibold mt-4">Rs {price}</h6>
        <div className="flex flex-col lg:flex-row items-center gap-5 mt-4">
          <button className="bg-black text-white font-semibold py-3 px-16 w-full lg:w-auto">
            {addtoCart}
          </button>
          <button className="bg-red-700 text-white font-semibold py-3 px-16 w-full lg:w-auto">
            {buy}
          </button>
        </div>
        <Review productId={id} />
      </div>
    </div>
  );
};

export default ProductDetail;
