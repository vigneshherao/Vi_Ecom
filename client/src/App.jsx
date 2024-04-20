import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Head from "./Header/Head";
import Footer from "./Footer/Footer";
import ProductDetail from "./products/ProductDetail";
import Create from "./Forms/Create";
import Cart from "./Cart/Cart";
import Banner from "./Banner/Banner";


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
      path: "/login",
      element: <Create/>,
    },
  ]);

  return (
    <div>
      <Head />
      <RouterProvider router={appRouter} />
      <Footer/>
    </div>
  );
}

export default App;
