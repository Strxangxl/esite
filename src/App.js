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
const Login = lazy(() => import('./components/Login'))
const Register = lazy(() => import('./components/Register'))

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
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Default />} />
          </Routes>
        </Suspense>
        <Modal />
      </BrowserRouter>
    </>
  );
}

export default App;
