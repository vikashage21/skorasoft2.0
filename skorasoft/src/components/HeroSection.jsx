import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ModelViewer from "./ModelViewer";
import LaserFlow from "./LaserFlow";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroModelRef = useRef(null);

  useEffect(() => {
    if (!heroModelRef.current) return;

    gsap.fromTo(
      heroModelRef.current,
      { y: 0, rotateY: 0 },
      {
        y: 150,
        rotateY: 0.8,
        ease: "none",
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.3,
        },
      }
    );
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen overflow-hidden flex items-center justify-between px-10 md:px-20 text-white"
    >
      {/* LASER FLOW BACKGROUND */}
      <div id="lights" className="laser-flow-container">
        <LaserFlow
          horizontalBeamOffset={0.1}
          verticalBeamOffset={0}
          color="#FF79C6"
        />
      </div>

      {/* TEXT CONTENT */}
      <div className="max-w-xl space-y-6 z-20">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Transforming Ideas Into
          <span className="text-pink-400"> Digital Reality</span>
        </h1>

        <p className="text-lg opacity-80">
          We specialize in custom solutions tailored to your business
          needs—delivering fast, secure, and scalable experiences. From startups
          to enterprises, we turn your ideas into powerful digital realities.
        </p>

        <button className="px-6 py-3 bg-pink-600 rounded-xl shadow-lg hover:bg-pink-700 transition">
          Explore More
        </button>
      </div>

      {/* 3D MODEL VIEWER */}
      <div
        ref={heroModelRef}
        className="hidden md:block w-[450px] h-[450px] z-20"
      >
        <ModelViewer url="https://modelviewer.dev/shared-assets/models/Astronaut.glb" />
      </div>
    </section>
  );
};

export default HeroSection;
