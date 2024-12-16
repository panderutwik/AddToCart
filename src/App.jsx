import { useState } from "react";
import "./App.css";
import AddToCart from "./Shop";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddToCart />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
