// import React from "react";
// import { Link } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { delProduct } from "./assets/AtcSlice";

// function Cart() {
//   let dispatch = useDispatch();
//   let Cart = useSelector((state) => state.pro.display);

//   return (
//     <>
//       {/* Back Button */}
//       <div style={{ marginBottom: "30px", textAlign: "center" }}>
//         <Link to="/" style={{ textDecoration: "none" }}>
//           <button
//             style={{
//               padding: "15px 30px",
//               fontSize: "18px",
//               color: "#fff",
//               background: "linear-gradient(to right, #444444, #555555)",
//               border: "none",
//               borderRadius: "25px",
//               cursor: "pointer",
//               boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.5)",
//               transition: "all 0.3s ease",
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.transform = "translateY(-3px)";
//               e.target.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.7)";
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.transform = "translateY(0)";
//               e.target.style.boxShadow = "0px 6px 15px rgba(0, 0, 0, 0.5)";
//             }}
//           >
//             ⬅ Back
//           </button>
//         </Link>
//       </div>

//       {/* Cart Container */}
//       <div
//         style={{
//           background: "linear-gradient(to right, #2c2c2c, #3a3a3a)",
//           color: "#f0f0f0",
//           width: "90vw",
//           minHeight: "400px",
//           boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.7)",
//           borderRadius: "20px",
//           margin: "20px auto",
//           padding: "40px",
//           display: "flex",
//           flexWrap: "wrap",
//           justifyContent: "center",
//           gap: "40px",
//         }}
//       >
//         {Cart.length > 0 ? (
//           Cart.map((P, i) => (
//             <div
//               key={P.id}
//               style={{
//                 background: "#3a3a3a",
//                 width: "260px",
//                 height: "380px",
//                 boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.5)",
//                 borderRadius: "20px",
//                 display: "flex",
//                 flexDirection: "column",
//                 justifyContent: "space-between",
//                 alignItems: "center",
//                 padding: "20px",
//                 transition: "transform 0.3s ease, box-shadow 0.3s ease",
//                 position: "relative",
//                 overflow: "hidden",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "scale(1.05)";
//                 e.currentTarget.style.boxShadow =
//                   "0px 15px 30px rgba(0, 0, 0, 0.8)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "scale(1)";
//                 e.currentTarget.style.boxShadow =
//                   "0px 6px 15px rgba(0, 0, 0, 0.5)";
//               }}
//             >
//               {/* Decorative Overlay */}
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "-50px",
//                   right: "-50px",
//                   width: "120px",
//                   height: "120px",
//                   background: "rgba(255, 255, 255, 0.1)",
//                   borderRadius: "50%",
//                   zIndex: 1,
//                 }}
//               ></div>
//               <img
//                 src={P.img}
//                 alt="product-img"
//                 style={{
//                   width: "140px",
//                   height: "140px",
//                   borderRadius: "15px",
//                   objectFit: "cover",
//                   marginBottom: "10px",
//                   zIndex: 2,
//                 }}
//               />
//               <h4
//                 style={{
//                   color: "#f0f0f0",
//                   textAlign: "center",
//                   marginBottom: "10px",
//                   fontSize: "20px",
//                   fontWeight: "bold",
//                   zIndex: 2,
//                 }}
//               >
//                 {P.Name}
//               </h4>
//               <p
//                 style={{
//                   color: "#d0d0d0",
//                   marginBottom: "10px",
//                   fontSize: "14px",
//                   textAlign: "center",
//                   zIndex: 2,
//                 }}
//               >
//                 {P.Title}
//               </p>
//               <p
//                 style={{
//                   color: "#ff6a00",
//                   fontSize: "18px",
//                   fontWeight: "bold",
//                   marginBottom: "15px",
//                   zIndex: 2,
//                 }}
//               >
//                 ₹{P.price}
//               </p>
//               <button
//                 onClick={() => {
//                   dispatch(delProduct(i));
//                 }}
//                 style={{
//                   padding: "12px 20px",
//                   fontSize: "14px",
//                   color: "#fff",
//                   background: "linear-gradient(to right, #ff6a00, #ff2d55)",
//                   border: "none",
//                   borderRadius: "8px",
//                   cursor: "pointer",
//                   boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.5)",
//                   transition: "all 0.3s ease",
//                   zIndex: 2,
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.transform = "scale(1.1)";
//                   e.target.style.boxShadow =
//                     "0px 8px 20px rgba(255, 105, 70, 0.7)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.transform = "scale(1)";
//                   e.target.style.boxShadow = "0px 6px 15px rgba(0, 0, 0, 0.5)";
//                 }}
//               >
//                 Remove
//               </button>
//             </div>
//           ))
//         ) : (
//           <h3 style={{ color: "#d0d0d0", textAlign: "center" }}>
//             Your cart is empty!
//           </h3>
//         )}
//       </div>
//     </>
//   );
// }

// export default Cart;


import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { delProduct } from "./assets/AtcSlice";

function Cart() {
  let dispatch = useDispatch();
  let Cart = useSelector((state) => state.pro.display);

  return (
    <>
      {/* Back Button */}
      <div style={{ marginBottom: "30px", textAlign: "center" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <button
            style={{
              padding: "15px 30px",
              fontSize: "18px",
              color: "#ffffff",
              background: "linear-gradient(to right, #283E51, #4B79A1)",
              border: "none",
              borderRadius: "25px",
              cursor: "pointer",
              boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.5)",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-3px)";
              e.target.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.7)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0px 6px 15px rgba(0, 0, 0, 0.5)";
            }}
          >
            ⬅ Back
          </button>
        </Link>
      </div>

      {/* Cart Container */}
      <div
        style={{
          background: "linear-gradient(to bottom, #1f1f1f, #3e3e3e)",
          color: "#e0e0e0",
          width: "90vw",
          minHeight: "400px",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.7)",
          borderRadius: "20px",
          margin: "20px auto",
          padding: "40px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "40px",
        }}
      >
        {Cart.length > 0 ? (
          Cart.map((P, i) => (
            <div
              key={P.id}
              style={{
                background: "#2E2E2E",
                width: "260px",
                height: "380px",
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.5)",
                borderRadius: "20px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "20px",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow =
                  "0px 15px 30px rgba(0, 0, 0, 0.8)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0px 6px 15px rgba(0, 0, 0, 0.5)";
              }}
            >
              {/* Decorative Overlay */}
              <div
                style={{
                  position: "absolute",
                  top: "-50px",
                  right: "-50px",
                  width: "120px",
                  height: "120px",
                  background: "rgba(255, 255, 255, 0.07)",
                  borderRadius: "50%",
                  zIndex: 1,
                }}
              ></div>
              <img
                src={P.img}
                alt="product-img"
                style={{
                  width: "140px",
                  height: "140px",
                  borderRadius: "15px",
                  objectFit: "cover",
                  marginBottom: "10px",
                  zIndex: 2,
                }}
              />
              <h4
                style={{
                  color: "#ffffff",
                  textAlign: "center",
                  marginBottom: "10px",
                  fontSize: "20px",
                  fontWeight: "bold",
                  zIndex: 2,
                }}
              >
                {P.Name}
              </h4>
              <p
                style={{
                  color: "#b0b0b0",
                  marginBottom: "10px",
                  fontSize: "14px",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                {P.Title}
              </p>
              <p
                style={{
                  color: "#FFD700",
                  fontSize: "18px",
                  fontWeight: "bold",
                  marginBottom: "15px",
                  zIndex: 2,
                }}
              >
                ₹{P.price}
              </p>
              <button
                onClick={() => {
                  dispatch(delProduct(i));
                }}
                style={{
                  padding: "12px 20px",
                  fontSize: "14px",
                  color: "#ffffff",
                  background: "linear-gradient(to right, #FF512F, #F09819)",
                  border: "none",
                  borderRadius: "8px",
                  cursor: "pointer",
                  boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.5)",
                  transition: "all 0.3s ease",
                  zIndex: 2,
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                  e.target.style.boxShadow =
                    "0px 8px 20px rgba(255, 105, 70, 0.7)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "0px 6px 15px rgba(0, 0, 0, 0.5)";
                }}
              >
                Remove
              </button>
            </div>
          ))
        ) : (
          <h3 style={{ color: "#b0b0b0", textAlign: "center" }}>
            Your cart is empty!
          </h3>
        )}
      </div>
    </>
  );
}

export default Cart;

