import React, { useRef } from "react";
import cloth from "../assets/OIP.jpg";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router";

function Home() {
  const headingRef = useRef();
  const buttonRef = useRef();
  const leftBoxRef = useRef();
  const rightBoxRef = useRef();
  const clothesSectionRef = useRef();
   const navigate=useNavigate();
    const getname=localStorage.getItem("name");
    const date=new Date();
  useGSAP(() => {
    // ⭐ Heading animation
    gsap.from(headingRef.current, {
      y: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
    });

    // ⭐ Button animation
    gsap.from(buttonRef.current, {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: "back.out(1.7)",
    });

    // ⭐ Left box animation
    gsap.from(leftBoxRef.current, {
      x: 900,
      opacity: 0,
      duration: 4,
      delay: 2,
      ease: "power2.out",
      rotate:360,
      yoyo:true,
      repeat:-1
    });

    // ⭐ Right box animation
    gsap.from(rightBoxRef.current, {
      x: -900,
      opacity: 0,
      duration: 4,
      delay: 2,
      ease: "power2.out",
      rotate:360,
      yoyo:true,
      repeat:-1
    });
  });

  const scrollToClothes = () => {
    clothesSectionRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1445205170230-053b83016050?q=80&w=2071"
          alt="fashion"
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* ⭐ Top Left Box */}
        <div
          ref={leftBoxRef}
          className="absolute top-6 left-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg"
        >
          <p className="text-black font-semibold">🔥 New Collection</p>
        </div>

        {/* ⭐ Top Right Box */}
        <div
          ref={rightBoxRef}
          className="absolute top-6 right-6 bg-white/80 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg"
        >
          <p className="text-black font-semibold">{date.getDate()}-{date.getDay()}-{date.getFullYear()}</p>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6">
         <h1
  ref={headingRef}
  className="relative text-5xl md:text-7xl font-extrabold mb-6 
  bg-cover bg-center text-transparent bg-clip-text 
  tracking-tight leading-tight drop-shadow-xl
  before:absolute before:inset-0 before:bg-linear-to-r 
  before:from-pink-500/20 before:via-purple-500/20 before:to-blue-500/20
  before:blur-2xl before:-z-10 inline-block"
  style={{ backgroundImage: `url(${cloth})` }}
>
  Discover Your Style{" "}
  <span className="bg-linear-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent animate-pulse">
    {getname}
  </span>
</h1>

          <p className="text-lg md:text-xl mb-6 max-w-xl">
            Explore premium fashion for men & women — clothes, rings, shoes and more.
          </p>

          <button
            
            ref={buttonRef}
            onClick={()=>{scrollToClothes,navigate("/menu")}}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-lg font-semibold transition"
          >
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;