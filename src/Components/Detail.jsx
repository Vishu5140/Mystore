import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import gsap from "gsap";
import { useDispatch } from "react-redux";
import { addToCart } from "../Slice/cartSlice";
function Detail() {
  const { id } = useParams();
  const [getData, setGet] = useState(null);
 const[quantity,setquantity]=useState(1);
  const containerRef = useRef();
 const navigate=useNavigate();
 const dispatch=useDispatch();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        setGet(res.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  // GSAP Animation
  useEffect(() => {
  if (!getData) return;

  const tl = gsap.timeline();

  // Card fade in
  tl.from(containerRef.current, {
    opacity: 0,
    duration: 0.6,
    ease: "power2.out"
  });

  // Image slide + scale
  tl.from(".Image", {
    x: -26,
    scale: 0.8,
    duration: 0.8,
    ease: "back.out(1.7)"
  });

  // Title
  tl.from(".T1", {
    x: 40,
 
    duration: 0.6
  }, "-=0.5");

  // Description + price stagger
  tl.from(".desc, .price", {
    y: 20,
    
    stagger: 0.2,
    duration: 0.6
  }, "-=0.4");

  // Rating bounce
  tl.from(".Rate, .Rate2", {
  
    duration: 0.5,
    stagger: 0.1,
    ease: "back.out(2)"
  }, "-=0.3");

  // Button entrance
  tl.from(".B", {
    y: 20,
    
    duration: 0.6
  }, "-=0.4");

  // Floating image effect (continuous)
  gsap.to(".Image", {
    y: -15,
    repeat: -1,
    yoyo: true,
    duration: 2,
    ease: "power1.inOut"
  });

  // Button pulse
  gsap.to(".B", {
    scale: 1,
    repeat: -1,
    yoyo: true,
    duration: 1,
    ease: "power1.inOut"
  });

  return () => {
    tl.kill();
  };

}, [getData]);

  if (!getData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-2xl font-semibold">Loading...</h2>
      </div>
    );
  }

 return (
  <div
    ref={containerRef}
    className="min-h-screen flex flex-col items-center justify-center bg-gray-700 p-6"
  >

    {/* MAIN PRODUCT CARD */}
    <div className="rounded-2xl shadow-lg hover:shadow-yellow-400/60 hover:shadow-2xl transition-all duration-300 max-w-5xl w-full overflow-hidden flex flex-col md:flex-row">
      
      {/* Image Section */}
      <div className="bg-black flex justify-center items-center p-8 md:w-1/2">
        <img
          src={getData.image}
          alt={getData.title}
          className="Image w-72 h-72 object-contain"
        />
      </div>

      {/* Content Section */}
      <div className="bg-gray-500 flex flex-col justify-center space-y-4 p-8 md:w-1/2">
        
        <h1 className="T1 text-3xl font-bold text-white">
          {getData.title}
        </h1>

        <h3 className="price text-2xl font-semibold text-yellow-400">
          ₹ {getData.price * quantity}
        </h3>

        <div className="flex items-center gap-2">
          <span className="Rate text-yellow-400 text-lg">⭐</span>
          <span className="Rate2 text-white font-medium">
            {getData.rating.rate} / 5
          </span>
        </div>

        {/* Quantity */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-4 w-full">

          <span className="text-gray-200 text-sm sm:text-base">
            Quantity
          </span>

          <div className="flex items-center  rounded-lg overflow-hidden w-full sm:w-auto">
            
            <button
              onClick={() => setquantity(quantity > 1 ? quantity - 1 : 1)}
              className="px-4 py-2 bg-gray-700 hover:bg-yellow-400 hover:text-black transition"
            >
              −
            </button>

            <p className="px-6 py-2 bg-gray-900 text-white font-semibold">
              {quantity}
            </p>

            <button
              onClick={() => setquantity(quantity + 1)}
              className="px-4 py-2 bg-gray-700 hover:bg-yellow-400 hover:text-black transition"
            >
              +
            </button>

          </div>
        </div>

        <button onClick={()=>{navigate("/cart"),dispatch(addToCart({
    ...getData,
    quantity: quantity,
  }))}}   className="B mt-4 bg-black text-white px-6 py-3 rounded-xl hover:bg-yellow-400 hover:text-black transition duration-300">
          Add to Cart
        </button>

      </div>
    </div>

    {/* DESCRIPTION BELOW CARD */}
    <div className="max-w-5xl w-full mt-8 bg-gray-800 rounded-xl p-6 shadow-md">
      <h2 className="text-xl font-semibold text-yellow-400 mb-3">
        Product Description
      </h2>

      <p className="desc text-gray-300 leading-relaxed">
        {getData.description}
      </p>
    </div>

  </div>
);}

export default Detail;