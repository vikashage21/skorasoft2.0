import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-900">Skorasoft</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="cursor-target">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-target">
            <Link to="/company">Company</Link>
          </li>
          <li className="cursor-target">
            <Link to="/services">Services</Link>
          </li>
           <li className="cursor-target">
            <Link to="/admin">admin</Link>
          </li>

          <li className="cursor-target">
            <Link to="/career">Career</Link>
          </li>
          <li className="cursor-target">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="cursor-target">
            <Link to="/blogs">blogs/news</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-900 text-3xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden bg-white px-6 pb-4 space-y-4 text-gray-700 font-medium shadow">
          <li>
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/company" onClick={() => setOpen(false)}>
              Company
            </Link>
          </li>
          <li>
            <Link to="/services" onClick={() => setOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/news" onClick={() => setOpen(false)}>
              News & Blogs
            </Link>
          </li>
          <li>
            <Link to="/career" onClick={() => setOpen(false)}>
              Career
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
