import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function List() {
  const [data, setdata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const container = useRef(); // ⭐ GSAP scope ref

  gsap.registerPlugin(useGSAP);

  const itemsPerPage = 4;

  // ⭐ fetch data
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setdata(res.data);
    });
  }, []);

  // ⭐ pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // ⭐ GSAP animation (images only)
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
    { scope: container, dependencies: [currentPage] } // ⭐ re-run on page change
  );

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* ⭐ Heading */}
      <h1 className="text-3xl font-bold text-center py-6">Products</h1>

      {/* ⭐ Products Grid */}
      <div
        ref={container}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6"
      >
        {currentItems.map((item) => (
          <div
            key={item.id}
            className="bg-white border rounded-xl p-4 shadow hover:shadow-lg transition text-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="product-img h-48 w-full object-contain mb-3 "
            />

            <h3 className="text-sm font-semibold line-clamp-2">
              {item.title}
            </h3>

            <p className="text-gray-500 text-xs mt-1">{item.category}</p>

            <p className="font-bold mt-2 text-lg">${item.price}</p>
          </div>
        ))}
      </div>

      {/* ⭐ Pagination */}
      <div className="flex justify-center gap-2 my-8">
        <button
          className="px-3 py-1 border rounded disabled:opacity-40 bg-white"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Prev
        </button>

        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`px-3 py-1 border rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-white"
            }`}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="px-3 py-1 border rounded disabled:opacity-40 bg-white"
          disabled={currentPage === totalPages}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default List;