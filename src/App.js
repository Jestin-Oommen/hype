import React from "react";
import SigninPage from "./Pages/SigninPage";
import ProductPage from "./Pages/ProductPage";
import WishlistPage from "./Pages/WishlistPage";
import ProductListingPage from "./Pages/ProductListingPage";
import HomePageWithGender from "./Pages/HomePageWithGender";
import OrderHistoryPage from "./Pages/OrderHistoryPage";
import CartPage from "./Pages/CartPage";
import Homepage from "./Pages/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  // Routing
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/:gender",
      element: <HomePageWithGender />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
    {
      path: "/orderhistory",
      element: <OrderHistoryPage />,
    },
    {
      path: "/products/:gender/:type",
      element: <ProductListingPage />,
    },
    {
      path: "/wishlist",
      element: <WishlistPage />,
    },
    {
      path: "/products/preview/:name/:price",
      element: <ProductPage />,
    },
    {
      path: "/signin",
      element: <SigninPage />,
    },
  ]);

  return (
    <>
     
        <RouterProvider router={router} />
      
      
    </>
  );
}

export default App;
