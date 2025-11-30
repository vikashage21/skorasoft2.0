import React from "react";
import { Code, Globe, Video, Smartphone, Brush, ChartLine } from "lucide-react";

const services = [
  {
    title: "Web Development",
    icon: <Code size={40} />,
    description:
      "Modern, scalable, and high-performance websites built using MERN, Next.js, and more.",
  },
  {
    title: "Mobile App Development",
    icon: <Smartphone size={40} />,
    description:
      "Android, iOS, and cross-platform apps with intuitive UI and smooth performance.",
  },
  {
    title: "Digital Marketing",
    icon: <ChartLine size={40} />,
    description:
      "Boost your brand visibility through SEO, Ads Management, and Social Media growth.",
  },
  {
    title: "Branding & UI/UX",
    icon: <Brush size={40} />,
    description:
      "Beautiful designs and strong brand identities that connect with your audience.",
  },
  {
    title: "3D & Promo Videos",
    icon: <Video size={40} />,
    description:
      "High-quality promotional and corporate videos, perfect for product launches.",
  },
  {
    title: "Business Websites",
    icon: <Globe size={40} />,
    description:
      "Professional business websites tailored for maximum conversions and sales.",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">
        Our <span className="text-blue-500">Services</span>
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="p-8 bg-gray-900 border border-gray-700 rounded-2xl hover:border-blue-500 hover:shadow-[0_0_30px_rgba(0,123,255,0.4)] transition-all duration-300 text-center"
          >
            <div className="flex justify-center mb-4 text-blue-400">
              {service.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-400 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
