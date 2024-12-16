import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddP } from "./assets/AtcSlice";
import { Link } from "react-router-dom";

function AddToCart() {
  let dispatch = useDispatch();
  let count = useSelector((state) => state.pro.display);
  let len = count.length;

  const Product = [
    {
      id: 1,
      price: "1099",
      Name: "Wave 3",
      Title: "Smart Watch",
      img: "https://www.boat-lifestyle.com/cdn/shop/files/WaveSigma3_FIs_ActiveBlack01_1300x.png?v=1715601060",
    },
    {
      id: 2,
      price: "2799",
      Name: "boAt Nirvana Iris",
      Title: " TWS Ear-Buds",
      img: "https://www.boat-lifestyle.com/cdn/shop/files/NION-ANC-FI_Black01_600x.png?v=1702893834",
    },
    {
      id: 3,
      price: "1499",
      Name: "boAt Stone 350",
      Title: "Bluetooth Speaker",
      img: "https://www.boat-lifestyle.com/cdn/shop/products/74a6b20d-9842-49da-b279-022812b81e1f_600x.png?v=1673001663",
    },
    {
      id: 4,
      price: "1699",
      Name: "boAt Stone",
      Title: "Bluetooth Speaker",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/4_1500x.png?v=1655187482",
    },
    {
      id: 5,
      price: "449",
      Name: "Bassheads 22",
      Title: "Wired Earphones",
      img: "https://cdn.shopify.com/s/files/1/0057/8938/4802/products/61gs3SGzk4L._SX679_-PhotoRoom.png-PhotoRoom_1500x.png?v=1678452058",
    },
    {
      id: 6,
      price: "499",
      Name: "Bassheads 103",
      Title: "Wired Earphones",
      img: "https://www.boat-lifestyle.com/cdn/shop/products/103b_600x.png?v=1574927262",
    },
    {
      id: 7,
      price: "599",
      Name: "boAt Bassheads 242",
      Title: "Wired Earphones",
      img: "https://www.boat-lifestyle.com/cdn/shop/products/1a5b7ccf-a2fa-4c06-963d-bfe228b0b0eb_600x.png?v=1625046391",
    },
    {
      id: 8,
      price: "8999",
      Name: "boAt Aavante Bar Quake",
      Title: "Sound Bar",
      img: "https://www.boat-lifestyle.com/cdn/shop/files/Artboard_1-removebg-preview_1_500x.png?v=1682509802",
    },
  ];

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        background: "linear-gradient(to bottom, #2C5364, #203A43, #0F2027)",
        minHeight: "100vh",
        padding: "30px",
        color: "#fff",
      }}
    >
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "30px",
        }}
      >
        {" "}
        <h1>Wel-Come To East Electronics</h1>
        <Link to="/Cart" style={{ textDecoration: "none" }}>
          <button
            style={{
              display: "flex",
              alignItems: "center",
              background: "linear-gradient(45deg, #00c6ff, #0072ff)",
              border: "none",
              borderRadius: "30px",
              padding: "10px 20px",
              color: "#fff",
              fontSize: "18px",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
              transition: "transform 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          >
            <img
              src="https://www.svgrepo.com/show/522014/cart-2.svg"
              alt="cart-icon"
              style={{ width: "40px", height: "40px", marginRight: "10px" }}
            />
            Cart ({count.length})
          </button>
        </Link>
      </nav>

      {/* Product Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
          gap: "20px",
        }}
      >
        {Product.map((P) => (
          <div
            key={P.id}
            style={{
              width: "260px",
              borderRadius: "20px",
              overflow: "hidden",
              background:
                "linear-gradient(145deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))",
              boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 10px 20px rgba(0, 0, 0, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.2)";
            }}
          >
            <img
              src={P.img}
              alt={P.Name}
              style={{
                width: "150px",
                borderRadius: "10px",
                marginBottom: "15px",
              }}
            />
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                textAlign: "center",
                textShadow: "0px 2px 5px rgba(0,0,0,0.5)",
              }}
            >
              {P.Name}
            </h3>
            <p style={{ fontSize: "14px", color: "#ccc", textAlign: "center" }}>
              {P.Title}
            </p>
            <p
              style={{
                fontSize: "18px",
                fontWeight: "bold",
                color: "#ffd700",
                marginBottom: "15px",
              }}
            >
              ₹{P.price}
            </p>
            <button
              onClick={() => dispatch(AddP(P))}
              style={{
                background:
                  "linear-gradient(45deg,rgb(240, 51, 58),rgb(35, 85, 221))",
                color: "#fff",
                border: "none",
                borderRadius: "15px",
                padding: "10px 20px",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "scale(1.1)";
                e.target.style.boxShadow = "0px 6px 15px rgba(240, 51, 58)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.boxShadow = "none";
              }}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AddToCart;