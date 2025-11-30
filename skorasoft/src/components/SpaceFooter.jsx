import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaRocket, FaCoffee, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function SpaceFooter() {
  const starsRef = useRef([]);
  const footerRef = useRef(null);

  useEffect(() => {
    // Animate stars
    starsRef.current.forEach((star, i) => {
      gsap.to(star, {
        y: "-=20",
        x: "+=15",
        duration: gsap.utils.random(2, 5),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.1,
      });
    });

    // Animate footer fade-in
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
        },
      }
    );
  }, []);

  // Generate stars
  const stars = Array.from({ length: 50 }, (_, i) => (
    <div
      key={i}
      ref={(el) => (starsRef.current[i] = el)}
      className="absolute bg-white rounded-full"
      style={{
        width: `${Math.random() * 2 + 1}px`,
        height: `${Math.random() * 2 + 1}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        opacity: Math.random(),
      }}
    />
  ));

  return (
    <footer
      ref={footerRef}
      className="relative w-full bg-gradient-to-t from-black via-gray-900 to-black text-white py-16 px-6 overflow-hidden"
    >
      {/* Stars background */}
      <div className="absolute inset-0">{stars}</div>

      {/* Floating astronaut image */}
      <img
        src="https://static.vecteezy.com/system/resources/previews/044/812/952/original/astronaut-floating-isolated-on-transparent-background-free-png.png"
        alt="Astronaut"
        className="absolute w-24 md:w-32 animate-bounce-slow top-10 right-10 z-10"
      />

      <div className="relative z-20 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        {/* Contact Info */}
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3">
            <FaRocket /> Ready To Do This?
          </h2>
          <p className="text-gray-300">We would love to hear more about your project</p>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <button className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1 hover:scale-105">
              <FaCoffee /> Let's Have a Coffee
            </button>
            <div className="flex flex-col text-gray-300 md:ml-4">
              <span><FaPhoneAlt /> Call Us: +917033313450</span>
              <span><FaEnvelope /> Email Us: info@skorasoft.com</span>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300 text-sm md:text-base">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#career" className="hover:text-white transition">Career</a>
          <a href="#blogs" className="hover:text-white transition">Blogs</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
          <a href="#profile" className="hover:text-white transition">Company Profile</a>
          <a href="#privacy" className="hover:text-white transition">Privacy Policy</a>
          <a href="#terms" className="hover:text-white transition">Terms & Conditions</a>
          <a href="#refund" className="hover:text-white transition">Refund Policy</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
        </div>
      </div>

      
    </footer>
  );
}
