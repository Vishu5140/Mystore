import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router";
function Mystore() {
  const [data, setdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const container = useRef();
  gsap.registerPlugin(useGSAP);
  const navigate=useNavigate();
  const itemsPerPage = 4;

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setdata(res.data);
    });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  useGSAP(
    () => {
      gsap.from(".product-img", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });
    },
    { scope: container, dependencies: [currentPage] }
  );
  
   const handlesubmit=(id)=>{
     navigate(`/detail/${id}`)
   }
  return (
  <div className="bg-gray-950 text-white min-h-screen px-3 sm:px-6 lg:px-12">
    
    {/* ⭐ Responsive Heading */}
    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center py-6 text-cyan-400 tracking-wider">
      Products
    </h1>

    <div className="max-w-7xl mx-auto">

      {/* ⭐ Responsive Grid */}
      <div
        ref={container}
        className="grid grid-cols-1 
                   sm:grid-cols-2 
                   md:grid-cols-3 
                   lg:grid-cols-4 
                   gap-4 sm:gap-6"
      >
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="relative bg-gray-900 border border-cyan-500 
                       rounded-xl p-4 shadow-md 
                       hover:shadow-cyan-500/40 hover:shadow-xl 
                       hover:border-cyan-300 
                       transition duration-300 text-center group"
          >
            {/* ❤️ Favourite Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                gsap.fromTo(
                  e.currentTarget,
                  { scale: 1 },
                  { scale: 1.3, duration: 0.2, yoyo: true, repeat: 1 }
                );
              }}
              className="absolute top-3 right-3 bg-gray-800 p-2 rounded-full 
                         text-cyan-400 hover:text-red-500 
                         hover:bg-gray-700 transition cursor-pointer"
            >
              ❤️
            </button>

            {/* Product Image */}
            <img
              src={item.image}
              alt={item.title}
              className="product-img 
                         h-36 sm:h-40 md:h-44 lg:h-48 
                         w-full object-contain mb-3"
            />

            <h3 className="text-sm sm:text-base font-semibold line-clamp-2 text-gray-200">
              {item.title}
            </h3>

            <p className="text-gray-400 text-xs sm:text-sm mt-1">
              {item.category}
            </p>
             <p className="font-bold mt-2 text-lg sm:text-xl text-cyan-400">
              ${item.price}
            </p>
         

            {/* 🛒 Add to Cart Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                gsap.fromTo(
                  e.currentTarget,
                  { scale: 1 },
                  { scale: 1.1, duration: 0.15, yoyo: true, repeat: 1 }
                ),handlesubmit(item.id)
              }}
              className="mt-4 w-full py-2 text-sm sm:text-base 
                         rounded-lg border border-cyan-500 
                         bg-gray-800 text-cyan-400
                         hover:bg-cyan-500 hover:text-black
                         transition duration-300 cursor-pointer"
                         
            >
              Explore
            </button>
          </div>
        ))}
      </div>

      {/* ⭐ Responsive Pagination */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 my-8">
        <button
          className="px-3 sm:px-4 py-1 text-sm sm:text-base 
                     border border-cyan-500 rounded bg-gray-900 
                     hover:bg-cyan-500 hover:text-black 
                     transition disabled:opacity-40"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 sm:px-4 py-1 text-sm sm:text-base 
              border border-cyan-500 rounded transition
              ${
                currentPage === index + 1
                  ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/50"
                  : "bg-gray-900 hover:bg-cyan-500 hover:text-black"
              }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="px-3 sm:px-4 py-1 text-sm sm:text-base 
                     border border-cyan-500 rounded bg-gray-900 
                     hover:bg-cyan-500 hover:text-black 
                     transition disabled:opacity-40"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>

    </div>
  </div>
);
}

export default Mystore;