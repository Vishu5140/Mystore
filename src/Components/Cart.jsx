import React, { useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeToCart } from "../Slice/cartSlice";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { placeOrder } from "../Slice/cartSlice";
function Cart() {
  const { items, totalQuantity, totalPrice } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const containerRef = useRef();

  // ✅ Redirect if cart empty
  useEffect(() => {
    if (items.length === 0) {
      navigate("/mystore");
    }
  }, [items, navigate]);

  // ✅ GSAP Animation
  useGSAP(
    () => {
      gsap.from(".cart-card", {
        x:100,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });

      gsap.to(".Image", {
        rotateY: 360,
        repeat: -1,
        duration: 7,
        ease: "linear",
      });
    },
    { scope: containerRef }
  ); 
 const handleplace=()=>{
  dispatch(placeOrder())
  alert("Your Order has been Placed")
 }
  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-linear-to-br from-black via-gray-900 to-black p-6"
    >
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
        🛒 Your Cart
      </h1>

      {/* ✅ Cart Summary */}
      <div className="text-center mb-8">
        <p className="text-gray-300 text-lg">
          Total Items:{" "}
          <span className="text-yellow-400 font-bold">
            {totalQuantity}
          </span>
        </p>
        <p className="text-gray-300 text-lg">
          Grand Total:{" "}
          <span className="text-yellow-400 font-bold">
            ₹ {totalPrice}
          </span>
        </p>
      </div>

      {/* ✅ Cart Items Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {items.map((data) => (
          <div
            key={data.id}
            className="cart-card flex flex-col justify-between bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg p-5 hover:shadow-yellow-400/50 hover:shadow-xl transition-all duration-300"
          >
            <img
              src={data.image}
              alt={data.title}
              className="Image h-48 w-full object-contain mb-4 rounded-lg"
            />

            <h2 className="text-lg font-semibold text-white line-clamp-1">
              {data.title}
            </h2>

            <p className="text-yellow-400 font-bold mt-2">
              ₹ {data.price}
            </p>

            <p className="text-gray-300 mt-1">
              Quantity: {data.quantity}
            </p>

            <p className="text-white font-semibold mt-1">
              Total: ₹ {data.totalPrice}
            </p>

            <button
              onClick={() => dispatch(removeToCart(data.id))}
              className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-xl transition duration-300"
            >
              Remove Item
            </button>
             <button
              onClick={handleplace}
              className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded-xl transition duration-300"
            >
              Place Order
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart;