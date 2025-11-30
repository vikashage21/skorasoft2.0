import express from 'express'
import dotenv from 'dotenv'
import { conn } from '../db/conn.js'
import cors from 'cors'
import router from '../router/router.js'
import multer from 'multer'
import { v2 as cloudinary } from "cloudinary";


const app = express()

dotenv.config()

// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
)

// ⭐ MOST IMPORTANT — BODY PARSER FIRST
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// ===================== 



// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});




//  ================ 

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });



// ⭐ Routes AFTER body parsing
app.use('/api', router)

// DB Connection + Server Start
conn(
  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`)
  })
)
