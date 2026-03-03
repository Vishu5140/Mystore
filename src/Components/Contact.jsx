import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router";

function Contact() {
  const containerRef = useRef();
 const navigate=useNavigate();
  useGSAP(() => {
    gsap.from(".contact-hero", {
      y: 40,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(".contact-card", {
      y: 40,
     duration: 1,
      ease: "power3.out",
    });
  }, { scope: containerRef });

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen bg-linear-to-br from-black via-gray-900 to-black text-white px-6 py-12"
    >
        <button
        onClick={() => navigate("/menu")}
        className="back-btn absolute top-6 right-6 bg-white/10 backdrop-blur-lg p-3 rounded-full shadow-lg hover:bg-yellow-400 hover:text-black transition duration-300"
      >
        ←
      </button>
      {/* HERO */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="contact-hero text-4xl md:text-5xl font-bold mb-4">
          Get In <span className="text-yellow-400">Touch</span>
        </h1>
        <p className="contact-hero text-gray-300 max-w-2xl mx-auto">
          Have questions, suggestions, or need support? We’d love to hear from you.
        </p>
      </div>

      {/* CONTACT INFO CARDS */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="contact-card bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-yellow-400/50 transition">
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">
            📍 Address
          </h3>
          <p className="text-gray-300">
            Shiamgir, India <br />
            OnlyMart Headquarters
          </p>
        </div>

        <div className="contact-card bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-yellow-400/50 transition">
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">
            📧 Email
          </h3>
          <p className="text-gray-300">
            support@onlymart.com
          </p>
        </div>

        <div className="contact-card bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg hover:shadow-yellow-400/50 transition">
          <h3 className="text-xl font-semibold text-yellow-400 mb-2">
            📞 Phone
          </h3>
          <p className="text-gray-300">
            +91 98765 43210
          </p>
        </div>
      </div>

      {/* CONTACT FORM */}
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-yellow-400/40 transition">
        <form className="space-y-6">
          
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 rounded-xl transition duration-300"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
}

export default Contact;