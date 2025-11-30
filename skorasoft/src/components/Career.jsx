import React from "react";
import Lanyard from "./Lanyard";

const careers = [
  { title: "Frontend Developer", location: "Remote/Noida" },
  { title: "Backend Developer", location: "Remote/Noida" },
  { title: "Full Stack Developer", location: "Remote/Noida" },
  { title: "UI/UX Designer", location: "Remote/Noida" },
  { title: "Marketing Specialist", location: "Remote/Noida" },
];

function Career() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 px-6 flex flex-col items-center">
      
      {/* 3D Lanyard */}
      <div className="w-full h-[400px] mb-10">
        <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        Join Our Skorasoft Team
      </h1>
      <p className="text-center text-gray-300 max-w-3xl mb-12">
        We are always looking for talented individuals to help us craft amazing digital experiences. 
        Explore our open positions and find your next career opportunity at Skorasoft.
      </p>

      {/* Career Opportunities */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {careers.map((job, index) => (
          <div
            key={index}
            className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-blue-500 transition transform hover:-translate-y-1 hover:scale-105 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-2">{job.title}</h2>
            <p className="text-gray-400">{job.location}</p>
            <button className="mt-4 px-4 py-2 bg-blue-600 rounded-xl text-white hover:bg-blue-700 transition">
              Apply Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Career;
