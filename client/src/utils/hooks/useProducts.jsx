import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProducts } from "../slice/productSlice";

const useProducts = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await fetch("http://localhost:8080/");
    const products = await data.json();
    dispatch(addProducts(products));
  };
};

export default useProducts;
