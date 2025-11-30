import React from "react";

const Company = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-16">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-12">
        About <span className="text-blue-500">Our Company</span>
      </h1>

      {/* Section 1 */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Office"
          className="rounded-xl shadow-lg"
        />

        <div>
          <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
          <p className="text-gray-300 leading-relaxed">
            We are a fast-growing IT company delivering modern digital
            solutions. With expertise in **Web Development, Branding, Digital
            Marketing, UI/UX**, and **Custom Software Development**, our mission
            is to transform businesses with innovative technology.
          </p>
        </div>
      </section>

      {/* Section 2 */}
      <section className="max-w-6xl mx-auto mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Our mission is to empower startups and enterprises with world-class
          digital products that enhance performance, deliver growth, and
          shape the future.
        </p>
      </section>

      {/* Stats */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
        <div className="p-8 bg-gray-800 rounded-xl hover:bg-gray-700 transition">
          <h3 className="text-4xl font-bold text-blue-400">50+</h3>
          <p className="text-gray-300">Projects Completed</p>
        </div>
        <div className="p-8 bg-gray-800 rounded-xl hover:bg-gray-700 transition">
          <h3 className="text-4xl font-bold text-blue-400">20+</h3>
          <p className="text-gray-300">Happy Clients</p>
        </div>
        <div className="p-8 bg-gray-800 rounded-xl hover:bg-gray-700 transition">
          <h3 className="text-4xl font-bold text-blue-400">5+</h3>
          <p className="text-gray-300">Years Experience</p>
        </div>
      </div>
    </div>
  );
};

export default Company;
