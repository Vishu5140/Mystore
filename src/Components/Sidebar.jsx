import React, { useRef } from "react";
import { FaHeart, FaShoppingCart, FaUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router";

function Sidebar() {
  const sidebarRef = useRef();
  const itemsRef = useRef([]);
  const navigate = useNavigate();

  // ✅ Get cart items from Redux
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.length;

  // ✅ Correct GSAP plugin registration
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.from(sidebarRef.current, {
      x: -80,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    gsap.from(itemsRef.current, {
      x: -40,
      opacity: 0,
      stagger: 0.2,
      duration: 0.6,
      delay: 0.3,
      ease: "power3.out",
    });
  }, []);

  const menu = [
    
    { name: "Cart", icon: <FaShoppingCart />, path: "/cart", isCart: true },
 
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <div
        ref={sidebarRef}
        className="hidden md:block fixed left-4 top-1/2 -translate-y-1/2 z-50"
      >
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl px-3 py-6 shadow-lg">
          <div className="relative flex flex-col items-center gap-8">
            
            {/* Vertical Line */}
            <div className="absolute w-0.5 h-full bg-cyan-500"></div>

            {menu.map((item, index) => (
              <div
                key={index}
                ref={(el) => (itemsRef.current[index] = el)}
                className="relative flex flex-col items-center cursor-pointer group"
              >
                <div
                  className="relative w-12 h-12 rounded-full bg-gray-900 
                             flex items-center justify-center 
                             text-cyan-400 text-lg 
                             border border-cyan-400/40
                             group-hover:scale-110 
                             group-hover:bg-cyan-500
                             group-hover:text-black
                             transition duration-300"
                  onClick={() => navigate(item.path)}
                >
                  {item.icon}

                  {/* 🔥 Cart Badge */}
                  {item.isCart && cartCount > 0 && (
                    <span
                      className="absolute -top-2 -right-2 
                                 bg-red-500 text-white text-xs 
                                 w-5 h-5 flex items-center 
                                 justify-center rounded-full"
                    >
                      {cartCount}
                    </span>
                  )}
                </div>

                <span
                  className="absolute left-14 whitespace-nowrap 
                             text-white opacity-0 
                             group-hover:opacity-100 transition"
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-gray-900 border-t border-cyan-500 z-50">
        <div className="flex justify-around py-3">
          {menu.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className="relative flex flex-col items-center text-cyan-400 
                         hover:text-white transition cursor-pointer"
            >
              <div className="relative text-xl">
                {item.icon}

                {/* 🔥 Cart Badge Mobile */}
                {item.isCart && cartCount > 0 && (
                  <span
                    className="absolute -top-2 -right-3 
                               bg-red-500 text-white text-xs 
                               w-5 h-5 flex items-center 
                               justify-center rounded-full"
                  >
                    {cartCount}
                  </span>
                )}
              </div>

              <span className="text-xs mt-1">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Sidebar;