import React, { useEffect, useState } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await fetch("http://localhost:8080/");
    const products = await data.json();
    setProducts(products);
  };
  return products;
};

export default useProducts;
