import { useEffect } from "react";
import { addProductDetail, addProductImage } from "../slice/productSlice";
import { useDispatch } from "react-redux";

export const useProductDetails = (id) => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchProductDetail();
  }, []);

  const fetchProductDetail = async () => {
    const data = await fetch(`http://localhost:8080/product/${id}`);
    const productDetails = await data.json();
    dispatch(addProductDetail(productDetails));
    dispatch(addProductImage(productDetails.images[0]));
  };
};
