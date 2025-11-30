import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function UploadVideo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [uploadedBy, setUploadedBy] = useState("");
  const [genre, setGenre] = useState("");
  const [image, setImage] = useState(null);
  const [video, setVideo] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const genres = [
    "Action",
    "Drama",
    "Comedy",
    "Thriller",
    "Romance",
    "Sci-Fi",
    "Horror",
    "Adventure",
    "Fantasy",
    "Documentary",
  ];

  const handleUpload = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("genre", genre);
    formData.append("uploadedBy", uploadedBy);
    formData.append("video", video);
    formData.append("image", image);

    try {
      setLoading(true);

      const res = await fetch("https://skorasoft2-0-2.onrender.com/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        alert("🎉 Video Upload Successful!");
        navigate("/");
      } else {
        alert(data.error);
      }
    } catch (err) {
      alert("Upload failed!");
    } finally {
      setLoading(false);
    }
  };

  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onload = () => setPreviewImage(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <div className="container py-5 bg-black w-screen h-screen  mx-auto text-white" >
      {/* Blog header */}
      <h1 className="fw-bold text-center mb-4 display-5 mt-20">
        ✍️ Publish New Video Post
      </h1>

      {/* Blog style form wrapper */}
      <div
        className="p-4 p-md-5 shadow rounded-4 bg-black"
        style={{ border: "1px solid #eee" }}
      >
        <form onSubmit={handleUpload} encType="multipart/form-data">
          {/* Title */}
          <input
            type="text"
            className="form-control border-0 border-bottom mb-4 fs-3 fw-semibold"
            placeholder="Enter an engaging title..."
            style={{ borderRadius: "0", outline: "none", boxShadow: "none" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          {/* Genre */}
          <div className="mb-4">
            <select
              className="form-select fs-5 p-2"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
              required
            >
              <option className="bg-black" value="">
                Select Genre...
              </option>
              {genres.map((g) => (
                <option className="bg-black" key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </div>

          {/* Description (blog writing style) */}
          <textarea
            className="form-control fs-5 p-3 w-full border-amber-50 border"
            placeholder="Write your video description here... (like a blog)"
            rows="7"
            style={{
              borderRadius: "12px",
              minHeight: "160px",
            }}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <span>Author name :</span>
          {/* Uploaded By */}
          <input
            type="text"
            className="form-control mt-4 fs-5 p-2"
            placeholder="Author name"
            value={uploadedBy}
            onChange={(e) => setUploadedBy(e.target.value)}
          />

          {/* Thumbnail Image */}
          <div className="mt-4">
            <label className="fw-semibold fs-5">Thumbnail Image</label>
            <input
              type="file"
              className="form-control"
              accept="image/*"
              onChange={handleImagePreview}
              required
            />
          </div>

          {/* Image Preview */}
          {previewImage && (
            <div className="text-center mt-3">
              <img
                src={previewImage}
                alt="preview"
                className="rounded-4 shadow"
                style={{
                  width: "100%",
                  maxHeight: "300px",
                  objectFit: "cover",
                }}
              />
            </div>
          )}

          {/* Video Upload */}
          <div className="mt-4">
            <label className="fw-semibold fs-5">Upload Video</label>
            <input
              type="file"
              className="form-control"
              accept="video/*"
              onChange={(e) => setVideo(e.target.files[0])}
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-dark mt-4 w-100 py-3 fs-5 rounded-4 mx-auto bg-blue-300"
            disabled={loading}
          >
            {loading ? "Publishing..." : "Publish Post"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default UploadVideo;
