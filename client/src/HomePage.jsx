import React from "react";
import Categories from "./Categories/Categories";
import Product from "./products/Product";
import useProducts from "./utils/hooks/useProducts";
import "./Categories/c.css";
import { useSelector } from "react-redux";
import Head from "./Header/Head";
import { Toaster } from "react-hot-toast";
import ChatButton from "./Popup/ChatButton";

const HomePage = () => {
  const products = useSelector((store) => store?.product?.products);

  useProducts();

  if (!products || !Array.isArray(products)) return null;

  return (
    <div className="px-[5%] relative"> {/* Added relative class to position ChatPopup */}
      <Head />
      <Toaster position="bottom-left" reverseOrder={true} />
      <Categories />
      <ChatButton />
      <h3 className="font-bold text-2xl ">PRODUCTS</h3>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <Product key={product._id} productDetail={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
