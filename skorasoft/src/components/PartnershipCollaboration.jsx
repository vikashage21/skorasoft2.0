import React from "react";
import { Briefcase, Users, Handshake } from "lucide-react";

const PartnershipCollaboration = () => {
  const items = [
    {
      icon: <Handshake className="w-10 h-10" />,
      title: "Strategic Partnerships",
      desc: "Build long-term relationships that create mutual business growth and opportunities.",
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Community Collaboration",
      desc: "Collaborate with developers, designers, and creators to grow together.",
    },
    {
      icon: <Briefcase className="w-10 h-10" />,
      title: "Business Alliances",
      desc: "Connect with enterprises and startups for product-building and scaling.",
    },
  ];

  return (
    <section className="w-full py-20 bg-gray-950 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">Partnerships & Collaboration</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          We believe in creating strong partnerships that lead to innovation, growth,
          and shared success.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-800 hover:border-blue-500 hover:shadow-blue-900/40 transition-all"
            >
              <div className="flex justify-center mb-4 text-blue-400">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipCollaboration;
