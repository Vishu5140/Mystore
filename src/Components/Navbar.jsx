import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router";

function Navbar() {
 const navigate=useNavigate();
  const navRef = useRef();
  const logoRef = useRef();
  const linksRef = useRef();

  const mobileMenuRef = useRef();

  const [open, setOpen] = useState(false);

  // ⭐ Entrance animation
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 0.8,
    })
      .from(logoRef.current, { x: -50, opacity: 0, duration: 1 })
      .from(linksRef.current?.children || [], {
        y: -20,
        opacity: 0,
        stagger: 0.2,
      })


    // ⭐ Idle floating logo
    gsap.to(logoRef.current, {
      y: -5,
      repeat: -1,
      yoyo: true,
      duration: 0.8,
    });
  }, []);

  // ⭐ Mobile menu animation
  const toggleMenu = () => {
    setOpen(!open);

    if (!open) {
      gsap.fromTo(
        mobileMenuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.4 }
      );
    } else {
      gsap.to(mobileMenuRef.current, { height: 0, opacity: 0, duration: 0.3 });
    }
  };
 const handlelogout=()=>{
  localStorage.clear();
  navigate("/signup");
  alert("logout successfully");
 }
  return (
    <>
      <nav
        ref={navRef}
         className="fixed top-0 left-0 w-full z-50 
  flex items-center justify-between 
  px-4 md:px-8 py-2 
  bg-transparent backdrop-blur-md 
  text-white shadow-lg border-b border-white/10"
      >
        {/* ⭐ Logo */}
        <h1 ref={logoRef} className="text-xl md:text-2xl font-bold cursor-pointer text-red-500" onClick={()=>navigate('/mystore')}>
          MyStore
        </h1>

        {/* ⭐ Desktop links */}
        <ul
          ref={linksRef}
          className="hidden md:flex gap-8 font-medium text-sm md:text-base"
        >
          <li className="hover:text-yellow-400 cursor-pointer" onClick={()=>navigate("/about")}>About</li>
          <li className="hover:text-yellow-400 cursor-pointer" onClick={()=>navigate("/contact")}>Contact</li>
          <li className="hover:text-red-400 cursor-pointer" onClick={handlelogout}>Logout</li>
        </ul>

        {/* ⭐ Hamburger */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          ☰
        </div>
      </nav>

      {/* ⭐ Mobile dropdown */}
      <div
  ref={mobileMenuRef}
  className="md:hidden absolute top-full left-0 w-full z-50 overflow-hidden h-0 bg-gray-800 text-white px-4"
>
  <ul className="flex flex-col gap-4 py-6">
    <li onClick={() => navigate("/about")}>About</li>
    <li onClick={() => navigate("/contact")}>Contact</li>
    <li onClick={handlelogout}>Logout</li>
  </ul>
</div>
    </>
  );
}

export default Navbar;