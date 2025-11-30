import mongoose from "mongoose";
import Blog from "../models/blogs.js";

mongoose
  .connect('mongodb+srv://vk220783_db_user:uDwIa7GrcQOo0k0J@cluster0.jzfvm1l.mongodb.net/')
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));

async function seedBlogs() {
  await Blog.deleteMany(); // Clear old data

  await Blog.insertMany([
    {
      title: "Welcome to Skorasoft",
      slug: "welcome-to-skorasoft",
      description: "A quick introduction to what Skorasoft is building.",
      content:
        "Skorasoft is a modern tech company focusing on web development, AI, cloud, and automation.",
      thumbnail: "",
    },
    {
      title: "Why Your Business Needs a Website in 2025",
      slug: "why-business-needs-website-2025",
      description:
        "Learn why having a professional website is essential in 2025.",
      content:
        "In 2025, a website is not just optional — it is a necessity for brand trust, marketing, and automation.",
      thumbnail: "",
    },
  ]);

  console.log("Blogs Seeded Successfully!");
  process.exit();
}

seedBlogs();
