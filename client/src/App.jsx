import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Head from "./Header/Head";
import Footer from "./Footer/Footer";
import ProductDetail from "./products/ProductDetail";
import Create from "./Forms/Create";
import AddProducts from "./Forms/AddProducts";
import Account from "./User/Account"
import Product from "./products/Product";
import CategoriesItems from "./Categories/CategoriesItems";


function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/product/:id",
      element: <ProductDetail/>,
    },
    {
      path: "/category/:id",
      element: <CategoriesItems/>,
    },
    {
      path: "/login",
      element: <Create/>,
    },
    {
      path: "/user",
      element: <Account/>,
    },
    {
      path: "/add",
      element: <AddProducts/>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
      <Footer/>
    </div>
  );
}

export default App;
