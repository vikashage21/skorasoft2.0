import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ContentSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      videoRef.current,
      { y: 200, opacity: 0, scale: 0.7 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: "#content",
          start: "top bottom",
          end: "top center",
          scrub: 1.3,
        },
      }
    );
  }, []);

  return (
    <section
      id="content"
      className="w-full py-20 px-10 md:px-20 text-white"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* MARKETING COMPANY TEXT */}
        <div className="max-w-lg space-y-6">
          <h2 className="text-5xl font-bold">
            Powering Brands with Creative Marketing Solutions
          </h2>

          <p className="text-lg opacity-80 leading-relaxed">
            We help businesses turn ideas into powerful marketing strategies. 
            From brand identity to digital campaigns, we craft experiences 
            that amplify your voice and engage your audience.
          </p>

          <p className="text-lg opacity-80 leading-relaxed">
            With smart storytelling, impactful visuals, and modern digital 
            solutions — we transform brands into growth engines.
          </p>
        </div>

        {/* VIDEO */}
        <div className="w-full md:w-[500px] h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            autoPlay
            loop
            playsInline
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>

      {/* MARKETING SERVICES */}
      <div className="grid md:grid-cols-3 gap-10 mt-20">
        {[
          "Brand Strategy & Identity",
          "Digital Marketing Campaigns",
          "Social Media Growth",
          "Creative Content Production",
          "Website & Landing Page Design",
          "SEO + Performance Marketing",
        ].map((item, index) => (
          <div
            key={index}
            className="p-6 bg-[#111] rounded-xl border border-gray-800 hover:border-blue-500 transition"
          >
            <h3 className="text-xl font-semibold">{item}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentSection;