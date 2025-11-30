import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function SingleVideo() {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideo() {
      try {
        const res = await axios.get(`https://skorasoft2-0-2.onrender.com/api/videos/${id}`);
        setVideo(res.data.video);
      } catch (err) {
        console.log("Fetch video error:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchVideo();
  }, [id]);

  if (loading) return <div className="p-10 text-black">⏳ Loading video...</div>;

  if (!video) return <div className="p-10 text-black">❌ Video not found</div>;

  return (
    <div className="p-10 text-black max-w-3xl mx-auto">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-block mb-6 px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 mt-10"
      >
        ⬅ Back
      </Link>

      {/* Title */}
      <h1 className="text-3xl font-bold mb-4">{video.title}</h1>

      {/* Uploader Info */}
      <div className="text-gray-700 mb-4">
        Uploaded by <span className="font-semibold">{video.uploadedBy}</span> •{" "}
        <span className="italic">{video.genre}</span>
      </div>

      {/* Video Player */}
      <div className="mb-6">
        <video
          controls
          className="w-full rounded-lg shadow-md"
          poster={video.imageUrl}
        >
          <source src={video.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Description */}
      <p className="text-lg leading-7">{video.description}</p>
    </div>
  );
}
