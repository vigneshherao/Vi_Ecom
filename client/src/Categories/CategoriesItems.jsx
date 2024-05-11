import React from "react";
import useProducts from "../utils/hooks/useProducts";
import { useSelector } from "react-redux";
import Product from "../products/Product";
import { useParams } from "react-router-dom";

const CategoriesItems = () => {
  const { id } = useParams();

  const products = useSelector((store) => store?.product?.products);

  useProducts();

  if (!products) {
    return;
  }

  const filteredProducts = products.filter(
    (product) => product.category.id === parseInt(id)
  );

  return (
    <div className="px-[5%]">
      <h3 className="font-bold text-2xl ">{filteredProducts[0].category.name}</h3>
      <div className="flex flex-wrap justify-center">
        {filteredProducts.map((product) => (
          <Product key={product._id} productDetail={product} />
        ))}
      </div>
    </div>
  );
};

export default CategoriesItems;
