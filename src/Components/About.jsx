import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

function About() {
  const containerRef = useRef();
  const navigate = useNavigate();

  useGSAP(() => {
    gsap.from(".hero-text", {
      y: 40,
      duration: 2,
      ease: "power3.out",
    });

    gsap.from(".feature-card", {
      y: 30,
      duration: 2,
      delay: 0.5,
      stagger: 0.2,
      ease: "power3.out",
    });

    gsap.from(".back-btn", {
      x: 40,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-linear-to-br from-black via-gray-900 to-black text-white px-6 py-12"
    >
      {/* 🔙 BACK BUTTON */}
      <button
        onClick={() => navigate("/menu")}
        className="back-btn absolute top-6 right-6 bg-white/10 backdrop-blur-lg p-3 rounded-full shadow-lg hover:bg-yellow-400 hover:text-black transition duration-300"
      >
        ←
      </button>

      {/* HERO SECTION */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="hero-text text-4xl md:text-5xl font-bold mb-6">
          Welcome to <span className="text-yellow-400">OnlyMart</span>
        </h1>
        <p className="hero-text text-gray-300 text-lg max-w-3xl mx-auto">
          We are passionate about delivering high-quality products at the best
          prices. Our goal is to provide a smooth and enjoyable shopping
          experience for every customer.
        </p>
      </div>

      {/* MISSION SECTION */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold mb-4 text-yellow-400">
            Our Mission
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Our mission is to make online shopping simple, secure, and
            affordable. We believe in customer satisfaction, fast delivery,
            and providing trending products that match your lifestyle.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-yellow-400/40 transition">
          <p className="text-gray-200">
            We combine technology and creativity to build a platform that is
            modern, responsive, and user-friendly. Your trust is our biggest
            achievement.
          </p>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="feature-card bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-yellow-400/50 transition">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              🚚 Fast Delivery
            </h3>
            <p className="text-gray-300">
              We ensure quick and reliable shipping so your products reach you
              on time.
            </p>
          </div>

          <div className="feature-card bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-yellow-400/50 transition">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              💳 Secure Payments
            </h3>
            <p className="text-gray-300">
              Your transactions are protected with advanced security systems.
            </p>
          </div>

          <div className="feature-card bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-yellow-400/50 transition">
            <h3 className="text-xl font-semibold mb-3 text-yellow-400">
              ⭐ Quality Products
            </h3>
            <p className="text-gray-300">
              We carefully select products to ensure top-notch quality and
              satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* CALL TO ACTION */}
      <div className="text-center mt-20">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-3 rounded-xl transition duration-300">
          Explore Our Store
        </button>
      </div>
    </div>
  );
}

export default About;