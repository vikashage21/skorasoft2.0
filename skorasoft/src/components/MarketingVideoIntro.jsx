import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MarketingVideoIntro() {
  const videoRef = useRef(null);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const playBtnRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Cinematic zoom & fade effect
    gsap.fromTo(
      videoRef.current,
      { scale: 1.4, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // Text fade-up
    gsap.fromTo(
      textRef.current,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
      }
    );

    // GSAP button hover animation
    if (playBtnRef.current) {
      gsap.to(playBtnRef.current, {
        scale: 1.1,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen py-20 bg-black text-white flex flex-col items-center justify-center px-6"
    >
      {/* Text Section */}
      <div ref={textRef} className="text-center mb-10 z-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Transform Your Business With Marketing
        </h2>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
          The strategy that brings clients, builds trust, and grows your brand.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1 hover:scale-105">
            Learn More
          </button>
          <button className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition transform hover:-translate-y-1 hover:scale-105">
            Get Started
          </button>
          <button className="px-6 py-3 bg-purple-600 text-white rounded-xl shadow-lg hover:bg-purple-700 transition transform hover:-translate-y-1 hover:scale-105">
            Contact Us
          </button>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative w-full max-w-6xl aspect-video">
        <video
          ref={videoRef}
          className="w-full h-full rounded-2xl shadow-2xl object-cover"
          playsInline
        >
          <source src="/video2.mp4" type="video/mp4" />
        </video>

        {/* GSAP Animated Play/Pause Button */}
        {!isPlaying && (
          <button
            ref={playBtnRef}
            onClick={togglePlay}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-24 md:h-24 bg-white bg-opacity-20 hover:bg-opacity-50 rounded-full shadow-lg flex items-center justify-center cursor-pointer"
          >
            <div className="w-5 h-5 md:w-7 md:h-7 bg-white rounded-full animate-pulse">
                🧑‍🚀
            </div>
          </button>
        )}
      </div>
    </section>
  );
}
