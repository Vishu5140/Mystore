import React, { useRef } from "react";
import cloth from "../Video/clothes.mp4";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Menu() {
  const videoRef = useRef();
  const textRef = useRef();
 const getname=localStorage.getItem("name");
  useGSAP(() => {
    // Fade in video
    gsap.from(videoRef.current, {
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    // Slight zoom effect
    gsap.fromTo(
      videoRef.current,
      { scale: 1.2 },
      { scale: 1, duration: 4, ease: "power2.out" }
    );

    // Animate text
    gsap.from(textRef.current, {
      y: 80,
      opacity: 0,
      duration: 1.2,
      delay: 0.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden rounded-2xl">
      
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={cloth} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full text-white">
       <h1
  ref={textRef}
  className="relative text-5xl md:text-7xl font-extrabold 
  tracking-tight text-white inline-block"
>
  <span className="block uppercase text-sm tracking-[0.4em] text-gray-400 mb-4">
    Exclusive Collection
  </span>

  Welcome to{" "}
  <span className="bg-linear-to-r from-gray-200 via-white to-gray-400 
  bg-clip-text text-transparent">
    My Store
  </span>{" "}
  
  <span className="text-transparent bg-clip-text 
  bg-linear-to-r from-amber-400 via-yellow-500 to-amber-600">
    {getname}
  </span>

  <span className="absolute -bottom-3 left-0 w-24 h-0.75 
  bg-linear-to-r from-amber-400 to-yellow-600 rounded-full"></span>
</h1>
      </div>

    </div>
  );
}

export default Menu;