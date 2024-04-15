import Categories from "./Categories/Categories";
import Product from "./products/Product";
import useProducts from "./utils/hooks/useProducts";
import "./Categories/c.css";
const HomePage = () => {
  const products = useProducts();

  return (
    <div className="px-[5%]">
      <Categories/>
      <h3 className="font-bold text-2xl ">PRODUCTS</h3>
      <div className="flex flex-wrap justify-center">
        {products.map((product) => {
          return <Product key={product.id} productDetail={product} />;
        })}
      </div>
    </div>
  );
};

export default HomePage;
