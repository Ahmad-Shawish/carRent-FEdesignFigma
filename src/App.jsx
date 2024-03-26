import "./app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import Browse from "./pages/browse/Browse";
import Details from "./pages/details/Details";
import Checkout from "./pages/checkout/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
        <Footer />
      </>
    ),
  },
  {
    path: "/browse",
    element: (
      <>
        <Navbar />
        <Browse />
        <Footer />
      </>
    ),
  },
  {
    path: "/details/:id",
    element: (
      <>
        <Navbar />
        <Details />
        <Footer />
      </>
    ),
  },
  {
    path: "/checkout/:id",
    element: (
      <>
        <Navbar />
        <Checkout />
        <Footer />
      </>
    ),
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
