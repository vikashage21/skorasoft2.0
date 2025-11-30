
import mongoose from 'mongoose'
const videoSchema = new mongoose.Schema({
  title: String,
  description: String,
  videoUrl: String,
  imageUrl: String,     // <-- ADD THIS
  uploadedBy: String,
  genre: {
    type: String,
    required: true,
    enum: [
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
    ]
  },
  createdAt: { type: Date, default: Date.now }
});

const Video = mongoose.model('video', videoSchema)

export default Video;