import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Components/About/About";
import AddProducts from "./Components/AddProducts/AddProducts";
import CartPage from "./Components/CartPage/CartPage";
import HeadPhone from "./Components/Categories/HeadPhone/HeadPhone";
import SingleHeadphone from "./Components/Categories/HeadPhone/SingleHeadphone";
import Router from "./Components/Categories/Router/Router";
import VideoPlayer from "./Components/Categories/VideoPlayer/VideoPlayer";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import Home from "./Components/Home/Home";
import MainHeader from "./Components/Layout/MainHeader";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Signup from "./Components/Signup/Signup";
import WishList from "./Components/WishList/WishList";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <MainHeader></MainHeader>,
      children: [
        {
          path: "/home",
          element: <Home></Home>,
          children: [
            {
              path: "/home/headPhone",
              loader: async () => {
                return fetch(
                  "https://electronic-gadgets-server.vercel.app/products/HeadPhone"
                );
              },
              element: <HeadPhone></HeadPhone>,
            },
            {
              path: "/home/router",
              loader: async () => {
                return fetch(
                  "https://electronic-gadgets-server.vercel.app/products/Router"
                );
              },
              element: <Router></Router>,
            },
            {
              path: "/home/router/:id",
              loader: async ({ params }) => {
                return fetch(``);
              },
              element: <Router></Router>,
            },
            {
              path: "/home/videoPlayer",
              element: <VideoPlayer></VideoPlayer>,
            },
          ],
        },
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <Signup></Signup>,
        },
        {
          path: "/addProducts",
          element: (
            <PrivateRoute>
              <AddProducts></AddProducts>
            </PrivateRoute>
          ),
        },
        {
          path: "/cartPage",
          loader: async () => {
            return fetch(
              "https://electronic-gadgets-server.vercel.app/cartpage"
            );
          },
          element: (
            <PrivateRoute>
              <CartPage></CartPage>
            </PrivateRoute>
          ),
        },
        {
          path: "/product/:id",
          loader: async ({ params }) => {
            return fetch(
              `https://electronic-gadgets-server.vercel.app/product/${params.id}`
            );
          },
          element: <SingleHeadphone></SingleHeadphone>,
        },
        {
          path: "/wishlist",
          loader: async () => {
            return fetch(
              "https://electronic-gadgets-server.vercel.app/wishlist"
            );
          },
          element: (
            <PrivateRoute>
              <WishList></WishList>
            </PrivateRoute>
          ),
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
