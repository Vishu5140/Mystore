import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useNavigate } from "react-router";

gsap.registerPlugin(useGSAP);

function Login() {
  const[email,setemail]=useState("");
  const[password,setpassword]=useState("");
  const containerRef = useRef();
  const formRef = useRef();
 const navigate=useNavigate();
  useGSAP(() => {
    gsap.from(containerRef.current, {
      
      y: -50,
      duration: 1,
      ease: "power3.out",
    });

    gsap.from(formRef.current.children, {
      
      y: 20,
      duration: 0.8,
      stagger: 0.15,
      delay: 0.3,
      ease: "power3.out",
    });
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const getemail=localStorage.getItem("email")
    const getpassword=localStorage.getItem("password");
    localStorage.setItem("auth",true);
    if(email===getemail && getpassword===password)
    {
        navigate("/");
         setemail(" ");
      setpassword(" ");
    }
    else{
      alert("something went wrong");
      navigate("/login");
      setemail(" ");
      setpassword(" ");
      
    }
    console.log("Form Submitted");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-black via-gray-900 to-gray-800">
      <div
        ref={containerRef}
        className="bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl p-10 w-full max-w-md border border-white/20"
      >
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          Login Your Account
        </h2>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              required
              className="peer w-full px-4 py-3 bg-transparent border border-gray-400 rounded-lg text-white focus:outline-none focus:border-blue-500"
              placeholder=" "
              value={email}
               onChange={(e)=>setemail(e.target.value)}
            />
            <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all 
              peer-placeholder-shown:top-3 
              peer-placeholder-shown:text-base 
              peer-placeholder-shown:text-gray-400
              peer-focus:-top-2 
              peer-focus:text-sm 
              peer-focus:text-blue-400
              bg-gray-900 px-1">
              Email
            </label>
          </div>

          {/* Password */}
          <div className="relative">
            <input
              type="password"
              required
              value={password}
              className="peer w-full px-4 py-3 bg-transparent border border-gray-400 rounded-lg text-white focus:outline-none focus:border-blue-500"
              placeholder=" "
               onChange={(e)=>setpassword(e.target.value)}
            />
            <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all 
              peer-placeholder-shown:top-3 
              peer-placeholder-shown:text-base 
              peer-placeholder-shown:text-gray-400
              peer-focus:-top-2 
              peer-focus:text-sm 
              peer-focus:text-blue-400
              bg-gray-900 px-1">
              Password
            </label>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 transition duration-300 text-white font-semibold rounded-lg shadow-lg"
          >
            Login
          </button>

          <p className="text-gray-400 text-sm text-center">
            Already have an account?{" "}
            <span className="text-blue-400 cursor-pointer hover:underline">
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;