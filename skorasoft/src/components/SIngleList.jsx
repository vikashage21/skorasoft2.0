import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SingleBlog() {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios.get(`https://skorasoft2-0-2.onrender.com/api/blogs/${slug}`)
      .then(res => setBlog(res.data))
      .catch(err => console.log(err));
  }, [slug]);

  console.log(blog)
  if (!blog) return <div className="text-black p-10">Loading...</div>;


  return (
    <div className="p-10 text-black mt-10">
      <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
      <p className="opacity-80 mb-4">{blog.date}</p>

      <div className="prose prose-invert max-w-4xl">
        <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      </div>
    </div>
  );
}
