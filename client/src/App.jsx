import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Head from "./Header/Head";
import Footer from "./Footer/Footer";
import ProductDetail from "./products/ProductDetail";

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
