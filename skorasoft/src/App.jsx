import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Career from "./components/Career";
import TargetCursor from "./components/TargetCursor";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import Company from "./pages/Company";
import Services from "./pages/Service";
import BlogList from "./components/BlogsList";
import SingleBlog from "./components/SIngleList";
import SingleVideo from "./components/SingleVideo";
import UploadVideo from "./components/UploadVideo";
import './App.css'
// Layout with Navbar (for user pages)
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

// Layout WITHOUT Navbar (for admin pages)
const AdminLayout = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const App = () => {
  const router = createBrowserRouter([
    {
      element: <MainLayout />, // Navbar will show here
      children: [
        { path: "/", element: <Home /> },
        { path: "/contact", element: <Contact /> },
        { path: "/company", element: <Company /> },
        { path: "/services", element: <Services /> },
        { path: "/blogs", element: <BlogList /> },
        { path: "/blogs/:slug", element: <SingleBlog /> },

        { path: "/career", element: <Career /> },
        { path: "/videos/:id", element: <SingleVideo /> },
        {path:"/post" , element : <UploadVideo/>}


        
      ],
    },

    {
      element: <AdminLayout />, // No navbar here
      children: [
        { path: "/admin", element: <AdminLogin /> },
        { path: "/admin/dashboard", element: <AdminDashboard /> },
      ],
    },
  ]);

  return (
    <>
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
