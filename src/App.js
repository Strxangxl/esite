import { lazy, Suspense, Fragment } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";
import Default from "./components/Default";

const ProductList = lazy(() => import("./components/ProductList"));
const Details = lazy(() => import("./components/Details"));
const Cart = lazy(() => import("./components/Cart"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/details" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Default />} />
          </Routes>
        </Suspense>
        <Modal />
      </BrowserRouter>
    </>
  );
}

export default App;
