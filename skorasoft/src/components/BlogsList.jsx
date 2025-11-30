import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  // Toggle: "blogs" | "videos"
  const [activeTab, setActiveTab] = useState("blogs");

  useEffect(() => {
    async function fetchData() {
      try {
        const [blogRes, videoRes] = await Promise.all([
          axios.get("https://skorasoft2-0-2.onrender.com/api/blogs"),
          axios.get("https://skorasoft2-0-2.onrender.com/api/videos"),
        ]);

        setBlogs(blogRes.data);
        setVideos(videoRes.data.videos || []);
      } catch (err) {
        console.log("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading)
    return (
      <div className="text-white flex justify-center items-center h-screen text-xl">
        ⏳ Loading...
      </div>
    );

  return (
    <div className="min-h-screen p-6 bg-black text-white mt-10">
      <h1 className="text-4xl font-bold mb-8 text-center">Content Library</h1>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setActiveTab("blogs")}
          className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
            activeTab === "blogs"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-400 hover:bg-gray-700"
          }`}
        >
          Blogs
        </button>

        <button
          onClick={() => setActiveTab("videos")}
          className={`px-6 py-2 rounded-full font-medium transition-colors duration-300 ${
            activeTab === "videos"
              ? "bg-blue-600 text-white"
              : "bg-gray-800 text-gray-400 hover:bg-gray-700"
          }`}
        >
          Videos
        </button>
      </div>

      {/* Blog Section */}
      {activeTab === "blogs" && (
        <div className="flex flex-col items-center gap-6">
          {blogs.length === 0 ? (
            <p className="text-gray-400">No blogs available.</p>
          ) : (
            blogs.map((blog) => (
              <Link
                key={blog._id}
                to={`/blogs/${blog.slug}`}
                className="w-full md:w-3/4 lg:w-1/2 p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transition-shadow shadow-lg"
              >
                <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                <p className="text-gray-300">{blog.description}</p>
              </Link>
            ))
          )}
        </div>
      )}

      {/* Video Section */}
      {activeTab === "videos" && (
        <div className="flex flex-col items-center gap-6">
          {videos.length === 0 ? (
            <p className="text-gray-400">No videos uploaded yet.</p>
          ) : (
            videos.map((video) => (
              <Link
                key={video._id}
                to={`/videos/${video._id}`}
                className="w-full md:w-3/4 lg:w-1/2 p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transition-shadow shadow-lg"
              >
                {video.imageUrl && (
                  <img
                    src={video.imageUrl}
                    alt={video.title}
                    className="w-full h-56 object-cover rounded-lg mb-4"
                  />
                )}
                <h2 className="text-2xl font-bold mb-2">{video.title}</h2>
                <p className="text-gray-300">{video.description}</p>
                <div className="mt-2 text-sm text-gray-400">
                  Genre: {video.genre} • Uploaded by {video.uploadedBy}
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
