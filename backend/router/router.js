import express from 'express'
import { getAllUsers, userPost, adminLogin, getAllMessages, getBlogs, singleBlogs, uploadVideo, getAllVideos , getSingleVideo } from '../controller/controller.js'
import { adminAuth } from '../middlewares/adminAuth.js'
import multer from 'multer'
const upload = multer({ dest: "temp/" });

const router = express.Router()

// get request 
// user routes
router.post("/contact", userPost);
router.get("/users", getAllUsers);

// admin login
router.post("/admin/login", adminLogin);

// admin dashboard (protected)
router.get("/admin/messages", adminAuth, getAllMessages);

// routes for blogs

router.get('/blogs', getBlogs)
router.get('/blogs/:slug', singleBlogs)
// router.post('/chat', chatBot)
router.post('/upload',upload.fields([
    { name: "video", maxCount: 1 },
    { name: "image", maxCount: 1 }
  ]), uploadVideo)

  router.get("/videos", getAllVideos);
  router.get("/videos/:id", getSingleVideo);




export default router;