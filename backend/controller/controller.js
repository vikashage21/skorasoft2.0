import Contact from "../models/contact.js";
import Admin from '../models/Admin.js';
import Blog from '../models/blogs.js'
import jwt from "jsonwebtoken";  // FIXED
import axios from 'axios'
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import Video from '../models/videoSchema.js'


// GET all users/messages
export const getAllUsers = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages
    });
  } catch (error) {
    console.error("Fetch error:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

// POST (save contact form data)
export const userPost = async (req, res) => {
  try {
    console.log("REQ BODY:", req.body);

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required"
      });
    }

    const savedData = await Contact.create({ name, email, message });

    res.status(201).json({
      success: true,
      message: "Message saved successfully!",
      data: savedData
    });

  } catch (error) {
    console.error("Error saving message:", error.message);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

// GET user data (for future use)
export const getUserData = (req, res) => {
  console.log("get user data");
};

// Admin login
export const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(username, password);

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: "Username and password required"
      });
    }

    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Invalid username"
      });
    }

    if (password !== admin.password) {
      return res.status(401).json({
        success: false,
        message: "Invalid password"
      });
    }

    const token = jwt.sign(
      { id: admin._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token
    });

  } catch (error) {
    console.error("Admin login error:", error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};

// Get all messages for admin dashboard
export const getAllMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      data: messages
    });
  } catch (error) {
    console.error("Fetch messages error:", error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};
// ===================================

export const getBlogs = async (req, res, next) => {
  try {
    const blogs = await Blog.find().sort({ date: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }
}

export const singleBlogs = async (req, res, next) => {

  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    console.log(blog)
    res.json(blog);
    if (!blog)
      return res.status(404).json({ error: "Blog not found" });

    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: "Server Error" });
  }

}





// export const chatBot = async (req, res, next) => {
//   const { message } = req.body;
//   console.log(message)

//   try {
//     const response = await axios.post(
//       "https://api.openai.com/v1/chat/completions",
//       {
//         model: "gpt-3.5-turbo",
//         messages: [
//           {
//             role: "system",
//             content:
//               "You are Vikash's fitness project chatbot. Answer only fitness and workout related questions.",
//           },
//           { role: "user", content: message },
//         ],
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer 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`,
//         },
//       }
//     );

//     res.json({ reply: response.data.choices[0].message.content });
//   } catch (error) {
//     console.log(error.response?.data || error);
//     res.status(500).json({ error: "OpenAI API Error" });
//   }
// }

//  controller for upload video 

export const uploadVideo = async (req, res) => {
  try {
    // Upload video
    const videoResult = await cloudinary.uploader.upload(req.files.video[0].path, {
      resource_type: "video",
      folder: "uploads_videos",
    });

    // Upload image thumbnail
    const imageResult = await cloudinary.uploader.upload(req.files.image[0].path, {
      resource_type: "image",
      folder: "uploads_thumbnails",
    });

    const newVideo = new Video({
      title: req.body.title,
      description: req.body.description,
      genre: req.body.genre,
      videoUrl: videoResult.secure_url,
      imageUrl: imageResult.secure_url,
      uploadedBy: req.body.uploadedBy || "Anonymous",
    });

    await newVideo.save();
    res.status(201).json(newVideo);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
  // GET all videos
export const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: videos.length,
      videos,
    });
  } catch (error) {
    console.error("Error fetching videos:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching videos",
    });
  }
};

export const getSingleVideo = async (req, res) => {
  try {
    const video = await Video.findById(req.params.id);

    if (!video) {
      return res.status(404).json({ error: "Video not found" });
    }

    res.json({ success: true, video });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
